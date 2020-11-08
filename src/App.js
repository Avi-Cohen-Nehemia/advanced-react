import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import Squares from './components/liftingState/Squares'
import SignUp from './components/liftingState/SignUp'
import Button from './components/passingDataUp/Button'
import Form from './components/passingDataUp/Form'
import Articles from './news/Articles'

const App = () => {
    return (
        <Router>
            <h1>Hello World</h1>
            <Route exact path='/squares' component={ Squares }/>
            <Route exact path='/signup'>
                <SignUp minimumLength={ 12 }/>
            </Route>
            <Route exact path='/button'>
                <Button handleUpdate={ (value) => console.log(value) }/>
            </Route>
            <Route exact path='/form'>
                <Form handleSubmit={ (value) => console.log(value) }/>
            </Route>
            <Route exact path='/Articles'>
                <Articles/>
            </Route>    
        </Router>
    );
}

export default App;
