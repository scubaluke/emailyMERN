const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./services/passport');

try {
    mongoose.connect(process.env.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})

} catch (error) {
    console.error(error);
}

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [process.env.cookieKey]
    })
)
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json())

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app)

if(process.env.NODE_ENV === 'production') {
    // express will server up  production assets like  main.js & main.css
    app.use(express.static('client/build'))
    // express will server up index.html if it doesn't recognize the route.
   const path = require('path'); 
   app.get('*', (req, res) => {
       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
   })
}

const PORT = process.env.PORT || 5000

app.listen(PORT);