import React from "react";
import Logout from "../Logout/Logout";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import s from "./Nav.module.css";
import { UilUser } from "@iconscout/react-unicons";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

export default function Nav() {
  const { user } = useAuth0();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <header className={s.container}>
        <span className={s.logo}>
          <img src="/logohenry.webp" alt="Henry" />| Match
        </span>
        <nav className={s.navbar}>
          <NavLink to={"/match"} className={s.link}>
            <Button color="inherit">
              <span className={s.menu}>Inicio</span>
            </Button>
          </NavLink>
          <NavLink to={"/match/me"} className={s.link}>
            <Button color="inherit">
              <span className={s.menu}>Perfil</span>
            </Button>
          </NavLink>
          <NavLink to={"/match/about"} className={s.link}>
            <Button color="inherit">
              <span className={s.menu}>Nosotros</span>
            </Button>
          </NavLink>
        </nav>
        <section className={s.user}>
          <p>
            Hola, <b>{user?.given_name}!</b>
          </p>
          {user ? (
            <img
              src={user.picture}
              alt={user.name}
              onClick={handleClick}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            />
          ) : (
            <span>
              <UilUser />
            </span>
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
            <MenuItem>
              <Logout />
            </MenuItem>
          </Menu>
        </section>
      </header>
      <main className={s.body}>
        <Outlet />
      </main>
    </>
  );
}
