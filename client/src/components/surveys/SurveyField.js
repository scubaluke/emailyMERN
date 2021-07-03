import React from 'react'

export default function SurveyField({ input, label, meta: { error, touched } }) {
    return (
        <div>
            <label htmlFor="">{label}</label>
            <input {...input} />
            { touched && error }
        </div>
    )
}
