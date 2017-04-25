import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { inc, dec } from '../actions/counterAction';

const Counter = props => (
    <div>
        <h1>{props.counter.step}</h1>
        <button onClick={props.dec}>-</button>
        <button onClick={props.inc}>+</button>
    </div>
);

const mapStateToProps = state => ({ counter: state.counter });
const mapDispatchToProps = dispatch => bindActionCreators({ inc, dec }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
