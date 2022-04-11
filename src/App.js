import { Route, Routes } from "react-router-dom";
import BackToTop from './Component/BackToTop'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from "@mui/material/colors";
import React, { Suspense, useContext } from "react";
import ContextApi from "./Component/Context/ContextAPI";
import Loading from "./Component/UI/Loading";
function App() {
    const darkMode = useContext(ContextApi).darkMode;
    const theme = createTheme({
      palette: {
        mode:  darkMode ? 'dark' : 'light',
      primary:{
        main: '#fefefe'
      },
      secondary: purple
    },
    typography: {
      fontFamily: 'Quicksand',
      fontWeightBold: 700,
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600
    }
  });

    const Home = React.lazy(()=> import('./Component/Main'));
    const Details = React.lazy(()=> import('./Component/Details'));
  return (
    <>
    <ThemeProvider theme={theme} >
    <BackToTop/>
      <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:details' element={<Details/>}/>
      </Routes>
      </Suspense>
    </ThemeProvider>
    </>
  );
}

export default App;
