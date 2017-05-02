import React from 'react';

export default props => (
    <button className={props.mask} onClick={props.action}>{props.label}</button>
);