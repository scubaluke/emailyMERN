import React from 'react'

export default function SurveyField({ input }) {
    console.log(input);
    return (
        <div>
            <input {...input} />
        </div>
    )
}
