import React from 'react'
import MagazineHelper from './MagazineHelper'
import Magazine0 from "../images/magazine0.png";
import Magazine1 from "../images/magazine1.png";
import Magazine2 from "../images/magazine2.png";
import { Typography } from '@mui/material';

function Magazine() {
  return (
    <div className='magazineBanner'>
        <Typography variant='h3' style={{fontWeight:700}}>MAGAZINE</Typography>
    <Typography variant='body1' >A WORLD OF INSPIRATION</Typography>
    <a href='#' style={{textDecoration:"underline",padding:"15px"}} >READ H&M MAGAZINE</a>

        <MagazineHelper  imageList={[Magazine0,Magazine1,Magazine2]}/>
    </div>
  )
}

export default Magazine