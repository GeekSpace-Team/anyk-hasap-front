import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import { Grid, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { i18n } from "../../../../Language/LangConfig";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import "./footer.css";
import { NavMenu } from "../../NavbarElements";

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  font-family: regularFont;
  font-size: 16px;
  &.active {
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-color: #aa323c;
  }
`;
const FooTter = () => {
  const { t } = useTranslation();
  useEffect(() => {
    let l = localStorage.getItem("lang");
    if (l != null && typeof l !== "undefined") {
      i18n.changeLanguage(l);
    } else {
      i18n.changeLanguage("en");
    }
  }, []);
  return (
    <div className="firstContaiiner">
      <div className="secondContaiiner">
        <div className="FooterContainer">
          <Container maxWidth="lg">
            <Grid
              container
              paddingTop={2.5}
              justifyContent={"center"}
              paddingBottom={5}
            >
              <Grid item={true} lg={4} md={6} xs={12} sm={12}>
                <img
                  className="footerImgg"
                  src="./img/newLogo.jpg"
                  style={{
                    height: "90px",
                    width: "auto",
                    display: "flex",
                    alignItems: "center",
                  }}
                  alt="#"
                />
              </Grid>
              <Grid item={true} lg={4} md={6} xs={12} sm={12}>
                <Stack direction={"column"} spacing={2} className="navMedia">
                  <NavLink to="/" className="navBarItem">
                    {t("homePage")}
                  </NavLink>
                  <NavLink to="/ourServices" className="navBarItem">
                    {t("OurServices")}
                  </NavLink>
                  <NavLink to="/aboutUs" className="navBarItem">
                    {t("Aboutus")}
                  </NavLink>
                  <NavLink to="/contacts" className="navBarItem">
                    {t("Contacts")}
                  </NavLink>
                </Stack>
              </Grid>
              <Grid item={true} lg={4} xs={12} md={6} sm={12}>
                <Stack direction="column" spacing={3} className="contactMedia">
                  <Stack direction={"row"} spacing={2}>
                    <img
                      src="./img/mobileFooter.svg"
                      alt="#"
                      style={{ height: "18px" }}
                    />
                    <a
                      href="tel:+99365533534"
                      style={{ textDecoration: "none" }}
                      className="footerTitle"
                    >
                      +993 65 53 35 34
                    </a>
                  </Stack>
                  <Stack direction={"row"} pl={4} spacing={2}>
                    <a
                      href="tel:+99365 56 18 71"
                      style={{ textDecoration: "none" }}
                      className="footerTitle"
                    >
                      {" "}
                      +993 65 56 18 71
                    </a>
                  </Stack>
                  <Stack direction={"row"} pl={4} spacing={2}>
                    <a
                      href="tel:+99365 53 93 72"
                      style={{ textDecoration: "none" }}
                      className="footerTitle"
                    >
                      {" "}
                      +993 65 53 93 72
                    </a>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <img
                      src="./img/phoneFooter.svg"
                      alt="#"
                      style={{ height: "18px" }}
                    />
                    <a
                      href="tel:+993 (12) 95-50-19"
                      style={{ textDecoration: "none" }}
                      className="footerTitle"
                    >
                      +993 12 95-50-19
                    </a>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <img
                      src="./img/mailFooter.svg"
                      alt="#"
                      style={{ height: "18px" }}
                    />
                    <a
                      href="mailto:info@anykhasap.com"
                      style={{ textDecoration: "none" }}
                      className="footerTitle"
                    >
                      info@anykhasap.com
                    </a>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <img
                      src="./img/locationFooter.svg"
                      alt="#"
                      style={{ height: "18px" }}
                    />
                    <a
                      href="https://yandex.ru/maps/10324/ashgabat/?from=mapframe&ll=58.356185%2C37.913237&mode=poi&poi%5Bpoint%5D=58.356074%2C37.913273&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D75928748749&source=mapframe&utm_source=mapframe&z=19.8"
                      style={{ textDecoration: "none" }}
                      target="_blank"
                      rel="noreferrer"
                      className="footerTitle"
                    >
                      {t("address")}
                    </a>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Container>
          <Stack alignItems={"center"} paddingBottom={2}>
            <label className="footerTitle">{t("ahliHukuk")}</label>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default FooTter;
