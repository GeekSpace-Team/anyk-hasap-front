import React, { useEffect } from 'react'
import Container from '@mui/material/Container';
import { Grid, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { i18n } from '../../../../Language/LangConfig';
import { NavLink as Link} from 'react-router-dom'
import styled from 'styled-components'
import './footer.css'

export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
height: 100%;
cursor: pointer;
font-family:regularFont;
font-size:16px;
&.active {
    text-decoration:underline;
    text-underline-offset: 4px;
}
`
const FooTter = () => {
    const { t } = useTranslation();
    useEffect(() => {
      let l = localStorage.getItem('lang');
      if (l != null && typeof l !== 'undefined') {
        i18n.changeLanguage(l);
      } else {
        i18n.changeLanguage("en");
      }
    }, []);
    return (
        <div className='FooterContainer'>
            <Container maxWidth="lg">
                <Grid container paddingTop={2.5}  justifyContent={'center'} paddingBottom={5}>
                    <Grid lg={4} md={6} xs={12} sm={12}  >
                        <img src="./img/AnykLogo.svg" alt="#" />
                    </Grid>
                    <Grid lg={4} md={6} xs={12} sm={12}>
                    <Stack direction={'column'} spacing={2} className='navMedia'>
                                    <NavLink to="/" className='navBarItem'>
                                        {t('homePage')}
                                    </NavLink>
                                    <NavLink to="/ourServices" className='navBarItem'>
                                        {t('OurServices')}
                                    </NavLink>
                                    <NavLink to="/aboutUs" className='navBarItem'>
                                        {t('Aboutus')}
                                    </NavLink>
                                    <NavLink to="/contacts" className='navBarItem'>
                                        {t('Contacts')}
                                    </NavLink>
                                </Stack>
                    </Grid>
                    {/* <Grid lg={3} md={6} xs={12} sm={12}>
                        <Stack direction={'column'} spacing={2} className='servMedia'>
                            <label className='footerTitle'>Lorem ipsium</label>
                            <label className='footerTitle'>Lorem ipsium</label>
                            <label className='footerTitle'>Lorem ipsium</label>
                            <label className='footerTitle'>Lorem ipsium</label>
                            <label className='footerTitle'>Lorem ipsium</label>
                            <label className='footerTitle'>Lorem ipsium</label>
                        </Stack>
                    </Grid> */}
                    <Grid lg={4} xs={12} md={6} sm={12}>
                        <Stack direction='column' spacing={3} className='contactMedia'>
                            <Stack direction={'row'} spacing={2}>
                                <img src='./img/mobileFooter.svg' style={{ height: '18px' }} />
                                <a href='tel:+99365656565' style={{ textDecoration: 'none' }} className='footerTitle'>+993 65 65 65 65</a>
                            </Stack>
                            <Stack direction={'row'} spacing={2}>
                                <img src='./img/phoneFooter.svg' style={{ height: '18px' }} />
                                <a href='tel:+993 (12) 95-50-19' style={{ textDecoration: 'none' }} className='footerTitle'>+993 (12) 95-50-19</a>
                            </Stack>
                            <Stack direction={'row'} spacing={2}>
                                <img src='./img/mailFooter.svg' style={{ height: '18px' }} />
                                <a href='mailto:anyk.hasap@gmail.com' style={{ textDecoration: 'none' }} className='footerTitle'>anyk.hasap@gmail.com</a>
                            </Stack>
                            <Stack direction={'row'} spacing={2}>
                                <img src='./img/locationFooter.svg' style={{ height: '18px' }} />
                                <a href='mailto:anyk.hasap@gmail.com' style={{ textDecoration: 'none' }} className='footerTitle'>{t('address')}</a>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
            <Stack alignItems={'center'} paddingBottom={2}>
                <label className='footerTitle'>@2022</label>
            </Stack>
        </div>
    )
}

export default FooTter
