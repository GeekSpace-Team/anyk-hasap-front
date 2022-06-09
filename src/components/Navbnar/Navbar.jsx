import React, { useEffect, useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  InfoContainer,
} from "./NavbarElements";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { makeStyles } from "@mui/styles";
import { NavLink as Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useTranslation } from "react-i18next";
import { i18n } from "../../Language/LangConfig";
import { useLocation } from "react-router-dom";
import "./navbar.css";

const useStyles = makeStyles({
  paper: {
    background: "black",
  },
});

const Navbar = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    console.log(header);
    header.classList.toggle("active", window.scrollY > 100);
  });

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { t } = useTranslation();
  const [state, setState] = React.useState({
    right: false,
  });
  const classes = useStyles();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }));

  const [firstLangClass, setFirstLangClass] = useState("langBtn");
  const [secondLangClass, setSecondLangClass] = useState("langBtn");
  const [thirdLangClass, setThirdLangClass] = useState("langBtn");
  const [lang, setLang] = useState("en");
  useEffect(() => {
    let l = localStorage.getItem("lang");
    if (l != null && typeof l !== "undefined") {
      setLang(l);
      i18n.changeLanguage(l);
    } else {
      i18n.changeLanguage("ru");
    }
  }, []);

  useEffect(() => {
    setFirstLangClass("langBtn");
    setSecondLangClass("langBtn");
    setThirdLangClass("langBtn");
    if (lang == "en") {
      setFirstLangClass("langBtnActive");
    }
    if (lang == "tm") {
      setSecondLangClass("langBtnActive");
    }
    if (lang == "ru") {
      setThirdLangClass("langBtnActive");
    }
  }, [lang]);

  const langChange = (ln) => {
    i18n.changeLanguage(ln);
    setLang(ln);
    localStorage.setItem("lang", ln);
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        height: "100vh",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ background: "white" }}
    >
      <Stack direction={"column"}>
        <Link to="/" className="mobileLink">
          {t("homePage")}
        </Link>
        <Link to="/ourServices" className="mobileLink">
          {t("OurServices")}
        </Link>
        <Link to="/aboutUs" className="mobileLink">
          {t("Aboutus")}
        </Link>
        <Link to="/contacts" className="mobileLink">
          {t("Contacts")}
        </Link>
        {/* <select 
                onChange={e=>langChange(e)}
                value={lang}
                className='langSelect'>
                  <option value="en">EN</option>
                  <option value="tm">TM</option>
                  <option value="ru">RU</option>
                </select> */}
        <br />
        <Stack direction={"row"} justifyContent="center" spacing={2}>
          <button onClick={() => langChange("en")} className={firstLangClass}>
            EN
          </button>
          <button onClick={() => langChange("tm")} className={secondLangClass}>
            TM
          </button>
          <button onClick={() => langChange("ru")} className={thirdLangClass}>
            RU
          </button>
        </Stack>
      </Stack>
    </Box>
  );

  return (
    <div className="fixedFor">
      <Container maxWidth="lg">
        <InfoContainer>
          <Stack
            alignItems={"flex-end"}
            spacing={2}
            justifyContent={"flex-end"}
            direction={"row"}
          >
            <img src="./img/mail.svg" style={{ height: "18px" }} />
            <a href="mailto:info@anykhasap.com" className="smallLink">
              info@anykhasap.com
            </a>
            <img src="./img/phone.svg" style={{ height: "18px" }} />
            <a href="tel:+99365 65 53 35 34" className="smallLink">
              +99365 53 35 34 ,{" "}
            </a>
            <a href="tel:+99365 53 93 72" className="smallLink">
              +99365 53 93 72 ,
            </a>
            <a href="tel:+99365 56 18 71" className="smallLink">
              +99365 56 18 71{" "}
            </a>
          </Stack>
        </InfoContainer>
      </Container>

      <Nav className="header bgGlass">
        <Container maxWidth="lg">
          <Grid container spacing={2} alignItems="center">
            <Grid item={true} xs={3} display="flex" alignItems={"center"}>
              <NavLink to="/">
                <img
                  src="./img/newLogo.jpg"
                  style={{
                    height: "80px",
                    paddingBottom: "10px",
                    width: "auto",
                    display: "flex",
                    alignItems: "center",
                  }}
                />
              </NavLink>
            </Grid>
            <Grid item={true} xs={7}>
              <Stack justifyContent={"center"} direction={"row"}>
                <NavMenu>
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
                </NavMenu>
              </Stack>
            </Grid>
            <Grid item={true} xs={2}>
              <Stack justifyContent={"flex-end"} direction={"row"}>
                <NavBtn>
                  <select
                    onChange={(e) => langChange(e.target.value)}
                    value={lang}
                    className="langSelect"
                  >
                    <option value="en">EN</option>
                    <option value="tm">TM</option>
                    <option value="ru">RU</option>
                  </select>
                </NavBtn>
                <Bars onClick={toggleDrawer("right", true)} />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Nav>

      <SwipeableDrawer
        classes={{ paper: classes.paper }}
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {list("right")}
      </SwipeableDrawer>
    </div>
  );
};

export default Navbar;
