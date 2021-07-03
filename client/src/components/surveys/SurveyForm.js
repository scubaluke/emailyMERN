import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import SurveyField from './SurveyField'

const FIELDS = [
    { label: "Survey Title", name: 'title'},
    { label: "Subject Line", name: 'subject'},
    { label: "Email body", name: 'body'},
    { label: "Recipient List", name: 'email'},
]

class SurveyForm extends Component {
    renderFields() {
      return   FIELDS.map(({ label, name }) => <Field component={SurveyField} type='text' label={label} name={name} key={name} />)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit((values) => console.log(values))} >
                  {this.renderFields()}
                  <Link className='red btn-flat white-text' to='/surveys' >Cancel</Link>
                    <button  className='teal btn-flat right  white-text' type='submit' >next
                        <i className='material-icons right' >done</i>
                    </button>
                </form>
            </div>
        )
    }
}
export default reduxForm({
    form: 'surveyForm'
})(SurveyForm)