import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import logo from "../images/logo.png";
import { Box, Skeleton, TextField, Typography } from "@mui/material";
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
import { useSelector } from "react-redux";
import { useAppSelector } from "../store";
import NavbarHover from "./Loading/NavbarHover";
// import { store } from "../store";

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

  
  const { cartItems } = useAppSelector((store) => store.cart);

  return (
    <div className="navbar" style={{background:"#faf9f8",position:"relative"}}>
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
          height="81"
          style={{ paddingTop: "30px" }}
        />
        <ul className="rightUpperNav">
          <a href="#">
            <li className="list-item cart-hover" >
              <i className="fa-regular fa-user fa-2xl"></i>Oturum Aç
              <NavbarHover isCart={false}/>
            </li>
          </a>
          <a href="#">
            <li className="list-item">
              <i className="fa-regular fa-heart fa-2xl"></i>Favoriler
            </li>
          </a>
          <a href="#">
            <li className="list-item cart-hover">
              <i className="fa-solid fa-cart-shopping fa-2xl"></i>
              Alışveriş Sepeti ({cartItems.length})
              <NavbarHover isCart={true}/>
            </li>
          </a>
        </ul>
      </div>
      <div>
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
      
      <Box style={{color: "#000000",position:"absolute",right:"10px",top:"160px",display: 'flex', alignItems: 'center',borderBottom:"1px solid black"}}>
      <i className="fa-solid fa-magnifying-glass fa-xl" ></i>
        <input type="text" placeholder="Ürün ara" style={{padding:"10px",border:"none",background:"transparent"}}/>
      </Box>
      </div>
      
      <NavbarHelper />
    </div>
  );
};

export default NavBar;
