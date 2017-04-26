import React from 'react';

export default props => (
    <button onClick={props.action}>{props.label}</button>
);