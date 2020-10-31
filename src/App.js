import React from 'react';
import Squares from './components/liftingState/Squares';
import SignUp from './components/liftingState/SignUp'

const App = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <Squares />
            <SignUp minimumLength={ 12 }/>
        </div>
    );
}

export default App;
