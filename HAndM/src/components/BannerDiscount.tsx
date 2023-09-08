import { Box, Button, Typography } from '@mui/material';
import {useState} from 'react'


const  BannerDiscount = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
    
    <div className='banner' style={{background:`#f4eddd`, marginTop:30,position:"relative"}} onClick={()=>setIsOpen((prev)=>!prev)}>
        <Box sx={{width:"75%",mx:"auto"}}>
        <Typography component="div" variant='h4' style={{textAlign:"center",color:"red",fontWeight:"700",}}>
        %10 indirim ister misin? Bugün üye ol 😍
        </Typography>
        <Typography component="div" variant='body2' style={{textAlign:"center",color:"black"}}>
        Özel tekliflerin, fırsatların ve daha fazlasının keyfini çıkarmak için şimdi katıl.
        </Typography>
        </Box>
        <Box sx={{visibility:{lg:"visible",xl:"hidden"},width:{xs:"0"}}}>
        <i className={isOpen ? "fa-solid fa-minus fa-2xl":"fa-regular fa-add fa-2xl"} style={{position:"absolute",right:"25px", top:"50%"}}></i>          
        </Box>
        
        <Box className="bannerButtons" sx={{
          visibility:{xs:"hidden",xl:"visible"},height:{xs:0,xl:"fit-content"},width:"fit-content",margin:{xs:0,xl:"25px auto 0 auto"}
        }} >
          <a href="#">
            <button style={{background:"transparent",border:"1px solid black"}}>H&M Member ol</button>
            </a>
        </Box>
    </div>
        <Box sx={{visibility:{xs:isOpen ? "visible":"hidden", xl:"hidden"},height:{xs:isOpen ? "fit-content":0,xl:0},padding:{xs:isOpen ? "5px 40px":0,xl:0},width:"90%",background:"white",maxWidth: "1230px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          
            <p style={{fontSize:"1.2em"}}>H&M Member ol oldu mu</p>
            <i className="fa-solid fa-arrow-right fa-xl" style={{ height: 60,display:"flex",alignItems:"center"}}></i>
        </Box>
    </>
  )
}

export default BannerDiscount