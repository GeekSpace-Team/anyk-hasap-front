import { Grid, Stack } from '@mui/material';
import React, { useEffect } from 'react'
import { useTranslation } from "react-i18next";
import Navbar from '../../Navbar';
// import DemoCarousel from '../carousel/DemoCarousel';
import Container from '@mui/material/Container';
import { i18n } from '../../../../Language/LangConfig';
// import Customer from '../homePage/customer/Customer';
import FooTter from '../footer/FooTter';
import styled from 'styled-components'
import ContactUs from '../homePage/contactUs/ContactUs';
import './aboutUs.css'


const AboutUs = () => {
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
    <div className='firstContaiiner'>
      <div className='secondContaiiner'>
      
      <div className="imgContainerAbout">
        <img src='./img/aboutUs.png' />
      </div>
      <Container maxWidth="lg">
        <AboutUsss>
          <span>{t('Aboutus')}</span>
        </AboutUsss>
        {/* <Grid container>
          <Grid item={true} lg={4} md={6} xs={12} sm={6}> 
          <Stack direction='column'  spacing={2} justifyContent='center' marginTop={7} alignItems='center'>
            <div className='circul'>
              <span>+77</span> 
            </div>
            <label className='frameTitle'>Lorem ipsium dolor.</label>
          </Stack> 
          </Grid>
          <Grid item={true} lg={4} md={6} xs={12} sm={6}>
          <Stack direction='column' spacing={2} justifyContent='center' marginTop={7} alignItems='center'>
          <div className='circul'>
              <span>+99</span> 
            </div>
          <label className='frameTitle'>Lorem ipsium dolor.</label>
          </Stack>
          </Grid>
          <Grid item={true} lg={4} md={6} xs={12} sm={6}>
          <Stack direction='column' spacing={2} justifyContent='center' marginTop={7} alignItems='center'>
          <div className='circul'>
              <span>+707</span> 
            </div>
            <label className='frameTitle'>Lorem ipsium dolor.</label>
          </Stack>
          </Grid>
        </Grid> */}
        <Grid container>
          <Grid item={true} lg={6} md={6} xs={12} sm={12}>
            <Stack direction="column" spacing={0} marginTop={9}>
            <Grid item={true} md={12} lg={12} xs={12} sm={12} mb={2}>
              <p style={{fontFamily:'regularFont'}}>Аудиторская компания «Anyk Hasap» с 2018 года предоставляет широкий спектр услуг в области аудита, бухгалтерского учета, налогообложения и управленческого консультирования.</p>
            </Grid>
            <Grid item={true} md={12} lg={12} xs={12} sm={12} mb={2}>
              <p style={{fontFamily:'regularFont'}}>Аудиторы «Anyk Hasap», имеют более 20-и лет стажа безупречной работы в организациях различных сфер деятельности. Это надёжные профессионалы со знаниями и опытом работы в различных отраслях и проектах.</p>
            </Grid>
            <Grid item={true} md={12} lg={12} xs={12} sm={12} mb={2}>
              <p style={{fontFamily:'regularFont'}}>«Anyk Hasap» - в современной сложной коммерческой среде готова работать, чтобы уберечь ваше предприятие от возможных ошибок, снизить налоговые и финансовые риски, улучшить системы внутреннего контроля и налаженность рабочих процессов.</p>
            </Grid>
            <Grid item={true} md={12} lg={12} xs={12} sm={12} mb={2}>
              <p style={{fontFamily:'regularFont'}}>При выборе аудиторской компании, наряду со стоимостью услуг, важную роль играют деловая репутация и опыт. Поэтому, мы стремимся выполнить взятые на себя обязательства быстро, эффективно и с полной ответственностью и гарантией качества!</p>
            </Grid>
            <Grid item={true} md={12} lg={12} xs={12} sm={12} mb={2}>
              <p style={{fontFamily:'regularFont'}}>«Anyk Hasap» стремится принести реальную пользу вашему бизнесу. <br /> Будем рады Вас видеть в числе наших клиентов!</p>
            </Grid>
            <Grid item={true} md={12} lg={12} xs={12} sm={12} mb={2}>
              <p style={{fontFamily:'regularFont'}}>Лицензия на осуществление аудиторской деятельности выдана Министерством экономики и финансов Туркменистана №1-17-29-50 от 28.12.2021 года.</p>
            </Grid>
            {/* <Grid item={true} md={12} lg={12} xs={12} sm={12}>
              <p className='frameText'>{t('aboutUsText5')}</p>
            </Grid> */}
            </Stack>
          </Grid>


          <Grid item={true} lg={6} md={6} xs={12} sm={12}>
            <Grid item={true} lg={12} md={12} xs={12} sm={12} marginTop={9} > 
              <img style={{width:'100%'}} src="./img/aboutUsImg.png" alt="" />
            </Grid>
          </Grid>
          </Grid>
        {/* </Stack> */}
      </Container>

      <ContactUs />
      {/* <Customer /> */}
      {/* <DemoCarousel /> */}
      <FooTter />
      </div>  
    </div>
  )
}

//    Meyilnama (Karhana we onun gornusleri. Telekecilik)
//  1 Karhana barada dusunje, 
//  2 Karhananyn gornusleri,
//  3 Karhananyn hojalyk hasaplasyk tajircilik isleri we olary guramagyn yorelgeri, 
//  4 Onumciligin karende gornusinde guralyshy, 
//  5 Telekecilik hojalygy guramagyn gornuusi hokmunde.

export default AboutUs



const AboutUsss = styled.div`
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
      transform: scaleX(0.65);
      bottom: -6px;
      position: absolute;
    }
}
`