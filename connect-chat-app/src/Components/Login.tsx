import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../logo.svg'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as api from '../api'

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/login">
        Team Name
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
const Login = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formik = useFormik({
      initialValues: {
          email: '',
          password: '',
      },
      onSubmit: async values => {
         const {token} =  await api.login(values.email,values.password) //get token by login in -- sending request to server with email and password and server response returns  the token token
         console.log({token});
         localStorage.setItem('token', JSON.parse(token)) // save the token returned from the server into the localStorage
         navigate('/') 
      }
  })
    
      return (
        <ThemeProvider theme={theme}>
          <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
              }}
            >
                <Grid>
                <Avatar sx={{m: 1, bgcolor: 'white', width:"250px",height:"250px"}}>
                <img src={logo} alt="" />
                </Avatar>
                </Grid>
                
            </Grid>
            
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'white', width:"250px",height:"250px"}}>
                <img src={logo} alt="" />
                </Avatar>
                
                <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    variant='standard'
                    onChange={formik.handleChange}

                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    variant='standard'
                    onChange={formik.handleChange}


                  />
                  {/* <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  /> */}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    style={{backgroundColor:"#03CCBB"}}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    {/* <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid> */}
                    <Grid item xs={12}>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                  <Copyright sx={{ mt: 5 }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      );
    }

export default Login