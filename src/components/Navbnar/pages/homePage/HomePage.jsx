import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import { useTranslation } from "react-i18next";
import { Grid, Stack } from '@mui/material';
import { i18n } from '../../../../Language/LangConfig';
import ContactUs from './contactUs/ContactUs';
import Customer from './customer/Customer';
import DemoCarousel from '../carousel/DemoCarousel';
import FooTter from '../footer/FooTter';
import styled from 'styled-components'
import './home.css';


const HomePage = () => {
  const { t } = useTranslation();
  useEffect(() => {
    let l = localStorage.getItem('lang');
    if (l != null && typeof l !== 'undefined') {
      i18n.changeLanguage(l);
    } else {
      i18n.changeLanguage("en");
    }
  }, []);

  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      return setClicked(null)
    }
    setClicked(index)
  }
  return (
    <div>
      <div className='homeFirstContianer'>
        <div className='transparent'>
          <Container maxWidth="lg">
            <div className='homePageLabel'>
              <label className='lableName'>{t('wheretrustmeetsstrategy')}</label>
              <p>{t('homeUnderTitle')}</p>
              <div className='learnMoreButton'>
                <button>{t('learnMore')}<img src="./img/rightArrow.svg" /></button>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Container maxWidth="lg">
        <div className='homeSecondContainer'>
          <div className='ourServ'>
            <NavMenu>
              <span>{t('OurServices')}</span>
            </NavMenu>
          </div>
          <div className='aboutServ'>
            <p>{t('homeUnderTitle')}</p>
          </div>
        </div>
      </Container>

      <Container maxWidth="lg">
        <div className='homeInfoContainer'>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Grid container className='infoItems'>
                <Grid item sm={12} lg={4} alignItems={'center'} className="infoImgContainer">
                  <img src="./img/firstImg.png" alt="" />
                </Grid>
                <Grid item sm={12} lg={7} className="infoTitle">
                  {/* <label>{t('homeInfoTitle')}</label> */}
                  <label>Обязательный аудит</label>
                  {/* <p>{t('homeInfoText')}</p> */}
                  <p>Аудиторская компания «Anyk Hasap» с 2018 года предоставляет широкий спектр услуг в области аудита, бухгалтерского учета, налогообложения и управленческого консультирования.</p>
                </Grid>
              </Grid>
            </Grid>


            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Grid container className='infoItems'>
                <Grid item sm={12} lg={4} alignItems={'center'} className="infoImgContainer">
                  <img src="./img/secondImg.png" alt="" />
                </Grid>
                <Grid item sm={12} lg={7} className="infoTitle">
                  {/* <label>{t('homeInfoTitle')}</label> */}
                  <label>Инициативный аудит</label>
                  {/* <p>{t('homeInfoText')}</p> */}
                  <p>Аудиторы «Anyk Hasap», имеют более 20-и лет стажа безупречной работы в сфере аудита, бухгалтерского учета и налогового консультирования в организациях различных сфер деятельности, аудиторы в штате — все надёжные профессионалы.</p>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Grid container className='infoItems'>
                <Grid item sm={12} lg={4} alignItems={'center'} className="infoImgContainer">
                  <img src="./img/thirdImg.png" alt="" />
                </Grid>
                <Grid item sm={12} lg={7} className="infoTitle">
                  {/* <label>{t('homeInfoTitle')}</label> */}
                  <label>Налоговое консультирование</label>
                  {/* <p>{t('homeInfoText')}</p> */}
                  <p>При выборе аудиторской компании, наряду со стоимостью услуг, важную роль играют деловая репутация и опыт. Поэтому, мы беремся только за ту работу, которую можем выполнить действительно хорошо, с полной ответственностью и гарантией качества!</p>
                </Grid>
              </Grid>
            </Grid>


            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Grid container className='infoItems'>
                <Grid item sm={12} lg={4} alignItems={'center'} className="infoImgContainer">
                  <img src="./img/fourthImg.png" alt="" />
                </Grid>
                <Grid item sm={12} lg={7} className="infoTitle">
                  {/* <label>{t('homeInfoTitle')}</label> */}
                  <label>Управленческое консультирование</label>
                  {/* <p>{t('homeInfoText')}</p> */}
                  <p>Лицензия на осуществление аудиторской деятельности выдан Министерством экономики и финансов Туркменистана №1-17-29-50 от 28.12.2021 года.</p>
                </Grid>
              </Grid>
            </Grid>


            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Grid container className='infoItems'>
                <Grid item sm={12} lg={4} alignItems={'center'} className="infoImgContainer">
                  <img src="./img/fifthImg.png" alt="" />
                </Grid>
                <Grid item sm={12} lg={7} className="infoTitle">
                  {/* <label>{t('homeInfoTitle')}</label> */}
                  <label>Оценка надёжности системы внутреннего контроля</label>
                  {/* <p>{t('homeInfoText')}</p> */}
                  <p>«Anyk Hasap» стремится принести реальную пользу вашему бизнесу, уберечь от ошибок, снизить налоговые и финансовые риски – предоставить услуги высокого качества.
                  </p>
                </Grid>
              </Grid>
            </Grid>


            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Grid container className='infoItems'>
                <Grid item sm={12} lg={4} alignItems={'center'} className="infoImgContainer">
                  <img src="./img/sixthImg.png" alt="" />
                </Grid>
                <Grid item sm={12} lg={7} className="infoTitle">
                  {/* <label>{t('homeInfoTitle')}</label> */}
                  <label>Калькуляции</label>
                  {/* <p>{t('homeInfoText')}</p> */}
                  <p>Аудиторская компания «Anyk Hasap» с 2018 года предоставляет широкий спектр услуг в области аудита, бухгалтерского учета, налогообложения и управленческого консультирования.</p>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </div>
      </Container>
      <div className='aboutUsPhoto'>
        <div className="mediaTransparent">
          <Container maxWidth="lg">
            <Stack direction={'column'}>
              <AboutUs>
                <span style={{ color: 'white' }}>{t('Aboutus')}</span>
              </AboutUs>

              {ServicText.map((item, index) => {
                return (
                  <><div className='homeAboutUsContainer'>
                    <p>Аудиторская компания «Anyk Hasap» с 2018 года предоставляет широкий спектр услуг в области аудита, бухгалтерского учета, налогообложения и управленческого консультирования...</p>
                      <>
                    {clicked === index ? (
                        <p>{item.text1}</p>
                      ) : null}
                      </>
                  </div>
                    <div id='secondLearnButton' className='learnMoreButton'>
                      <button onClick={() => toggle(index)} key={index} style={{ paddingTop: '1%', paddingBottom: '1%', paddingRight: '4%', paddingLeft: '4%' }}>{t('learnMore')}<img src="./img/rightArrow.svg" /></button>
                    </div>
                  </>
                )
              })}
            </Stack>
          </Container>
        </div>
      </div>
      <ContactUs />
      <Customer />
      <DemoCarousel />
      <FooTter />
    </div>
  )
}

export default HomePage




const NavMenu = styled.div`
display: flex;
align-items: center;
justify-content:center;

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
const AboutUs = styled.div`
display: flex;
align-items: center;
margin-top: 20px;
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
const ServicText = [

  {
    id: '2',
    text1: 'Аудиторы «Anyk Hasap», имеют более 20-и лет стажа безупречной работы в сфере аудита, бухгалтерского учета и налогового консультирования в организациях различных сфер деятельности, аудиторы в штате — все надёжные профессионалы При выборе аудиторской компании, наряду со стоимостью услуг, важную роль играют деловая репутация и опыт. Поэтому, мы беремся только за ту работу, которую можем выполнить действительно хорошо, с полной ответственностью и гарантией качества! Лицензия на осуществление аудиторской деятельности выдан Министерством экономики и финансов Туркменистана №1-17-29-50 от 28.12.2021 года. «Anyk Hasap» стремится принести реальную пользу вашему бизнесу, уберечь от ошибок, снизить налоговые и финансовые риски – предоставить услуги высокого качества.'
  }

]