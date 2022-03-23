import React, { useEffect, Component } from 'react'
import Container from '@mui/material/Container';
import { useTranslation } from "react-i18next";
import { Grid, Stack } from '@mui/material';
import { i18n } from '../../../../../Language/LangConfig';
import './customer.css'
import { ConstructionRounded } from '@mui/icons-material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Customer = () => {
  const { t } = useTranslation();
  useEffect(() => {
    let l = localStorage.getItem('lang');
    if (l != null && typeof l !== 'undefined') {
      i18n.changeLanguage(l);
    } else {
      i18n.changeLanguage("en");
    }
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    speed: 19000,
    autoplaySpeed: 100,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1
  // };
  return (
    <div className='customerReview'>
      <Container maxWidth="lg">
        <div className='ourServ'>
          <Stack direction={'column'} spacing={1}>
            <label>{t('customerReviews')}</label>
            <Stack justifyContent={'center'} alignItems='center'>
              <div className='underLineE'></div>
            </Stack>
          </Stack>
        </div>

        <Slider {...settings}>
          {/* <Grid container >
            <div className='customerDiv'>
            <div>
          <Grid  item lg={4} md={6} sm={12} xs={12}>
              <Stack alignItems='center'>
                <div class="rectangle"><p>{t('homeAboutUsText')}</p></div>
                <div class="triangle-down"></div>
              </Stack>
              <Stack alignItems={'center'} marginTop={13} marginBottom={10} spacing={1} >
                <img src="./img/venom2.jpg" style={{borderRadius:'50%', width:'60px', height:"60px"}} alt="" />
                <label className='customerUserName'>Adam Sendler</label>
                <label className='customerUserName'>"Horns and hooves"</label>
              </Stack>
            </Grid>
            </div>
            <div>
            <Grid  item lg={4} md={6} sm={12} xs={12}>
              <Stack alignItems='center'>
                <div class="rectangle"><p>{t('homeAboutUsText')}</p></div>
                <div class="triangle-down"></div>
              </Stack>
              <Stack alignItems={'center'} marginTop={13} marginBottom={10} spacing={1} >
                <img src="./img/venom2.jpg" style={{borderRadius:'50%', width:'60px', height:"60px"}} alt="" />
                <label className='customerUserName'>Adam Sendler</label>
                <label className='customerUserName'>"Horns and hooves"</label>
              </Stack>
            </Grid>
            </div>
            <div>
            <Grid  item lg={4} md={6} sm={12} xs={12}>
              <Stack alignItems='center'>
                <div class="rectangle"><p>{t('homeAboutUsText')}</p></div>
                <div class="triangle-down"></div>
              </Stack>
              <Stack alignItems={'center'} marginTop={13} marginBottom={10} spacing={1} >
                <img src="./img/venom2.jpg" style={{borderRadius:'50%', width:'60px', height:"60px"}} alt="" />
                <label className='customerUserName'>Adam Sendler</label>
                <label className='customerUserName'>"Horns and hooves"</label>
              </Stack>
            </Grid>
            </div>
            </div>
            </Grid> */}



          <Grid container columnSpacing={5}>
            <Grid item lg={12} md={12} xs={12} sm={12} marginTop={7}>
              <Grid alignItems={'center'} direction='column'>
                <div className="customerTextContainer">
                  <div class="rectangle"><p>{t('homeAboutUsText')}</p></div>
                  <center><div class="triangle-down"></div></center>
                </div>
              </Grid>
              <Grid  direction='row' marginTop={13} marginBottom={10} spacing={1}>
                <center><img src="./img/venom2.jpg" style={{ borderRadius: '50%', width: '60px', height: "60px" }} alt="" /></center>
                <center><label className='customerUserName'>Adam Sendler</label></center>
                <center><label className='customerUserName'>"Horns and hooves"</label></center>
              </Grid>
            </Grid>
            </Grid>


            <Grid container columnSpacing={5}>
            <Grid item lg={12} md={12} xs={12} sm={12} marginTop={7}>
              <Grid alignItems={'center'} direction='column'>
                <div className="customerTextContainer">
                  <div class="rectangle"><p>{t('homeAboutUsText')}</p></div>
                  <center><div class="triangle-down"></div></center>
                </div>
              </Grid>
              <Grid  direction='row' marginTop={13} marginBottom={10} spacing={1}>
                <center><img src="./img/venom2.jpg" style={{ borderRadius: '50%', width: '60px', height: "60px" }} alt="" /></center>
                <center><label className='customerUserName'>Adam Sendler</label></center>
                <center><label className='customerUserName'>"Horns and hooves"</label></center>
              </Grid>
            </Grid>
            </Grid>

            <Grid container columnSpacing={5}>
            <Grid item lg={12} md={12} xs={12} sm={12} marginTop={7}>
              <Grid alignItems={'center'} direction='column'>
                <div className="customerTextContainer">
                  <div class="rectangle"><p>{t('homeAboutUsText')}</p></div>
                  <center><div class="triangle-down"></div></center>
                </div>
              </Grid>
              <Grid  direction='row' marginTop={13} marginBottom={10} spacing={1}>
                <center><img src="./img/venom2.jpg" style={{ borderRadius: '50%', width: '60px', height: "60px" }} alt="" /></center>
                <center><label className='customerUserName'>Adam Sendler</label></center>
                <center><label className='customerUserName'>"Horns and hooves"</label></center>
              </Grid>
            </Grid>
            </Grid>

            <Grid container columnSpacing={5}>
            <Grid item lg={12} md={12} xs={12} sm={12} marginTop={7}>
              <Grid alignItems={'center'} direction='column'>
                <div className="customerTextContainer">
                  <div class="rectangle"><p>{t('homeAboutUsText')}</p></div>
                  <center><div class="triangle-down"></div></center>
                </div>
              </Grid>
              <Grid  direction='row' marginTop={13} marginBottom={10} spacing={1}>
                <center><img src="./img/venom2.jpg" style={{ borderRadius: '50%', width: '60px', height: "60px" }} alt="" /></center>
                <center><label className='customerUserName'>Adam Sendler</label></center>
                <center><label className='customerUserName'>"Horns and hooves"</label></center>
              </Grid>
            </Grid>
            </Grid>

          
{/* 
            <Grid item lg={6} md={6} xs={12} sm={8} marginTop={7}>
              <Grid alignItems={'center'} direction='column'>
                <div className="customerTextContainer">
                  <div class="rectangle"><p>{t('homeAboutUsText')}</p></div>
                  <center><div class="triangle-down"></div></center>
                </div>
              </Grid>
              <Grid  direction='row' marginTop={13} marginBottom={10} spacing={1}>
                <center><img src="./img/venom2.jpg" style={{ borderRadius: '50%', width: '60px', height: "60px" }} alt="" /></center>
                <center><label className='customerUserName'>Adam Sendler</label></center>
                <center><label className='customerUserName'>"Horns and hooves"</label></center>
              </Grid>
            </Grid>


            <Grid item lg={6} md={6} xs={12} sm={8} marginTop={7}>
              <Grid alignItems={'center'} direction='column'>
                <div className="customerTextContainer">
                  <div class="rectangle"><p>{t('homeAboutUsText')}</p></div>
                  <center><div class="triangle-down"></div></center>
                </div>
              </Grid>
              <Grid  direction='row' marginTop={13} marginBottom={10} spacing={1}>
                <center><img src="./img/venom2.jpg" style={{ borderRadius: '50%', width: '60px', height: "60px" }} alt="" /></center>
                <center><label className='customerUserName'>Adam Sendler</label></center>
                <center><label className='customerUserName'>"Horns and hooves"</label></center>
              </Grid>
            </Grid>


            <Grid item lg={6} md={6} xs={12} sm={8} marginTop={7}>
              <Grid alignItems={'center'} direction='column'>
                <div className="customerTextContainer">
                  <div class="rectangle"><p>{t('homeAboutUsText')}</p></div>
                  <center><div class="triangle-down"></div></center>
                </div>
              </Grid>
              <Grid  direction='row' marginTop={13} marginBottom={10} spacing={1}>
                <center><img src="./img/venom2.jpg" style={{ borderRadius: '50%', width: '60px', height: "60px" }} alt="" /></center>
                <center><label className='customerUserName'>Adam Sendler</label></center>
                <center><label className='customerUserName'>"Horns and hooves"</label></center>
              </Grid>
            </Grid>
          </Grid> */}
        </Slider>
      </Container>
    </div>
  )
}

export default Customer
