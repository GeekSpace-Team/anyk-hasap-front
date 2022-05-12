import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import { useTranslation } from "react-i18next";
import { Grid, Stack, Typography } from '@mui/material';
import { i18n } from '../../../../Language/LangConfig';
import ContactUs from './contactUs/ContactUs';
// import Customer from './customer/Customer';
// import DemoCarousel from '../carousel/DemoCarousel';
import FooTter from '../footer/FooTter';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import './home.css';
//glassmorphisim transparent background like cupertino???????? 

export const NavLink = styled(Link)`
text-decoration: none;
`

const HomePage = () => {



  const { t } = useTranslation();
  useEffect(() => {
    let l = localStorage.getItem('lang');
    // nodeRef = {nodeRef}
    if (l != null && typeof l !== 'undefined') {
      i18n.changeLanguage(l);
    } else {
      i18n.changeLanguage("en");
    }
  }, []);

  const [clicked, setClicked] = useState(false);
  
  
  return (
    <div className='firstContaiiner'>
      <div className='secondContaiiner'>
      <div className='homeFirstContianer'>
        <div className='transparent'>
          <Container maxWidth="lg">
            <div className='homePageLabel'>
              <label className='lableName'>{t('text1')} <br />{t('text2')}</label>
              <p style={{marginLeft:"7px"}}>{t('aboutUsText5')}</p>
              <div className='learnMoreButton'>
                <NavLink to="/ourServices" className='navBarItem'>
                  {/* <button>{t('learnMore')}<img src="./img/rightArrow.svg" alt='#' /></button> */}
                  <Button type='submit' variant="outlined" endIcon={<ArrowForwardIosIcon style={{ height: '15px', color: '#FFFFFF' }} />}>
                      {t('learnMore')}
                  </Button>
                </NavLink>
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
            {/* <p>{t('homeUnderTitle')}</p> */}
            {/* <p  style={{lineHeight:'1.4'}}>При выборе аудиторской компании, наряду со стоимостью услуг, важную роль играют деловая репутация и опыт. Поэтому, мы беремся только за ту работу, которую можем выполнить действительно хорошо, с полной ответственностью и гарантией качества!</p> */}
          <p style={{lineHeight:'1.4'}}>{t('aboutUsText4')}</p>
          </div>
        </div>
      </Container>
      <Container maxWidth="lg">
       <Grid container>
       <Grid item lg={4} md={4} xs={12} sm={6} mb={7}  >
           <Stack direction='row' gap={3}>
             <img src="img/Обязательныйаудит.png" style={{height:'70px', width:'70px'}} alt="" />
             <Stack direction='column' gap={2} width='60%'>
               <label style={{fontFamily:'regularFont', fontWeight:"bold", textTransform:"uppercase", lineHeight:"1.4"}}>{t('Обязательныйаудит')}</label>
               <p style={{fontFamily:"regularFont", lineHeight:"1.3"}}>{t('ОбязательныйаудитT')}</p>
             </Stack>
           </Stack>
         </Grid>

         <Grid item lg={4} md={4} xs={12} sm={6} mb={7}  >
           <Stack direction='row' gap={3}>
             <img src="img/Инициативныйаудит.png" style={{height:'70px', width:'70px'}} alt="" />
             <Stack direction='column' gap={2} width='60%'>
               <label style={{fontFamily:'regularFont', fontWeight:"bold", textTransform:"uppercase", lineHeight:"1.4"}}>{t('Initiativeaudit')}</label>
               <p style={{fontFamily:"regularFont", lineHeight:"1.3"}}>{t('InitiativeauditT')}</p>
             </Stack>
           </Stack>
         </Grid>

         <Grid item lg={4} md={4} xs={12} sm={6} mb={7} >
           <Stack direction='row' gap={3}>
             <img src="img/Налоговоеконсультирование.png" style={{height:'70px', width:'70px'}} alt="" />
             <Stack direction='column' gap={2} width='60%'>
               <label style={{fontFamily:'regularFont', fontWeight:"bold", textTransform:"uppercase", lineHeight:"1.4"}}>{t('Taxconsulting')}</label>
               <p style={{fontFamily:"regularFont", lineHeight:"1.3"}}>{t('TaxconsultingT')}</p>
             </Stack>
           </Stack>
         </Grid>

         <Grid item lg={4} md={4} xs={12} sm={6} mb={7} >
           <Stack direction='row' gap={3}>
             <img src="img/управленческоеконсультирование.png" style={{height:'70px', width:'70px'}} alt="" />
             <Stack direction='column' gap={2} width='60%'>
               <label style={{fontFamily:'regularFont', fontWeight:"bold", textTransform:"uppercase", lineHeight:"1.4"}}>{t('Managementconsulting')}</label>
               <p style={{fontFamily:"regularFont", lineHeight:"1.3"}}>{t('ManagementconsultingT')}</p>
             </Stack>
           </Stack>
         </Grid>

         <Grid item lg={4} md={4} xs={12} sm={6} mb={7} >
           <Stack direction='row' gap={3}>
             <img src="img/оценканадежностисистемывнутреннего контроля.png" style={{height:'70px', width:'70px'}} alt="" />
             <Stack direction='column' gap={2} width='60%'>
               <label style={{fontFamily:'regularFont', fontWeight:"bold", textTransform:"uppercase", lineHeight:"1.4"}}>{t('Internalcontrol')}</label>
               <p style={{fontFamily:"regularFont", lineHeight:"1.3"}}>{t('InternalcontrolT')}</p>
             </Stack>
           </Stack>
         </Grid>

         <Grid item lg={4} md={4} xs={12} sm={6} mb={7} >
           <Stack direction='row' gap={3}>
             <img src="img/калькуляции.png" style={{height:'70px', width:'70px'}} alt="" />
             <Stack direction='column' gap={2} width='60%'>
               <label style={{fontFamily:'regularFont', fontWeight:"bold", textTransform:"uppercase", lineHeight:"1.4"}}>{t('Calculation')}</label>
               <p style={{fontFamily:"regularFont", lineHeight:"1.3"}}>{t('CalculationT')}</p>
             </Stack>
           </Stack>
         </Grid>

         
       </Grid>
      </Container>
      
      <div className='aboutUsPhoto'>
        <div className="mediaTransparent">
        <AboutUs>
                <span style={{ color: 'white' }}>{t('Aboutus')}</span>
              </AboutUs>
          <Container maxWidth="lg">
            <Stack direction={'column'}>
             
              <div className='homeAboutUsContainer'>
                    <p style={{ textAlign: "left", fontSize: "17px" }}>{t('aboutUsText1')}</p>
                    
              {ServicText.map((item, index) => {
                return (
                  <div key={item.id}>
                      {clicked===true ? (
                           <p style={{ textAlign: "left", lineHeight:"20px", marginTop:'30px', fontSize: "17px" }}>{t(item.text)}</p>
                      ) : null}
                  </div>
                )
              })}
              <div id='secondLearnButton ' style={{paddingBottom:'80px'}} className='learnMoreButton secondLearnButton'>
                  {/* <button onClick={() => setClicked(!clicked)} key={'keeey'} style={{ paddingTop: '1.5%', paddingBottom: '1.5%', paddingRight: '5%', paddingLeft: '5%', border:'none' }}>{t('learnMore')}<img src="./img/rightArrow.svg" alt='#' /></button> */}
                  <NavLink to="/aboutUs" className='navBarItem minWidthh'>
                    <Button  type='submit'  variant="outlined" endIcon={<ArrowForwardIosIcon style={{ height: '15px', color: '#AA323C' }} />}>{t('learnMore')}</Button>
                  </NavLink>
              </div>
              </div>
            </Stack>
          </Container>
        </div>
      </div>
      <ContactUs />
      {/* <Customer /> */}
      {/* <DemoCarousel /> */}
      <FooTter />
      </div>
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
justify-content: center;
padding-top: 70px;
padding-bottom: 30px;
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
    id: '1',
    text: 'aboutUsText2'
  },
  {
    id: "2",
    text: "aboutUsText3"
  },
 
  {
    id: "4",
    text: "aboutUsText5"
  }

]