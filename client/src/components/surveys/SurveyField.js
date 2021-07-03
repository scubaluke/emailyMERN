import React from 'react'

export default function SurveyField({ input, label }) {
    return (
        <div>
            <label htmlFor="">{label}</label>
            <input {...input} />
        </div>
    )
}
