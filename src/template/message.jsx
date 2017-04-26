import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { msgChanged } from '../actions/messageAction';

const Message = props => (
    <div>
        <input onChange={props.msgChanged} type='text' />
        <p>{props.message.msg}</p>
    </div>
)

const mapStateToProps = state => ({ message: state.message });
const mapDispatchToProps = dispatch => bindActionCreators({ msgChanged }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Message);