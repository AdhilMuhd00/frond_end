import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
      <div>
          <br /><br /><br /><br />
          <TextField label="Name" variant="outlined" />  <br /><br />
          <TextField label="Age" variant="outlined"></TextField><br /><br />
          <TextField label="Salary" variant="outlined" />  <br/><br/>
          <TextField label="Department" variant="outlined"></TextField><br /><br />
          <Button variant="contained" color="success">Add</Button>
         
    </div>
  )
}

export default Add