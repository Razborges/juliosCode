import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { msgChanged, criptChanged, clear } from '../actions/messageAction';

import Button from './button';

class Message extends Component {
    constructor(props) {
        super(props);
        this.encrypt = this.encrypt.bind(this);
        this.decrypt = this.decrypt.bind(this);
    }

    encrypt() {
        let step = this.props.counter.step;
        let msg = this.props.message.msg.toUpperCase();
        let alpha = this.props.message.alpha;
        let resultAux = '';
        for(let j = 0; j < msg.length; j++) {
            if(msg[j] === ' ') {
                resultAux += ' ';
            } else {
                for (let i = 0; i < alpha.length; i++) {
                    if(msg[j] === alpha[i]) {
                        let num = (i + step) % alpha.length
                        resultAux += alpha[num];
                    }
                }
            }
        }
        console.log('função do componente ==>', resultAux);
        criptChanged(resultAux);
    }

    decrypt() {
        let step = this.props.counter.step;
        let msg = this.props.message.msg.toUpperCase();
        let alpha = this.props.message.alpha;
        let resultAux = '';
        for(let j = 0; j < msg.length; j++) {
            if(msg[j] === ' ') {
                resultAux += ' ';
            } else {
                for (let i = 0; i < alpha.length; i++) {
                    if(msg[j] === alpha[i]) {
                        let num = (i - step) % alpha.length
                        resultAux += alpha[num];
                    }
                }
            }
        }
        console.log('função do componente ==>', resultAux);
        criptChanged(resultAux);
    }

    render() {
        return (
            <div>
                <input onChange={this.props.msgChanged} type='text' value={this.props.message.msg} />
                <Button action={this.encrypt} label='Criptografar' />
                <Button action={this.decrypt} label='Descriptografar' />
                <Button action={this.props.clear} label='Apagar' />
                <p>{this.props.message.cript}</p>
            </div>
        )
    }
};

const mapStateToProps = state => ({ message: state.message, counter: state.counter });
const mapDispatchToProps = dispatch => bindActionCreators({ msgChanged, criptChanged, clear }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Message);