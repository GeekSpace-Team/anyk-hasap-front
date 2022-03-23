import { Grid, Stack } from '@mui/material';
import React, { useEffect } from 'react'
import { useTranslation } from "react-i18next";
import Navbar from '../../Navbar';
import DemoCarousel from '../carousel/DemoCarousel';
import './aboutUs.css'
import Container from '@mui/material/Container';
import { i18n } from '../../../../Language/LangConfig';
import Customer from '../homePage/customer/Customer';
import FooTter from '../footer/FooTter';

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
    <div>
      {/* <h1>{t('Aboutus')}</h1> */}
      <div className="imgContainerAbout">
        <img src='./img/aboutUs.png' />
      </div>
      <Container maxWidth="lg">
        <div className='ourServ'>
          <Stack direction={'column'} marginTop={7} spacing={1}>
            <label>{t('Aboutus')}</label>
            <Stack justifyContent={'center'} alignItems='center'>
              <div className='underLineE'></div>
            </Stack>
          </Stack>
        </div>
        <Grid container>
          <Grid item lg={4} md={6} xs={12} sm={6}> 
          <Stack direction='column' spacing={2} justifyContent='center' marginTop={7} alignItems='center'>
            <img src="./img/aboutFrame.png" style={{ width: '110px' }} alt="" />
            <label className='frameTitle'>Lorem ipsium dolor.</label>
          </Stack>
          </Grid>
          <Grid item lg={4} md={6} xs={12} sm={6}>
          <Stack direction='column' spacing={2} justifyContent='center' marginTop={7} alignItems='center'>
            <img src="./img/frame.png" style={{ width: '110px' }} alt="" />
            <label className='frameTitle'>Lorem ipsium dolor.</label>
          </Stack>
          </Grid>
          <Grid item lg={4} md={6} xs={12} sm={6}>
          <Stack direction='column' spacing={2} justifyContent='center' marginTop={7} alignItems='center'>
            <img src="./img/frame1.png" style={{ width: '110px' }} alt="" />
            <label className='frameTitle'>Lorem ipsium dolor.</label>
          </Stack>
          </Grid>
        </Grid>
        <Grid container>
          {/* <Stack direction="row">
            <Stack marginTop={7} spacing={3} width='100%'>
          <Grid item lg={6} md={6} xs={12} sm={12}>
              <p className='frameTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus at sollicitudin in arcu risus ac interdum scelerisque diam. In mi vulputate id nec pretium massa suspendisse eu. Egestas elit facilisis egestas mattis quisque a, lorem lectus venenatis.</p>
          </Grid>
          <Grid item lg={6} md={6} xs={12} sm={12}>
              <p className='frameTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus at sollicitudin in arcu risus ac interdum scelerisque diam. In mi vulputate id nec pretium massa suspendisse eu. Egestas elit facilisis egestas mattis quisque a, lorem lectus venenatis.</p>
          </Grid>
          <Grid item lg={6} md={6} xs={12} sm={12}>
              <p className='frameTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus at sollicitudin in arcu risus ac interdum scelerisque diam. In mi vulputate id nec pretium massa suspendisse eu. Egestas elit facilisis egestas mattis quisque a, lorem lectus venenatis.</p>
          </Grid>
            </Stack>
            
            <Stack marginTop={9} width='50%'>
          <Grid lg={6} md={12} xs={12} sm={12}>
              <div className='imgAboutUs'>
                <img src="./img/aboutUsImg.png" alt="" />
              </div>
          </Grid>
            </Stack>
          </Stack> */}

          {/* <Stack spacing={7} direction='row' marginTop={9}> */}
          <Grid item lg={6} md={6} xs={12} sm={12}>
            <Stack direction="column" spacing={0} marginTop={9}>
            <Grid item md={12} lg={12} xs={12} sm={12}>
              <p style={{width:'90%'}} className='frameTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus at sollicitudin in arcu risus ac interdum scelerisque diam. In mi vulputate id nec pretium massa suspendisse eu. Egestas elit facilisis egestas mattis quisque a, lorem lectus venenatis.</p>
            </Grid>
            <Grid item md={12} lg={12} xs={12} sm={12}>
              <p style={{width:'90%'}} className='frameTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus at sollicitudin in arcu risus ac interdum scelerisque diam. In mi vulputate id nec pretium massa suspendisse eu. Egestas elit facilisis egestas mattis quisque a, lorem lectus venenatis.</p>
            </Grid>
            <Grid item md={12} lg={12} xs={12} sm={12}>
              <p style={{width:'90%'}} className='frameTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus at sollicitudin in arcu risus ac interdum scelerisque diam. In mi vulputate id nec pretium massa suspendisse eu. Egestas elit facilisis egestas mattis quisque a, lorem lectus venenatis.</p>
            </Grid>
            </Stack>
          </Grid>


          <Grid item lg={6} md={6} xs={12} sm={12}>
            <Grid item lg={12} md={12} xs={12} sm={12} marginTop={9} > 
              <img style={{width:'100%'}} src="./img/aboutUsImg.png" alt="" />
            </Grid>
          </Grid>
          </Grid>
        {/* </Stack> */}
      </Container>


      <Customer />
      <DemoCarousel />
      <FooTter />
    </div>
  )
}

export default AboutUs
