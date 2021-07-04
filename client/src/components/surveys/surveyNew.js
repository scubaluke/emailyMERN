import React, { useState } from 'react'
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'
import { reduxForm } from 'redux-form'


function SurveyNew() {
    const [showFormReview, setShowFormReview] = useState(false)
    // setShowFormReview() {
    // }
    const renderContent = ()  =>  {
        return !showFormReview ? <SurveyForm onSurveySubmit={() => setShowFormReview(true)} /> : <SurveyFormReview onCancel={() => setShowFormReview(false)} />
    }
    return (
        <div>
                {renderContent()}
        </div>
    )
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew)


