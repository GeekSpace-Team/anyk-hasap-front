import React, { useEffect } from "react";
import "./ourServices.css";
import Container from "@mui/material/Container";
import { Grid, Stack } from "@mui/material";
import { i18n } from "../../../../Language/LangConfig";
import { useTranslation } from "react-i18next";
// import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FooTter from "../footer/FooTter";
import styled from "styled-components";
import ContactUs from "../homePage/contactUs/ContactUs";
// import AccorDion from './occardion/AccorDion';

const OurServices = () => {
  const { t } = useTranslation();
  useEffect(() => {
    let l = localStorage.getItem("lang");
    if (l != null && typeof l !== "undefined") {
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
    <div className="ourServicContainer">
      <div className="firstContaiiner">
        <div className="secondContaiiner">
          <div className="imgContainer">
            <img src="./img/ourServices.png" alt="" />
          </div>
          <Container maxWidth="lg">
            <div className="homeSecondContainer">
              {/* <div className='ourServ'>
                <Stack direction={'column'} spacing={1}>
                  <label>{t('OurServices')}</label>
                  <Stack justifyContent={'center'} alignItems='center'>
                    <div className='underLineE'></div>
                  </Stack>
                </Stack>
              </div> */}
              <TitleName>
                <span>{t("OurServices")}</span>
              </TitleName>
              <div className="aboutServ ourServMedia">
                {/* <p>{t('ourServicText')}</p> */}
                <p>{t('aboutUsText4')}
                </p>
              </div>
            </div>
            <Grid container className="serviceCon" ml={4}>
              <Grid item lg={12} md={12} xs={12} sm={12} mb={7}>
                <Stack direction="row" gap={3}>
                  <img
                    src="img/Обязательныйаудит.png"
                    style={{ height: "70px", width: "70px" }}
                    alt=""
                  />
                  <Stack direction="column" gap={2} width="60%">
                    <label
                      style={{
                        fontFamily: "regularFont",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        lineHeight: "1.4",
                      }}
                    >
                      {t('Обязательныйаудит')}{" "}
                    </label>
                    <p style={{ fontFamily: "regularFont", lineHeight: "1.3" }}>
                    {t('ОбязательныйаудитT')}
                    </p>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item lg={12} md={12} xs={12} sm={12} mb={7}>
                <Stack direction="row" gap={3}>
                  <img
                    src="img/Инициативныйаудит.png"
                    style={{ height: "70px", width: "70px" }}
                    alt=""
                  />
                  <Stack direction="column" gap={2} width="60%">
                    <label
                      style={{
                        fontFamily: "regularFont",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        lineHeight: "1.4",
                      }}
                    >
                     {t('Initiativeaudit')}
                    </label>
                    <p style={{ fontFamily: "regularFont", lineHeight: "1.3" }}>
                    {t('InitiativeauditT')}
                    </p>
                  </Stack>
                </Stack>
              </Grid>

              <Grid item lg={12} md={12} xs={12} sm={12} mb={7}>
                <Stack direction="row" gap={3}>
                  <img
                    src="img/Налоговоеконсультирование.png"
                    style={{ height: "70px", width: "70px" }}
                    alt=""
                  />
                  <Stack direction="column" gap={2} width="60%">
                    <label
                      style={{
                        fontFamily: "regularFont",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        lineHeight: "1.4",
                      }}
                    >
                      {t('Taxconsulting')}{" "}
                    </label>
                    <p style={{ fontFamily: "regularFont", lineHeight: "1.3" }}>
                    {t('TaxconsultingT')}
                    </p>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item lg={12} md={12} xs={12} sm={12} mb={7}>
              <Stack direction="row" gap={3}>
                <img
                  src="img/управленческоеконсультирование.png"
                  style={{ height: "70px", width: "70px" }}
                  alt=""
                />
                <Stack direction="column" gap={2} width="60%">
                  <label
                    style={{
                      fontFamily: "regularFont",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      lineHeight: "1.4",
                    }}
                  >
                    {t('Managementconsulting')}{" "}
                  </label>
                  <p style={{ fontFamily: "regularFont", lineHeight: "1.3" }}>
                  {t('ManagementconsultingT')}
                  </p>
                </Stack>
              </Stack>
            </Grid>

            <Grid item lg={12} md={12} xs={12} sm={12} mb={7}>
              <Stack direction="row" gap={3}>
                <img
                  src="img/оценканадежностисистемывнутреннего контроля.png"
                  style={{ height: "70px", width: "70px" }}
                  alt=""
                />
                <Stack direction="column" gap={2} width="60%">
                  <label
                    style={{
                      fontFamily: "regularFont",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      lineHeight: "1.4",
                    }}
                  >
                    {t('Internalcontrol')}{" "}
                  </label>
                  <p style={{ fontFamily: "regularFont", lineHeight: "1.3" }}>
                  {t('InternalcontrolT')}
                  </p>
                </Stack>
              </Stack>
            </Grid>

            <Grid item lg={12} md={12} xs={12} sm={12} mb={7}>
              <Stack direction="row" gap={3}>
                <img
                  src="img/калькуляции.png"
                  style={{ height: "70px", width: "70px" }}
                  alt=""
                />
                <Stack direction="column" gap={2} width="60%">
                  <label
                    style={{
                      fontFamily: "regularFont",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      lineHeight: "1.4",
                    }}
                  >
                    {t('Calculation')}{" "}
                  </label>
                  <p style={{ fontFamily: "regularFont", lineHeight: "1.3" }} p>
                  {t('CalculationT')}{" "}
                  </p>
                </Stack>
              </Stack>
            </Grid>
            </Grid>

         

            {/* <AccorDion /> */}
            <ContactUs />
          </Container>
          <FooTter />
        </div>
      </div>
    </div>
  );
};

export default OurServices;

const TitleName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 33px;
    letter-spacing: 1.42px;
    position: relative;
    color: #000000;
    text-transform: uppercase;
    font-weight: 400;
    font-family: regularFont;

    &:after {
      content: "";
      height: 2px;
      background: #aa323c;
      left: 0;
      right: 0;
      transform: scaleX(0.6);
      bottom: -6px;
      position: absolute;
    }
  }
`;
