import React from 'react';
import ReactDOM from 'react-dom';

const App = function () {
    return <div style={{ backgroundColor: 'red', border: '5px solid green', display: 'inline-block' }}>Hi there!</div>
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);