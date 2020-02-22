import React, {useEffect, useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

import Swagger from 'swagger-client';
import {URL} from './utils';


var api = Swagger(URL + '/openapi.json');


export default function Post() {

    const request = {"last_name": "Blair", "first_name": "Martin", "street_address": "091 Perry Lakes", "email": "elliottshelby@sanders.org"};
    const [response, setResponse] = useState('');

    useEffect(() => {api.then(
        client => client.apis.default.people_person_add_age(
            {'Content-Type': 'application/jsan'},
            {requestBody: request}
        ).then(resp => setResponse(JSON.stringify(resp.body)))
    );});

    return (
            <TableContainer>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Request</TableCell>
                            <TableCell>
                                {JSON.stringify(request)}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Response</TableCell>
                            <TableCell>{response}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
    );
}
