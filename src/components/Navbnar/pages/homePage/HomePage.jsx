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
          {/* <Stack direction={'column'} spacing={1}>
          <label>{t('OurServices')}</label>
          <Stack justifyContent={'center'} alignItems='center'>
          <div className='underLineE'></div>
          </Stack>
          </Stack> */}
          <NavMenu>
          <span>{t('OurServices')}</span>
          </NavMenu>
        </div>
        <div className='aboutServ'>
          <p>{t('homeUnderTitle')}</p>
        </div>
      </div>
      </Container>

      {/* Second container */}
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
            <div className="homeAboutUsContainer homeAboutUsContainer2">
              <label>{t('Aboutus')}</label><br/>
                <div className='underLine'></div>
            </div>
            
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
flex: 1;
margin-left: 25px;
align-items: center;


span {
    fontsize: 13px;
    letter-spacing: 1.42px;
    margin-left: 5px;
    position: relative;

    &:after{
      content:"";
      height:2px;
      background:#000026;
      left: 0;
      right: 0;
      transform: scaleX(0.7);
      bottom: -6px;
      position: absolute;
    }
}
`