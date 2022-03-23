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
import Occardion from './occardion/Occardion';

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
          <div className='ourServ'>
            <Stack direction={'column'} spacing={1}>
              <label>{t('OurServices')}</label>
              <Stack justifyContent={'center'} alignItems='center'>
                <div className='underLineE'></div>
              </Stack>
            </Stack>
          </div>
          <div className='aboutServ'>
            <p>{t('ourServicText')}</p>
          </div>
        </div>
        {/* <Grid container>
          <Grid lg={12} md={12} sm={12} xs={12}>
            <Stack direction='row'>
              <img src="./img/firstImg.png" alt="" />
              <Grid item sm={12} lg={7} className="infoTitle">
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Stack direction='column' spacing={2}>
                      <label>{t('homeInfoTitle')}</label>
                    <p>{t('ourServicText')}</p>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack direction='column' spacing={2}>
                      <p>{t('ourServicText')}</p>
                      <p>{t('ourServicText')}</p>
                      <p>{t('ourServicText')}</p>
                      </Stack>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Stack>

          </Grid>
        </Grid> */}
<Occardion />
      </Container>
      <FooTter />
    </div>
  )
}

export default OurServices
