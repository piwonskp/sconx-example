import React, {useEffect, useState} from 'react';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

import {getLen, Panel} from './utils';


export const getJSON = () => getLen('');
export const getJSAN = () => getLen('/jsan');


function Comparison() {
    const [json, setJSON] = useState('');
    const [jsan, setJSAN] = useState('');

    useEffect(async () => {
        setJSON(await getJSON());
        setJSAN(await getJSAN());
    }, []);
  return (
    <>
        <Panel>
            <ExpansionPanelSummary>
                <Typography>
                    JSON length: {json[1]}
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>{json[0]}</Typography>
            </ExpansionPanelDetails>
        </Panel>
        <Panel>
            <ExpansionPanelSummary>
                <Typography>
                    JSAN length: {jsan[1]}
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>{jsan[0]}</Typography>
            </ExpansionPanelDetails>
        </Panel>
    </>
      );
}

export default Comparison;
