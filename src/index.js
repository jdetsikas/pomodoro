import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    let text = "Hello world!"

    return (
        <div className="app">
            <p>{text}</p>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app'),
);