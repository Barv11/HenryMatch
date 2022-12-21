import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

import Logout from "../Logout/Logout";
import Login from "../Login/Login";
import UpdateProfile from "../UpdateProfile/UpdateProfile";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import s from "./Nav.module.css";

export default function Nav() {
  const dispatch = useDispatch();
  const [warning, setWarning] = useState(false);
  const [classWarning, setClassWarning] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const userCurrent = useSelector((state) => state.userCurrent);
  const isLogged = useSelector((state) => state.isLogged);

  const handleWarning = () => {
    setClassWarning(true);
    setTimeout(() => {
      setWarning(false);
    }, 1000);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setTimeout(() => {
      setWarning(true);
    }, 5000);
  }, []);

  return (
    <>
      {!isLogged ? (
        warning ? (
          <section
            className={`${s.anuncio} ${classWarning ? s.warning : null}`}
          >
            Por favor, regístrate para poder disfrutar los beneficios de la
            plataforma.
            <span onClick={handleWarning}>✖</span>
          </section>
        ) : null
      ) : null}
      <header className={s.container}>
        <nav className={s.navbar}>
          <NavLink to={"/match"} className={s.linklogo}>
            <img src="/logohenry.webp" alt="Henry" />
          </NavLink>
          <span>|</span>
          <NavLink to={"/match"} className={s.link}>
            <Button color="inherit">
              <span className={s.menu}>Inicio</span>
            </Button>
          </NavLink>
          <NavLink to={"/match/about"} className={s.link}>
            <Button color="inherit">
              <span className={s.menu}>Nosotros</span>
            </Button>
          </NavLink>
        </nav>
        {Object.entries(userCurrent).length ? (
          <section
            className={s.user}
            onClick={handleClick}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <p>
              Hola, <b>{userCurrent.firstname}!</b>
            </p>
            <img src={userCurrent.picture} alt={userCurrent.name} />
          </section>
        ) : (
          <section className={s.logs}>
            <Login />
          </section>
        )}
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <NavLink to={"/match/me"} className={s.drop}>
            <MenuItem>
              <span className={s.drop}>Perfil</span>
            </MenuItem>
          </NavLink>

          <NavLink to={"/match/me"} className={s.drop}>
            <MenuItem>
              <span className={s.drop}>Editar Perfil</span>
            </MenuItem>
          </NavLink>
          <MenuItem onClick={setOpenModal}>
            {/* <ButtonData onClick={setOpenModal} /> */}
            <span className={s.drop}>Sobre mí</span>
          </MenuItem>
          <MenuItem>
            <Logout />
          </MenuItem>
        </Menu>
      </header>
      <main className={s.body}>
        <Outlet />
        {openModal ? <UpdateProfile setOpenModal={setOpenModal} /> : null}
      </main>
    </>
  );
}
