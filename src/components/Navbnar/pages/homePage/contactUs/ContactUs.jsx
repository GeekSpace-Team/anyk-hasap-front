import React, { useEffect } from 'react'
import Container from '@mui/material/Container';
import { useTranslation } from "react-i18next";
import { Grid, Stack } from '@mui/material';
import { i18n } from '../../../../../Language/LangConfig';
import styled from 'styled-components'
import './contactUs.css'

const ContactUs = () => {
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
        <div>
            {/* <div className="homeAboutUsContainer">
                <label>{t('Aboutus')}</label><br /><br />
                <div className='underLine'></div> <br />
            </div> */}
            <Container maxWidth="lg">
                <div className='ourServ'>
                    <ContactUsss>
                        <span>{t('contactUs')}</span>
                    </ContactUsss>
                </div>
                <div className='aboutServ'>
                    <p>{t('underContactUs')}</p>
                </div>

                <Grid container>
                    <Grid item lg={6} md={6} xs={12} sm={12}>
                        <Stack direction={'row'} marginTop={3}>
                        <Grid item lg={6} md={6} xs={12} sm={12}>
                            <Stack direction='column' spacing={2}>
                                <label className='conLeftItems'>Phone :</label>
                                <a href='tel:+99365656565' className='smallLink'>+993 65 65 65 65</a>
                            </Stack>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12} sm={12}>
                            <Stack direction='column' spacing={2}>
                                <label className='conLeftItems'>Mail :</label>
                                <a href='mailto:anyk.hasap@gmail.com' className='smallLink'>anyk.hasap@gmail.com</a>
                            </Stack>
                        </Grid>
                        </Stack>
                        <Stack direction={'row'} marginTop={3} marginBottom={3}>
                        <Grid item lg={6} md={6} xs={12} sm={12}>
                            <Stack direction='column' spacing={2}>
                                <label className='conLeftItems'>Work hours:</label>
                                <label className='conLeftItems'>Mn - Fr: 9:00 - 18:00</label>
                            </Stack>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12} sm={12}>
                            <Stack direction='column' spacing={2}>
                                <label className='conLeftItems'>Adress:</label>
                                <label className='conLeftItems'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</label>
                            </Stack>
                        </Grid>
                        </Stack>
                        <Grid item lg={12} md={12} xs={12} sm={12}>
                            <a href="https://yandex.ru/maps/org/nomera_mezhdunarodnykh_aeroportov_turkmenistana/54860423407/?utm_medium=mapframe&utm_source=maps" ></a><iframe src="https://yandex.ru/map-widget/v1/-/CCUBY8A2lC" style={{outline:'none',border:'none', marginBottom:'50px'}} width='90%' height="250" frameborder="5" allowfullscreen="true"></iframe>
                        </Grid>
                    </Grid>





                    <Grid item lg={6} md={6} xs={12} sm={12}>
                        <Grid item lg={12} md={12} xs={12} sm={12}>
                            <Stack spacing={1.5}>
                                <label>Name</label>
                                <input type="text" placeholder='Adam Sendler' />
                            </Stack>
                        </Grid>
                        <Grid item lg={12} md={12} xs={12} sm={12}>
                            <Stack spacing={1.5} marginTop={3}>
                                <label>E-mail</label>
                                <input type="text" placeholder='mail.test@gmail.com' />
                            </Stack>
                        </Grid>
                        <Grid item lg={12} md={12} xs={12} sm={12}>
                            <Stack spacing={1.5} marginTop={3}>
                                <label>E-mail</label>
                                <textarea name="" id="" cols="30" rows="3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis at urna quis amet dictum condimentum euismod aliquam. Dictum volutpat cras sit at dolor morbi suscipit augue habitasse.</textarea>
                            </Stack>
                        </Grid>
                        <Grid item lg={12} md={12} xs={12} sm={12}>
                            <div className='sendButton'>
                                <button>Send message  <span>></span></button>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default ContactUs




const ContactUsss = styled.div`
display: flex;
align-items: center;
justify-content:center;
margin-top: 30px;

span {
    font-size: 33px;
    letter-spacing: 1.42px;
    position: relative;
    color: #000000;
    text-transform: uppercase;
    font-weight: 400;
    font-family: regularFont;

    &:after{
      content:"";
      height:2px;
      background:#AA323C;
      left: 0;
      right: 0;
      transform: scaleX(0.6);
      bottom: -6px;
      position: absolute;
    }
}
`