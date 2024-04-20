import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import PasswordIcon from "@mui/icons-material/Password";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Security from "@mui/icons-material/Security";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);
  console.log(password);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://carxier-dev.tahrtech.in/api/v1/auth/signin",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email: "crew1@gmail.com",
            password: "Password@2024",
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Invalid username or password");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        "& .MuiTextField-root": { width: "25ch" },
        alignItems: "center",
        paddingTop: 6,
      }}
    >
      <Typography variant="h6" color="GrayText">
        Admin Login
      </Typography>
      <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
        <InputLabel htmlFor="Email">Email</InputLabel>
        <OutlinedInput
          id="Email"
          type={"text"}
          startAdornment={
            <InputAdornment position="start">
              <LoginIcon />
            </InputAdornment>
          }
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
        <InputLabel htmlFor="password">Password</InputLabel>
        <OutlinedInput
          id="password"
          type={showPassword ? "text" : "password"}
          startAdornment={
            <InputAdornment position="start">
              <PasswordIcon />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button
        variant="contained"
        onClick={handleLogin}
        sx={{
          borderRadius: "30px",
          color: "lightblue",
          backgroundColor: "black",
        }}
      >
        <Security /> &nbsp;LOGIN
      </Button>
      <Typography color="GrayText" fontSize="12px">
        By proceeding, you agree to Terms and privacy
      </Typography>
    </Box>
  );
};

export default Login;
