import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"; 
import Squares from './components/liftingState/Squares'
import SignUp from './components/liftingState/SignUp'
import Button from './components/passingDataUp/Button'
import Form from './components/passingDataUp/Form'
import Articles from './news/Articles'
import Article from './news/Article'
import CreateArticle from './news/CreateArticle'
import EditArticle from './news/EditArticle'
import FourOhFour from './components/FourOhFour'
import CountHooks from './hooks/CountHooks'
import ClickedHooks from './hooks/ClickedHooks'
import SquareHooks from './hooks/SquareHooks'
import ToggleTextHooks from './hooks/ToggleTextHooks'
import CounterHooks from './hooks/CounterHooks'
import StepCounter from './hooks/StepCounter'
import CatchMeIfYouCan from './hooks/CatchMeIfYouCan'
import RollCall from './hooks/RollCall'

const App = () => {
    return (
        <Router>
            <div className='container'>
                <Link to="/">
                    <h1 className="page-header">{'Bloggo Magnifico'}</h1>
                </Link>
                <Switch>
                    {/* lifting state */}
                    <Route exact path='/squares' component={Squares}/>
                    <Route exact path='/signup'>
                        <SignUp minimumLength={12}/>
                    </Route>
                    <Route exact path='/button'>
                        <Button handleUpdate={(value) => console.log(value)}/>
                    </Route>
                    <Route exact path='/form'>
                        <Form handleSubmit={(value) => console.log(value)}/>
                    </Route>

                    {/* Making API requests in react */}
                    <Route exact path='/news'>
                        <Articles/>
                    </Route>
                    <Route exact path='/news/create'>
                        <CreateArticle />
                    </Route>
                    <Route exact path='/news/:id' render={({match}) => (
                        <Article id={match.params.id}/>
                    )}/>
                    <Route exact path='/news/:id/edit' render={({match}) => (
                        <EditArticle id={match.params.id}/>
                    )}/>

                    <Route exact path='/hooks'>
                        {/* Hooks */}
                        <CountHooks />
                        <ClickedHooks />
                        <SquareHooks />
                        <ToggleTextHooks />
                        <CounterHooks initial={50} max={100}/>
                        <StepCounter max={100} step={5}/>
                        <CatchMeIfYouCan jump={100}/>
                        <RollCall names={['Avi', 'Ricardo', 'Ethan', 'Laura', 'Maria', 'Sath', 'Halim', 'Annie']}/>
                    </Route>

                    <FourOhFour />
                </Switch>
            </div>
        </Router>
    );
}

export default App
