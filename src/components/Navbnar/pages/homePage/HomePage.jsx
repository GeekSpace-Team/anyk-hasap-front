import React, { useEffect } from 'react'
import './home.css';
import Container from '@mui/material/Container';
import { useTranslation } from "react-i18next";
import { Grid, Stack } from '@mui/material';
import { i18n } from '../../../../Language/LangConfig';
import ContactUs from './contactUs/ContactUs';
import Customer from './customer/Customer';
import DemoCarousel from '../carousel/DemoCarousel';
import FooTter from '../footer/FooTter';
import styled from 'styled-components'


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
                  <label>{t('homeInfoTitle')}</label>
                  <p>{t('homeInfoText')}</p>
                </Grid>
              </Grid>
            </Grid>


            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Grid container className='infoItems'>
                <Grid item sm={12} lg={4} alignItems={'center'} className="infoImgContainer">
                  <img src="./img/secondImg.png" alt="" />
                </Grid>
                <Grid item sm={12} lg={7} className="infoTitle">
                  <label>{t('homeInfoTitle')}</label>
                  <p>{t('homeInfoText')}</p>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Grid container className='infoItems'>
                <Grid item sm={12} lg={4} alignItems={'center'} className="infoImgContainer">
                  <img src="./img/thirdImg.png" alt="" />
                </Grid>
                <Grid item sm={12} lg={7} className="infoTitle">
                  <label>{t('homeInfoTitle')}</label>
                  <p>{t('homeInfoText')}</p>
                </Grid>
              </Grid>
            </Grid>


            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Grid container className='infoItems'>
                <Grid item sm={12} lg={4} alignItems={'center'} className="infoImgContainer">
                  <img src="./img/fourthImg.png" alt="" />
                </Grid>
                <Grid item sm={12} lg={7} className="infoTitle">
                  <label>{t('homeInfoTitle')}</label>
                  <p>{t('homeInfoText')}</p>
                </Grid>
              </Grid>
            </Grid>


            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Grid container className='infoItems'>
                <Grid item sm={12} lg={4} alignItems={'center'} className="infoImgContainer">
                  <img src="./img/fifthImg.png" alt="" />
                </Grid>
                <Grid item sm={12} lg={7} className="infoTitle">
                  <label>{t('homeInfoTitle')}</label>
                  <p>{t('homeInfoText')}</p>
                </Grid>
              </Grid>
            </Grid>


            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Grid container className='infoItems'>
                <Grid item sm={12} lg={4} alignItems={'center'} className="infoImgContainer">
                  <img src="./img/sixthImg.png" alt="" />
                </Grid>
                <Grid item sm={12} lg={7} className="infoTitle">
                  <label>{t('homeInfoTitle')}</label>
                  <p>{t('homeInfoText')}</p>
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
          <span style={{color:'white'}}>{t('Aboutus')}</span>
          </AboutUs>
            
            <div className='homeAboutUsContainer'>
              <p>{t('homeAboutUsText')}</p><br />
              <p>{t('homeAboutUsText')}</p>
            </div>
            <div id='secondLearnButton' className='learnMoreButton'>
              <button>{t('learnMore')}<img src="./img/rightArrow.svg" /></button>
            </div>
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
