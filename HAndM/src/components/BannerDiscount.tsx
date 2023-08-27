import { Button, Typography } from '@mui/material';
import React from 'react'


const  BannerDiscount = () => {

  return (
    <div className='banner' style={{background:`#f4eddd`, marginTop:30}}>
        <Typography component="div" variant='h4' style={{textAlign:"center",color:"red",fontWeight:"700"}}>
        %10 indirim ister misin? Bugün üye ol 😍
        </Typography>
        <Typography component="div" variant='body2' style={{textAlign:"center",color:"black"}}>
        Özel tekliflerin, fırsatların ve daha fazlasının keyfini çıkarmak için şimdi katıl.
        </Typography>
        <div className="bannerButtons" >
          <a href="#">
            <button style={{background:"transparent",border:"1px solid black"}}>H&M Member ol</button>
            </a>
        </div>

    </div>
  )
}

export default BannerDiscount