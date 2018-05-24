import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function App(props) {
    return (
        <div className="wrapper">
            <header className="header">
                Header
                <br />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </header>

            <main className="main">
                { props.children }
            </main>

            <footer className="footer">
                Footer
            </footer>
        </div>
    );
}

App.propTypes = {
    children: PropTypes.node
};

export default App;
