import { Card, CardContent, TextField } from '@mui/material'
import React from 'react'

export const LoginPage = () => {
  return (
    <React.Fragment>
      <Card sx={{marginTop:5,height:400,width:300}}>
        <CardContent>
          <Grid container spacing={2} align="center">
            <Grid item xs={12}>
              <TextField variant='outlined' fullWidth label="username"/>
            </Grid>
            <Grid item xs={12}>
              <TextField variant='outlined' fullWidth label="password"/>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  )
}
