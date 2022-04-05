import { Route, Routes } from "react-router-dom";
import Details from "./Component/Details";
import Main from "./Component/Main";
import BackToTop from './Component/BackToTop'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, purple } from "@mui/material/colors";
import ContextProvider from "./Component/Context/ContextProvider";
function App() {
    const theme = createTheme({
      palette: {
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

    // const Home = React.lazy(()=> import('./Component/Main'));
  return (
    <ContextProvider>
    <ThemeProvider theme={theme} >
    <BackToTop/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/:details' element={<Details/>} />
      </Routes>
    </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
