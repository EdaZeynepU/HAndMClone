import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import BabyData from "../datas/BabyData";
import KidData from "../datas/KidData";
import HomeData from "../datas/HomeData";
import SportData from "../datas/SportData";
import DiscountData from "../datas/Discount";
import SustainabilityData from "../datas/SustainabilityData";
import WomenData from "../datas/WomenData";
import DividedData from "../datas/DividedData";
import MenData from "../datas/MenData";

import logo from "../images/logo.png";
import NavbarHelper from './NavbarHelper';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import SportImg from "../images/sport.png";
import WomenImg from "../images/women.png";
import MenImg from "../images/men.png";
import HomeImg from "../images/home.png";
import DiscountImg from "../images/discount.png";
import SustainabilityImg from "../images/sustainability.png";
import KidImg from "../images/kid.png";
import DividedImg from "../images/divided.png";
import BabyImg from "../images/baby.png";
import { Avatar, ListItemAvatar } from '@mui/material';

  
const navItems = 
{  
  "Kadın":WomenData,
  "Erkek":MenData,
  "Divided":DividedData,
  "Bebek":BabyData,
  "Çocuk":KidData,
  "H&M HOME":HomeData,
  "Spor":SportData,
  "İndirim":DiscountData,
  "Sürdürülebilirlik":SustainabilityData,
};

const navItemsWithImg = 
{  
  "Kadın":WomenImg,
  "Erkek":MenImg,
  "Divided":DividedImg,
  "Bebek":BabyImg,
  "Çocuk":KidImg,
  "H&M HOME":HomeImg,
  "Spor":SportImg,
  "İndirim":DiscountImg,
  "Sürdürülebilirlik":SustainabilityImg,
};


const NavbarSmallScreen: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileOpen2, setMobileOpen2] = React.useState(false);
  const [mobileOpen3, setMobileOpen3] = React.useState(false);
  const [selectedList, setSelectedData] = React.useState(WomenData);
  const [selectedListData, setSelectedDataList] = React.useState(WomenData[1].subtitles);
  const [name, setName] = React.useState("");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleDrawerToggle2 = (selected: React.SetStateAction<{ title: string; subtitles: { subtitle: string; link: string; }[]; }[]> | null) => {
    if (mobileOpen2==true) {
      setMobileOpen2(false);
      setMobileOpen(true);
    }else{
      if (selected!=null) {
      setSelectedData(selected);}
      setMobileOpen2((prevState) => !prevState);
    }
  };
  
  const handleDrawerToggle3 = (selected: { subtitle: string; link: string; }[] | null) => {
    if (mobileOpen3==true) {
      setMobileOpen3(false);
      setMobileOpen2(true);
    }else{
      if (selected!=null) {
        setSelectedDataList(selected);
      }
      setMobileOpen3((prevState) => !prevState);
    }
  };

  const drawer1 = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'start',maxWidth:"800px",width:"55vw",height:"100%", paddingTop:"10px",background:"#faf9f8" }}>
      <List>
        {Object.entries(navItems).map((item) => (
          <ListItem key={item[0]} disablePadding onClick={()=>{
            setName(item[0])
            handleDrawerToggle2(item[1]);
            }}>
              <ListItemAvatar>
                <Avatar src={navItemsWithImg[item[0]]} sx={{ width: 65, height: 65, margin:"10px 5px 10px 40px"}}/>
              </ListItemAvatar>
            <ListItemButton sx={{textAlign: 'start',py:3}}>
              <ListItemText primary={item[0]}  primaryTypographyProps={{ variant: 'h6' }}/>
            </ListItemButton>
            <i className="fa-solid fa-arrow-right fa-xl" style={{ width: 60, height: 60, marginRight:"20px",display:"flex",alignItems:"center"}}></i>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const drawer2 = (
    <Box onClick={()=> handleDrawerToggle2(WomenData)} sx={{ textAlign: 'center',maxWidth:"800px",width:"55vw",height:"100%",background:"#faf9f8" }}>
      <Typography variant="h6" component="div" sx={{ my: 4}}>
      <i className="fa-solid fa-arrow-left" style={{color: "#000000",marginRight:"200px",position:"absolute",left:"10px"}}></i>
        {name}
      </Typography>
      <Divider />
      <List>
        {Object.entries(selectedList).map((item) => (
          <ListItem key={item[0]} disablePadding onClick={() => {
            setName(item[1].title);
            handleDrawerToggle3(item[1].subtitles);
            }}>
            <ListItemButton sx={{ textAlign: 'start' }}>
              <ListItemText primary={item[1].title}  />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const drawer3 = (
    <Box onClick={()=> handleDrawerToggle3(null)} sx={{ textAlign: 'center',maxWidth:"800px",width:"55vw",height:"100%", }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        
        {name}
      </Typography>
      <Divider />
      <List>
        {Object.entries(selectedListData).map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item[1].subtitle} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (
    <Box sx={{ flexGrow: 1,visibility:"hidden", padding:"15px"}} className="navbarSmall">
      <AppBar position="static" sx={{backgroundColor:"#faf9f8",boxShadow:"none"}}>
        <Toolbar variant="dense"  className="navbarSmallInside">
        <Box sx={{
          display:"flex",alignItems: "center"
        }}>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleDrawerToggle}>
          <i className="fa-solid fa-bars" style={{color: "#000000",}} />
          </IconButton>
        <img
          src={logo}
          alt="logo"
          width="54"
          height="36"
          style={{}}
        /> </Box>
        <i className="fa-regular fa-user fa-2xl" style={{color: "#000000",}}></i>
       
        </Toolbar>
      </AppBar>
      <NavbarHelper />
      <Stack>
      <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            // display: { xs: 'block', sm: 'none' },'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            display: { xs: 'block', xl: 'none'}
          }}
        >
          {drawer1}
        </Drawer>
      <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen2}
          onClose={()=>handleDrawerToggle2(null)}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            // display: { xs: 'block', sm: 'none' },'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            display: { xs: 'block', xl: 'none'}
          }}
        >
          {drawer2}
        </Drawer>
        
      <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen3}
          onClose={()=>handleDrawerToggle3(null)}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            // display: { xs: 'block', sm: 'none' },'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            display: { xs: 'block', xl: 'none'}
          }}
        >
          {drawer3}
        </Drawer>
      </Stack>
    </Box>
  );
}

export default NavbarSmallScreen;


