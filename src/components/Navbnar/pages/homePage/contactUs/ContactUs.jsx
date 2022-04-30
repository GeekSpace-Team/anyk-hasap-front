import React, { useEffect, useState, useRef } from 'react'
import Container from '@mui/material/Container';
import { useTranslation } from "react-i18next";
import { Grid, Stack } from '@mui/material';
import { i18n } from '../../../../../Language/LangConfig';
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { showError, showSuccess, showWarning } from '../../../../../toast/toast';
import './contactUs.css';


const ContactUs = () => {
    const { t } = useTranslation();
    const form = useRef();
    useEffect(() => {
        let l = localStorage.getItem('lang');
        if (l != null && typeof l !== 'undefined') {
            i18n.changeLanguage(l);
        } else {
            i18n.changeLanguage("en");
        }
    }, []);

    const [username, setUsername] = useState('');
    const [mail, setMail] = useState('');
    const [message, setMessage] = useState('');
    const sendEmail = (e) => {
        if (username == '' || mail == '' || message == '') {
            showWarning("Please enter required informations!");
            return;
          }
        e.preventDefault();
        emailjs.sendForm('service_y72iqna', 'template_5d1bbko', form.current, 'w--8F8ypQmjt_fscB')
            .then((result) => {
                showSuccess('Successfully sended !!!');
                setUsername('');
                setMail('');
                setMessage('');
                console.log(result.text);
            }, (error) => {
                showError(error.text + "Something is went wrong !!!")
                console.log(error.text);
            });
    };
    return (
        <div>
            <Container maxWidth="lg">
            <ContactUsss>
                <span>{t('contactUs')}</span>
            </ContactUsss>
            <div className='aboutServ'>
                <p style={{textAlign:"left"}}>{t('underContactUs')}</p>
            </div>
                <Grid container className="contactMedia">
                    <Grid item={true} lg={6} md={6} xs={12} sm={12}>
                        <div className='ourServ'>
                            
                        </div>
                        <Stack direction={'row'} gap={-50} marginTop={3}>
                            <Grid item={true} lg={6} md={6} xs={12} sm={12}>
                                <Stack direction='column' spacing={2}>
                                    <label className='conLeftItems'>{t('phone')}:</label>
                                    <a href='tel:+99365656565' className='smallLink'>+993  65 53 35 34</a>
                                </Stack>
                            </Grid>
                            <Grid item={true} lg={6} md={6} ml={-12} xs={12} sm={12}>
                                <Stack direction='column' spacing={2}>
                                    <label className='conLeftItems'>E-Mail :</label>
                                    <a href='mailto:anyk.hasap@gmail.com' className='smallLink'>info@anykhasap.com</a>
                                </Stack>
                            </Grid>
                        </Stack>
                        <Stack direction={'row'} marginTop={3} marginBottom={3}>
                            <Grid item={true} lg={6} md={6} xs={12} sm={12}>
                                <Stack direction='column' spacing={2}>
                                    <label className='conLeftItems'>{t('workH')}:</label>
                                    <label className='conLeftItems'>{t('workD')}: 9:00 - 18:00</label>
                                </Stack>
                            </Grid>
                            <Grid item={true} lg={6} md={6} xs={12} ml={-12} sm={12}>
                                <Stack direction='column' spacing={2}>
                                    <label  className='conLeftItems'>{t('adres')}:</label>
                                    <label style={{width:'110%'}} className='conLeftItems'>{t('address')}</label>
                                </Stack>
                            </Grid>
                        </Stack>
                        <Grid item={true} lg={12} md={12} xs={12} sm={12}>
                            <iframe src="https://yandex.ru/map-widget/v1/-/CCUBVYESCD" style={{ outline: 'none', border: 'none', marginBottom: '50px' }} width="90%" height="250"></iframe>
                        </Grid>
                    </Grid>
                    <Grid item={true} lg={6} md={6} xs={12} sm={12} pl={2} mt={9}>
                        <form ref={form} onSubmit={sendEmail}>
                            <Grid item={true} lg={12} md={12} xs={12} sm={12} mt={-7}>
                                <Stack spacing={1.5} className='inputText'>
                                    <TextField style={{width:'96%'}} id="standard-basic" name="user_name" value={username} onChange={e => setUsername(e.target.value)} variant="standard" label={t('name')} InputLabelProps={{ className: 'textFielddd__label' }} required/>
                                </Stack>
                            </Grid>
                            <Grid item={true} lg={12} md={12} xs={12} sm={12} mt={10} mt={0}>
                                <Stack spacing={1.5} marginTop={5}>
                                    <TextField style={{width:'96%'}} id="standard-basic" type='email' name="user_email" value={mail} onChange={e => setMail(e.target.value)} label="E-mail" InputLabelProps={{ className: 'textFielddd__label' }} variant="standard" required/>
                                </Stack>
                            </Grid>
                            <Grid item={true} lg={12} md={12} xs={12} sm={12}>
                                <Stack spacing={1.5} marginTop={3}>
                                    <TextField style={{width:'96%'}} id="standard-multiline-static" name="message" value={message} onChange={e => setMessage(e.target.value)} InputLabelProps={{ className: 'textFielddd__label' }} multiline rows={6} label={t('yourMess')} variant="standard" required/>
                                </Stack>
                            </Grid>
                            <Grid item={true} lg={12} md={12} xs={12} sm={12}>
                                <Stack direction={'row'} mt={7} className='sendMessage'>
                                    <Button onClick={sendEmail} type='submit' variant="outlined" endIcon={<ArrowForwardIosIcon style={{ height: '11px', color: '#AA323C' }} />}>
                                       {t('send')}
                                    </Button>
                                </Stack>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Container>
            <ToastContainer />
        </div>
    )
}

export default ContactUs




const ContactUsss = styled.div`
display: flex;
align-items: center;
justify-content:center;
margin-top: 70px;

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