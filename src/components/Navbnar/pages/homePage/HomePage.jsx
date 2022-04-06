import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import { useTranslation } from "react-i18next";
import { Grid, Stack } from '@mui/material';
import { i18n } from '../../../../Language/LangConfig';
import ContactUs from './contactUs/ContactUs';
// import Customer from './customer/Customer';
// import DemoCarousel from '../carousel/DemoCarousel';
import FooTter from '../footer/FooTter';
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import './home.css';



export const NavLink = styled(Link)`
text-decoration: none;
`

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

  
  return (
    <div>
      <div className='homeFirstContianer'>
        <div className='transparent'>
          <Container maxWidth="lg">
            <div className='homePageLabel'>
              <label className='lableName'>Аудит – для независимой и объективной оценки деятельности и состояния компании.</label>
              {/* <label className='lableName'>{t('wheretrustmeetsstrategy')}</label> */}
              {/* <p>{t('homeUnderTitle')}</p> */}
              <p style={{marginLeft:"7px"}}>«Anyk Hasap» стремится принести реальную пользу вашему бизнесу, уберечь от ошибок, снизить налоговые и финансовые риски – предоставить услуги высокого качества.</p>
              <div className='learnMoreButton'>

                <NavLink to="/ourServices" className='navBarItem'>
                  <button>{t('learnMore')}<img src="./img/rightArrow.svg" /></button>
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
            <p>При выборе аудиторской компании, наряду со стоимостью услуг, важную роль играют деловая репутация и опыт. Поэтому, мы беремся только за ту работу, которую можем выполнить действительно хорошо, с полной ответственностью и гарантией качества!</p>
          </div>
        </div>
      </Container>
      <Container maxWidth="lg">
        <Stack className='newOurServices' marginLeft={'12%'} spacing={3} mt={7} mb={7}>
          <label>- Обязательный аудит</label>
          <label>- Инициативный аудит</label>
          <label>- Налоговое консультирование</label>
          <label>- Управленческое консультирование</label>
          <label>- Оценка надёжности системы внутреннего контроля</label>
          <label>- Калькуляции</label>
        </Stack>
      </Container>
      
      <div className='aboutUsPhoto'>
        <div className="mediaTransparent">
          <Container maxWidth="lg">
            <Stack direction={'column'}>
              <AboutUs>
                <span style={{ color: 'white' }}>{t('Aboutus')}</span>
              </AboutUs>
              <div className='homeAboutUsContainer'>
                    <p style={{ textAlign: "left", fontSize: "17px" }}>{t('aboutUsText1')}</p>
                    
              {ServicText.map((item, index) => {
                return (
                  <>
                      {clicked==true ? (
                           <p style={{ textAlign: "left", lineHeight:"20px", marginTop:'30px', fontSize: "17px" }}>{t(item.text)}</p>
                      ) : null}
                  </>
                )
              })}
              <div id='secondLearnButton' className='learnMoreButton'>
                  <button onClick={() => setClicked(!clicked)} key={'keeey'} style={{ paddingTop: '1.5%', paddingBottom: '1.5%', paddingRight: '5%', paddingLeft: '5%', border:'none' }}>{t('learnMore')}<img src="./img/rightArrow.svg" /></button>
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