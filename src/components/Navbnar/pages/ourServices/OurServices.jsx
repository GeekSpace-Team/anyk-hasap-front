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
                <p>
                  При выборе аудиторской компании, наряду со стоимостью услуг,
                  важную роль играют деловая репутация и опыт. Поэтому, мы
                  беремся только за ту работу, которую можем выполнить
                  действительно хорошо, с полной ответственностью и гарантией
                  качества!
                </p>
              </div>
            </div>
            <Grid container className="serviceCon">
              <Grid item lg={12} md={12} xs={12} sm={12}>
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
                      Обязательный аудит{" "}
                    </label>
                    <p style={{ fontFamily: "regularFont", lineHeight: "1.3" }}>
                      Ежегодная независимая проверка финансово-хозяйственной
                      деятельности компании. В рамках обязательного аудита
                      проверяется полнота и корректность составления финансовой
                      отчетности.
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
                      Инициативный аудит
                    </label>
                    <p style={{ fontFamily: "regularFont", lineHeight: "1.3" }}>
                      Проверка финансовой деятельности предприятия для
                      подготовки к предстоящей налоговой проверке. Составление
                      отчёта и предложении по оптимизации бизнес-процессов,
                      коррекции существующих несовершенств и профилактики
                      возможных упущений
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
                      Налоговое консультирование{" "}
                    </label>
                    <p style={{ fontFamily: "regularFont", lineHeight: "1.3" }}>
                      Специалисты «Anyk Hasap» возьмут на себя ответственность
                      за разработку учетной политики и рекомендации по
                      оптимизации налогообложения
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
                    Управленческое консультирование{" "}
                  </label>
                  <p style={{ fontFamily: "regularFont", lineHeight: "1.3" }}>
                    «Anyk Hasap» содействует руководству предприятий в улучшении
                    качества работы и управляемости компании, повышении
                    эффективности ее деятельности в целом и увеличении
                    индивидуальной производительности труда каждого сотрудника.
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
                    Оценка надёжности системы внутреннего контроля{" "}
                  </label>
                  <p style={{ fontFamily: "regularFont", lineHeight: "1.3" }}>
                    Контроль надежности и степень выявления и устранения
                    искажении в предоставляемой информации, а также контроль
                    своевременности предоставления отчетов.
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
                    Калькуляции{" "}
                  </label>
                  <p style={{ fontFamily: "regularFont", lineHeight: "1.3" }} p>
                    Подготовка предложении по выбору метода распределения
                    расходов, составление плановых и фактических калькуляций для
                    определения себестоимости работ, услуг и произведенных
                    продукции.{" "}
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
