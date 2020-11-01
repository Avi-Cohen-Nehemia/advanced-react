import React from 'react'
import Squares from './components/liftingState/Squares'
import SignUp from './components/liftingState/SignUp'
import Button from './components/passingDataUp/Button'
import Form from './components/passingDataUp/Form'

const App = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <Squares />
            <SignUp minimumLength={ 12 }/>
            <Button handleUpdate={ (value) => console.log(value) }/>
            <Form handleSubmit={ (value) => console.log(value) }/>
        </div>
    );
}

export default App;
