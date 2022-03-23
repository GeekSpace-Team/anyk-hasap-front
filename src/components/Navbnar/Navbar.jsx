import React, { useEffect, useState } from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  InfoContainer
} from './NavbarElements';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { makeStyles } from '@mui/styles';
import { NavLink as Link } from 'react-router-dom'
import { Stack } from '@mui/material';
import './navbar.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useTranslation } from "react-i18next";
import { i18n } from '../../Language/LangConfig';


const useStyles = makeStyles({
  paper: {
    background: "blue"
  }
});

const Navbar = () => {
  const { t } = useTranslation();
  const [state, setState] = React.useState({
    right: false,
  });
  const classes = useStyles();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems:'center'
  }));

  const[firstLangClass,setFirstLangClass]=useState("langBtn");
  const[secondLangClass,setSecondLangClass]=useState("langBtn");
  const[thirdLangClass,setThirdLangClass]=useState("langBtn");
  const[lang,setLang]=useState('en');
  useEffect(()=>{
    let l=localStorage.getItem('lang');
    if(l!=null && typeof l !== 'undefined'){
      setLang(l);
      i18n.changeLanguage(l);
    } else {
      i18n.changeLanguage("en");
    }
  },[]);


  useEffect(()=>{
    setFirstLangClass("langBtn");
    setSecondLangClass("langBtn");
    setThirdLangClass("langBtn");
    if(lang=='en'){
      setFirstLangClass("langBtnActive");
    }
    if(lang=='tm'){
      setSecondLangClass("langBtnActive");
    }
    if(lang=='ru'){
      setThirdLangClass("langBtnActive");
    }
  },[lang]);



 
  const langChange = (ln) => {
    i18n.changeLanguage(ln);
    setLang(ln);
    localStorage.setItem('lang',ln);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, height: '100vh' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ background: '#000026' }}
    >

      <Stack direction={'column'}>
        <Link to="/" className='mobileLink'>
        {t('homePage')}
        </Link>
        <Link to="/ourServices" className='mobileLink'>
        {t('OurServices')}
        </Link>
        <Link to="/aboutUs" className='mobileLink'>
        {t('Aboutus')}
        </Link>
        <Link to="/contacts" className='mobileLink'>
        {t('Contacts')}
        </Link>
                {/* <select 
                onChange={e=>langChange(e)}
                value={lang}
                className='langSelect'>
                  <option value="en">EN</option>
                  <option value="tm">TM</option>
                  <option value="ru">RU</option>
                </select> */}
                <br/>
                <Stack direction={'row'} justifyContent='center' spacing={2} >
                  <button onClick={()=>langChange('en')} className={firstLangClass}>EN</button>
                  <button onClick={()=>langChange('tm')} className={secondLangClass}>TM</button>
                  <button onClick={()=>langChange('ru')} className={thirdLangClass}>RU</button>
                </Stack>
      </Stack>
    </Box>
  );

  return (
    <>
     <Container maxWidth="lg">
      <InfoContainer>
        <Stack alignItems={'flex-end'} spacing={1} justifyContent={'flex-end'} direction={'row'}>
          <img src='./img/mail.svg' style={{height:'18px'}}/>
          <a href='mailto:anyk.hasap@gmail.com' className='smallLink'>anyk.hasap@gmail.com</a>
          <img src='./img/phone.svg' style={{height:'18px'}}/>
          <a href='tel:+99365656565' className='smallLink'>+993 65 65 65 65</a>
        </Stack>
      </InfoContainer>
      </Container>
      <Nav>
        <Container maxWidth="lg">
          <Grid container spacing={2} alignItems="center">

            <Grid item xs={3}>
              <NavLink to="/">
                <img src='./img/AnykLogo.svg' style={{ height: '50px',width:'auto' }} />
              </NavLink>
            </Grid>
            <Grid item xs={7}>
            <Stack justifyContent={'center'} direction={'row'}>
              <NavMenu>
                <NavLink to="/"  className='navBarItem'>
                {t('homePage')}
                </NavLink>
                <NavLink to="/ourServices"  className='navBarItem'>
                  {t('OurServices')}
                </NavLink>
                <NavLink to="/aboutUs"  className='navBarItem'>
                {t('Aboutus')}
                </NavLink>
                <NavLink to="/contacts"  className='navBarItem'>
                {t('Contacts')}
                </NavLink>
              </NavMenu>
              </Stack>
            </Grid>
            <Grid item xs={2}>
              <Stack justifyContent={'flex-end'} direction={'row'}>
              <NavBtn>
                <select 
                onChange={e=>langChange(e.target.value)}
                value={lang}
                className='langSelect'>
                  <option value="en">EN</option>
                  <option value="tm">TM</option>
                  <option value="ru">RU</option>
                </select>
              </NavBtn>
              <Bars onClick={toggleDrawer('right', true)} />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Nav>


      <SwipeableDrawer
        classes={{ paper: classes.paper }}
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {list('right')}
      </SwipeableDrawer>
    </>
  )
}

export default Navbar
