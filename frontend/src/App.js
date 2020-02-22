import React from 'react';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


import Comparison from './Comparison';
import Post from './Post';


function App() {
    return (
        <ThemeProvider>
            <CssBaseline />
            <Toolbar />
            <Container>
                <Box my={2}>
                    <Paper>
                        <Typography variant="h3" align='center'>
                            Post
                        </Typography>
                        <Post />
                    </Paper>
                    <Divider />
                    <Paper>
                        <Typography variant="h3" align='center'>
                            Size comparison
                        </Typography>
                        <Comparison />
                    </Paper>
                </Box>
            </Container>
        </ThemeProvider>
      );
}

export default App;
