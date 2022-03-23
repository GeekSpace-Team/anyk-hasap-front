import { Grid, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { useTranslation } from 'react-i18next';
import { i18n } from '../../../../../Language/LangConfig';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Occardion = () => {
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
    <div>
      <Grid container>
        <Grid item lg={3} md={3} xs={12} sm={12}>
          <img src="./img/firstImg.png" alt="" />
        </Grid>
        <Grid lg={9} md={9} xs={12} sm={12}>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
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
      </Grid>
    </div>
  )
}

export default Occardion
