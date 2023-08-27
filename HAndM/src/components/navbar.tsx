import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import logo from "../images/logo.png";
import { Typography } from "@mui/material";
import NavbarHelper from "./NavbarHelper";
import NavbarSubLinks from "./NavbarSubLinks";
import BabyData from "../datas/BabyData";
import KidData from "../datas/KidData";
import HomeData from "../datas/HomeData";
import SportData from "../datas/SportData";
import DiscountData from "../datas/Discount";
import SustainabilityData from "../datas/SustainabilityData";
import WomenData from "../datas/WomenData";
import DividedData from "../datas/DividedData";
import MenData from "../datas/MenData";

const NavBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [cartItemCount, setCartItemCount] = useState(0);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar" style={{background:"#faf9f8"}}>
      <div className="upperNav">
        <ul className="leftUpperNav">
          <a href="#">
            <li className="list-item">Müşteri Hizmetleri</li>
          </a>
          <a href="#">
            <li className="list-item">Moda Haberleri</li>
          </a>
          <a href="#">
            <li className="list-item">Mağaza bul</li>
          </a>
          <div>
            <Typography
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              variant="h6"
              style={{ fontSize: "0.95rem", fontWeight: "bold" }}
            >
              ooo
            </Typography>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>H&M Android App</MenuItem>
              <MenuItem onClick={handleClose}>H&M iphone App</MenuItem>
            </Menu>
          </div>
        </ul>
        <img
          src={logo}
          alt="logo"
          width="81"
          height="54"
          style={{ paddingTop: "30px" }}
        />
        <ul className="rightUpperNav">
          <a href="#">
            <li className="list-item">
              <i className="fa-regular fa-user fa-2xl"></i>Oturum Aç
            </li>
          </a>
          <a href="#">
            <li className="list-item">
              <i className="fa-regular fa-heart fa-2xl"></i>Favoriler
            </li>
          </a>
          <a href="#">
            <li className="list-item">
              <i className="fa-solid fa-cart-shopping fa-2xl"></i>
              Alışveriş Sepeti ({cartItemCount})
            </li>
          </a>
        </ul>
      </div>
      <ul className="lowerNav"><a href="#">
          <li className="list-item">
        Kadın
          <NavbarSubLinks titles={WomenData}/></li></a>
        
        <a href="#">
          <li className="list-item">Erkek
          <NavbarSubLinks titles={MenData}/></li>
        </a>
        <a href="#">
          <li className="list-item">Divided
          <NavbarSubLinks titles={DividedData}/></li>
          
        </a>
        <a href="#">
          <li className="list-item">Bebek
          <NavbarSubLinks titles={BabyData}/></li>
        </a>
        <a href="#">
          <li className="list-item">Çocuk
          <NavbarSubLinks titles={KidData}/>
          </li>
        </a>
        <a href="#">
          <li className="list-item">H&M HOME
          <NavbarSubLinks titles={HomeData}/>
          </li>
        </a>
        <a href="#">
          <li className="list-item">Spor
          <NavbarSubLinks titles={SportData}/>
          </li>
        </a>
        <a href="#">
          <li className="list-item">İndirim
          <NavbarSubLinks titles={DiscountData}/>
          </li>
        </a>
        <a href="#">
          <li className="list-item">Sürdürülebilirlik
          <NavbarSubLinks titles={SustainabilityData}/>
          </li>
        </a>
      </ul>
      <NavbarHelper />
    </div>
  );
};

export default NavBar;
