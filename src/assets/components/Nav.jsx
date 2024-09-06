import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} >
                        Emp App
                    </Typography>
                    <Link to='/add'>
                        <Button variant="contained" color='secondary'>ADD</Button> </Link>&nbsp;

                    <Link to='/view'>
                        <Button variant="contained" color='secondary'> VIEW</Button></Link>&nbsp;
                    
                </Toolbar>

            </AppBar>



        </div>
    )
}

export default Navbar