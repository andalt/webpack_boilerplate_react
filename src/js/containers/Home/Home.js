import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increment, decrement } from './HomeActions';

function Home(props) {
    return (
        <section>
            <h1>Home</h1>
            <p>Count: {props.count}</p>

            <p>
                <button onClick={props.increment}>
                    Increment
                </button>
            </p>
            <p>
                <button onClick={props.decrement}>
                    Decrement
                </button>
            </p>
        </section>
    );
}

Home.propTypes = {
    count: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func
};

const mapStateToProps = state => ({
    count: state.HomeReducer.count
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            increment,
            decrement
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
