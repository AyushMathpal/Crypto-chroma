import React from 'react'
import { AppBar ,Container,createTheme,makeStyles,MenuItem,Select,ThemeProvider,Toolbar,Typography } from '@material-ui/core';
import{ useNavigate} from "react-router-dom"; 
import { CryptoState } from '../CryptoContext';
const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const Header = () => {
  
  const classes=useStyles();
  const { currency,setCurrency}=CryptoState();
  const navigate=useNavigate();

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
        <Container>
        <Toolbar>
        <Typography onClick={()=>navigate('/')} 
        className={classes.title}
        variant="h6">Crypto Chroma</Typography>

        
        <Select variant="outlined"
        
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
         style={{
          width:100,
          height:40,
          marginLeft:15
        }}>
            
          <MenuItem value={"USD"}>USD</MenuItem>
          <MenuItem value={"INR"}>INR</MenuItem>
        </Select>
        </Toolbar>
        </Container>
    </AppBar>
    </ThemeProvider>
 
  )
}

export default Header