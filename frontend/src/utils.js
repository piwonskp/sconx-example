import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';


export const URL = 'https://localhost:5000/api/people';

export const getLen = async url => {
    var resp = await fetch(URL + '/read' + url,
                           {mode: 'cors'});
    var text = await resp.text();
    return [text, text.length];
};

export var Panel = ({...props}) =>
    <ExpansionPanel style={{overflowWrap: "anywhere"}} {...props} />;
