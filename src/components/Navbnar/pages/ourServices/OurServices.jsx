import React, { useEffect } from 'react'
import './ourServices.css'
import Container from '@mui/material/Container';
import { Grid, Stack } from '@mui/material';
import { i18n } from '../../../../Language/LangConfig';
import { useTranslation } from 'react-i18next';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FooTter from '../footer/FooTter';
import styled from 'styled-components'
import ContactUs from '../homePage/contactUs/ContactUs';
// import AccorDion from './occardion/AccorDion';


const OurServices = () => {
  const { t } = useTranslation();
  useEffect(() => {
    let l = localStorage.getItem('lang');
    if (l != null && typeof l !== 'undefined') {
      i18n.changeLanguage(l);
    } else {
      i18n.changeLanguage("en");
    }
  }, []);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className='ourServicContainer'>
      <div className="imgContainer">
        <img src="./img/ourServices.png" alt="" />
      </div>
      <Container maxWidth="lg">
        <div className='homeSecondContainer'>
          {/* <div className='ourServ'>
            <Stack direction={'column'} spacing={1}>
              <label>{t('OurServices')}</label>
              <Stack justifyContent={'center'} alignItems='center'>
                <div className='underLineE'></div>
              </Stack>
            </Stack>
          </div> */}
          <TitleName>
            <span>{t('OurServices')}</span>
          </TitleName>
          <div className='aboutServ'>
            {/* <p>{t('ourServicText')}</p> */}
            <p>При выборе аудиторской компании, наряду со стоимостью услуг, важную роль играют деловая репутация и опыт. Поэтому, мы беремся только за ту работу, которую можем выполнить действительно хорошо, с полной ответственностью и гарантией качества!</p>
          </div>
        </div>
        <Stack className='newOurServices' marginLeft={'12%'} spacing={3} mt={5} mb={7}>
          <label>- Обязательный аудит</label>
          <label>- Инициативный аудит</label>
          <label>- Налоговое консультирование</label>
          <label>- Управленческое консультирование</label>
          <label>- Оценка надёжности системы внутреннего контроля</label>
          <label>- Калькуляции</label>
        </Stack>



        {/* <AccorDion /> */}
        <ContactUs />
      </Container>
      <FooTter />
    </div>
  )
}

export default OurServices

const TitleName = styled.div`
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