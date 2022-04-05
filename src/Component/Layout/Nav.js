import React, {useCallback, useContext, useEffect, useRef}  from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Typo from './Typo';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from '@mui/styles';
import ContextApi from '../Context/ContextAPI'
const pages = ['Home', 'About', 'Services', 'Work', 'Contact'];
const useStyle = makeStyles({
    menuItem1: {
    '&:hover' :{
    textDecoration: 'underline',
    textDecorationColor: '#fff',
    textDecorationThickness: '3px',
    transition: `all 500ms ease`
    }
  },
   root: {
    position: "sticky",
    top: "1rem",
    minWidth: "275"
  }
})
const Nav = (props) => {
  const classes = useStyle();  
  const matches = useMediaQuery('(min-width:900px)');
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const scrollToContent = useContext(ContextApi).ScrollToSection;
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const ScrollToComponent = page =>{
      scrollToContent(page);
      // setShowMenu(null);
    //   setTimeout(() => {
    // setAnchorElNav(null);
    //   }, 1000);
  }
  const nav = useRef();
    const headerScrolled = useCallback(() => {
      if (window.scrollY > 100) {
        nav.current.classList.add('header-scrolled')
      } else {
        nav.current.classList.remove('header-scrolled')
      }
    },[])
    useEffect(()=> {
    window.addEventListener('scroll', headerScrolled)
      return (()=> {
     window.removeEventListener('scroll', headerScrolled)
      })
    }, [headerScrolled])
  return (
    <AppBar position='sticky' ref={nav}  color='transparent' elevation={0}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          {matches &&  <Typo  
            options={{ml:5, mr:2, color: 'white',flexGrow: 5, display: {xs: 'none', md: 'flex'}}}
          >    SamFolio 
          </Typo>}
          
          <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon color='primary' />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {  xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}
                onClick={ScrollToComponent.bind(null, page)}
                //  onClick={handleCloseNavMenu}
                
                 >
                  <Typography  textAlign="center">{page}</Typography>
                </MenuItem>
              )) }
            </Menu>
          </Box>
           {!matches &&  <Typo  
            options={{color: 'white', display: {xs: 'inline-block', md : 'none'}}}
          >    SamFolio
       
          </Typo>}
          <Box sx={{ flexGrow: 1,  display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                className={classes.menuItem1}
                onClick={ScrollToComponent.bind(null, page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
