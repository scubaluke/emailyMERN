import React, {useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { fetchSurveys } from '../../actions'

export default function SurveyList() {
    const dispatch = useDispatch()
    const surveys = useSelector((state) => state.surveys)

        useEffect(() => {
            dispatch(fetchSurveys())
    }, [ dispatch ])
 
    function renderSurveys() {
        if(surveys.length >= 1) {
            return surveys.reverse().map(survey => {
                return ( <div className='card darken-1 ' key={survey._id} >
                     <div className="card-content">
                         <span className="card-title">{survey.title}</span>
                         <p>{survey.body}</p>
                         <p className='right' >Sent On: {new Date(survey.dateSent).toLocaleDateString()}</p>
                     </div>
                     <div className="card-action">
                         <a href='/#'>Yes: {survey.yes}</a>
                         <a href='/#' >No: {survey.no}</a>
                     </div>
     
                 </div> )
             })
        } else {
            return (<div className='card darken-1 center' >You have no surveys. Click the red button to get your first survey started!</div>)
        }
      
    }

    return (
        <div>
            {renderSurveys()}
        </div>
    )
}
