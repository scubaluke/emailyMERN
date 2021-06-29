import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header'


const Dashboard = () => {
    return(
        <>
            <h2>Dashboard</h2>
        </>    )
}
const SurveyNew = () => {
    return(
        <h2>SurveyNew</h2>
    )
}
const Landing = () => {
    return(
        <>
            <h2>Landing</h2>
        </>
    )
}

class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser()
    }

    render() {
        return (
            <div className='container'>
               <BrowserRouter>
                <>
                 <Header />
                    <Route path='/' component={Landing} exact />
                    <Route path='/surveys' component={Dashboard} exact />
                    <Route path='/surveys/new' component={SurveyNew} />
                </>
               </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App)
