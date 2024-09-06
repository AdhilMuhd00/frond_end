import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    var [emp, setEmp] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3004/view")
            .then((res) => {
                console.log(res.data)
                setEmp(res.data)
            }) 
            .catch((err) => console.log(err))
    },[])
    
        
    const delValue = (id) => {
        axios.delete("http://localhost:3004/remove/"+id)
            .then((res) => {
                console.log(res.data)
                alert("Employee deleted")
                window.location.reload()
                })
    }
  return (
      <div>
          <br /><br /><br /><br />
         <Box> <TableContainer component={Paper}>
              <Table >
                  <TableHead>
                      <TableRow>
                          <TableCell><b>Name</b></TableCell>
                          <TableCell><b>Age</b></TableCell>
                          <TableCell><b>Salaary </b></TableCell>
                          <TableCell><b>Department</b></TableCell>
                          
                      </TableRow>
                  </TableHead>
              
                  <TableBody>
                      {emp.map((val) => {
                          return (
                      
                  <TableRow>
                                  <TableCell>{val.Name}</TableCell>
                                  <TableCell>{val.Age}</TableCell>
                                  <TableCell>{val.Dept}</TableCell>
                                  <TableCell>{val.Sal}</TableCell>
                                  <TableCell>
                                      <Button variant="contained" color="success" onClick={() => {
                                          delValue(val._id)
                                         
                                      }}>DElETE</Button>&nbsp;&nbsp;

                                      <Button variant="contained" color="success" >UPDATE</Button>
                                  </TableCell>
                              </TableRow>
                          )
                      })}
                  </TableBody>
              </Table>
          </TableContainer>
          </Box>
          
          </div>
                 
  )
}

export default View