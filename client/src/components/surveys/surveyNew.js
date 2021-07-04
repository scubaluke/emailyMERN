import React, { useState } from 'react'
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'


export default function SurveyNew() {
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


// export default class SurveyNew extends Component {
//     state = { showFormReview: false  };

//     render() {
//         return (
//             <div>
//                 { showFormReview ? <SurveyForm /> : <SurveyFormReview /> }
                
//             </div>
//         )
//     }
// }


