import React from "react";
import Dialog from '@material-ui/core/Dialog';
import { Box, Button, DialogContent, makeStyles, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles({
    component: {
        width: '100vh',
        height: "80vh",

    },
    image: {
        background: 'linear-gradient(to left, #0275d8 30%, rgb(182, 230, 8) 80%)',
        height: '70vh',
        width: '190px',
        marginBottom: '10px',
    },
    Login: {
        padding: '25px 35px',
        display: 'flex',
        flex: '1',
        flexDirection: 'column'
    },
})




const Login = ({ open, setOpen }) => {
    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    }

    return (

        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component} >
                <Box style={{ display: 'flex' }}>
                    <Box className={classes.image}>

                    </Box>
                    <Box className={classes.Login}>

                        <TextField label="Enter email " style={{ margin: '10px' }} />
                        <TextField label="Enter password " style={{ margin: '10px' }} />
                        <Typography className={classes.text} style={{ textAlign: 'center', margin: '20px' }}>by continuing you agree to our TERM & CONDITION</Typography>
                        <Button variant="contained" style={{ backgroundColor: 'rgb(230, 100, 0)', color: 'white', marginBottom: '10px', fontFamily: 'Open Sans' }}>Login</Button>
                        <Typography style={{ color: '#0275d8' }}>New / create an account</Typography>
                    </Box>
                </Box>
                <Button variant="contained" color="primary" onClick={() => setOpen(false)}>
                    <Link class="nav-link" to="/" variant="contained" style={{ color: 'white' }}>Skip </Link>
                </Button>
            </DialogContent>
        </Dialog>


    )
}

export default Login;