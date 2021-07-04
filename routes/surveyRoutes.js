const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const { URL } = require('url')
const {Path} = require('path-parser');
const _ = require('lodash')
const Survey = mongoose.model('surveys');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

module.exports = app => {
    app.get('/api/surveys/thanks', (req,res)  => {
        res.send('Thanks for voting!')
    })
    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
         const { title, subject, body, recipients } = req.body

         const survey = new Survey({
             title,
             subject,
             body,
             recipients: recipients.split(',').map(email => ({ email: email.trim() })),
             _user: req.user.id,
             dateSent: Date.now(),
        })
        // send the email
        const mailer = new Mailer(survey, surveyTemplate(survey));

        try {
            await mailer.send()
            await survey.save()
            req.user.credits -= 1;
            const user = await req.user.save()
    
            res.send(user) 
        } catch (error) {
            res.status(422).send(error)
        }

   
    })

    app.post('/api/surveys/webhooks', (req, res) => {
        const P = new Path('/api/surveys/:surveyId/:choice')

        const events = req.body.map(({url, email}) => {
        const match = P.test( new URL(url).pathname)
            if(match) {
                return {email, ...match};
            }
        })
        const compactEvents = _.compact(events)
        const uniqueEvents = _.uniqBy(compactEvents, 'email', 'surveyId')
        console.log(uniqueEvents);
       
        res.send({})
    })
}