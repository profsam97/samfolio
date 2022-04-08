import * as React from 'react';
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
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
const useStyle = makeStyles({
  link : {
    flexGrow: 5,
    color: '#fff',
    textDecoration: 'none',
    margin: 18
  },
  menuItem: {
    '&:hover' :{
    textDecoration: 'underline',
    textDecorationColor: '#fff',
    textDecorationThickness: '3px',
    transition: `all 500ms ease`
    }
  },

})
const pages = ['Home', 'About', 'Services', 'WORK', 'CONTACT'];
const Nav2 = (props) => {
  const classes = useStyle();
  const matches = useMediaQuery('(min-width:900px)');
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" color='transparent' elevation={0} mb={5}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          {matches && <Link to='/' className={classes.link} > <Typo 
            options={{ display: {xs: 'none', md: 'flex'}}}
          >    SamFolio 
          </Typo></Link>}
          
          <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography className={classes.menuItem} align="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
           {!matches &&  <Typo 
            options={{ display: {xs: 'inline-block', md : 'none'}}}
          >    SamFolio
       
          </Typo>}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                className={classes.menuItem}
                key={page}
                onClick={handleCloseNavMenu}
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
export default Nav2;
