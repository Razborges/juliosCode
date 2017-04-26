import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { inc, dec } from '../actions/counterAction';

import Button from './button';

const Counter = props => (
    <div>
        <p>{props.counter.step}</p>
        <Button action={props.dec} label='-' />
        <Button action={props.inc} label='+' />
    </div>
);

const mapStateToProps = state => ({ counter: state.counter });
const mapDispatchToProps = dispatch => bindActionCreators({ inc, dec }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
