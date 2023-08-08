import {Typography } from '@mui/material'
import React from 'react'
  
interface BannerProps {
    title: string;
    subTitle: string;
    linkTitle: string;
    link: string;
    image: any;
    titleHelp: string;

}

const PhotoBanner: React.FC<BannerProps> = (props) => {
  return (
    // <div style={{background:(props.titleHelp =="bghelp"? "linear-gradient(90deg, rgb(0, 0, 0), rgb(0, 180, 0))":"transparent")}}>
    <div style={{background:"rgb(50,50,50)"}} className='layer'>
        <a href={props.link} className='photoBannerLink' style={{backgroundImage:`url(${props.image})`,backgroundSize: "cover"}} >
            <div className="photoBanner">
                <Typography component="p" variant='h3' fontWeight="700" letterSpacing="0.08em">{props.title}</Typography>
                <Typography component="p">{props.subTitle}</Typography>
                <button>{props.linkTitle}</button>
            </div>
        </a>
    </div>
  )
}

export default PhotoBanner