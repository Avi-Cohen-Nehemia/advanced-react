import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"; 
import Squares from './components/liftingState/Squares'
import SignUp from './components/liftingState/SignUp'
import Button from './components/passingDataUp/Button'
import Form from './components/passingDataUp/Form'
import Articles from './news/Articles'
import Article from './news/Article'
import CreateArticle from './news/CreateArticle'
import FourOhFour from './components/FourOhFour'

const App = () => {
    return (
        <Router>
            <div className='container'>
                <Link to="/">
                    <h1 className="page-header">{'Bloggo Magnifico'}</h1>
                </Link>
                <Switch>
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

                    <Route exact path='/news'>
                        <Articles/>
                    </Route>
                    <Route exact path='/news/create'>
                        <CreateArticle />
                    </Route>

                    <Route exact path='/news/:id' render={ ({match}) => (
                        <Article id={ match.params.id }/>
                    )}/>

                    <FourOhFour />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
