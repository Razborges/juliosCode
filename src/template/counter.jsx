import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { inc, dec } from '../actions/counterAction';

import Button from './button';
import '../estilo/index.css'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        if(this.props.counter.step >= 26) {
            this.props.inc(26);
        } else {
            this.props.inc(this.props.counter.step + 1);
        }
    }

    decrement() {
        if(this.props.counter.step <= 0) {
            this.props.dec(0);
        } else {
            this.props.dec(this.props.counter.step - 1);
        }
    }

    render() {
        return (
            <div className="o-counter">
                <Button mask="smallbtn" action={this.decrement} label='-' />
                <p className="counter">{this.props.counter.step}</p>
                <Button mask="smallbtn" action={this.increment} label='+' />
            </div>
        )
    }
}

const mapStateToProps = state => ({ counter: state.counter });
const mapDispatchToProps = dispatch => bindActionCreators({ inc, dec }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);