import React, {useEffect, useState} from 'react';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

import {getLen, Panel} from './utils';


const getCompressedJSAN = () => getLen('/jsan/compressed');
const getCompressedJSON = () => getLen('/compressed');


function CompressedComparison() {
    const [compressedJSON, setCompressedJSON] = useState('');
    const [compressedJSAN, setCompressedJSAN] = useState('');

    useEffect(async () => {
        setCompressedJSON(await getCompressedJSON());
        setCompressedJSAN(await getCompressedJSAN());
    }, []);
  return (
    <>
        <Panel>
            <ExpansionPanelSummary>
                <Typography>
                    Compressed JSON length: {compressedJSON[1]}
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>{compressedJSON[0]}</Typography>
            </ExpansionPanelDetails>
        </Panel>
       <Panel>
            <ExpansionPanelSummary>
                <Typography>
                    Compressed JSAN length: {compressedJSAN[1]}
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>{compressedJSAN[0]}</Typography>
            </ExpansionPanelDetails>
        </Panel>
    </>
      );
}

export default CompressedComparison;
