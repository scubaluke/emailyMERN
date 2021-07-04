import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import SurveyField from './SurveyField'
import validateEmails from '../../utils/validateEmails'
import formFields from './SurveyField'


class SurveyForm extends Component {
    renderFields() {
      return   formFields.map(({ label, name }) => <Field component={SurveyField} type='text' label={label} name={name} key={name} />)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)} >
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

function validate(values) {
    const errors = {}

    errors.email = validateEmails(values.email || '')

    formFields.forEach(({name}) => { if(!values[name]) {
        errors[name] = `you must provide a ${name}`
    } })
  
    return errors
}

export default reduxForm({
    validate: validate,
    form: 'surveyForm',
    destroyOnUnmount: false,
})(SurveyForm)