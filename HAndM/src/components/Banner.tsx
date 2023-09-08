import { Button, Typography } from '@mui/material';
import React from 'react'


interface Link {
    title: string;
    url: string;
}
  
interface BannerProps {
    title: string;
    linkList: { [category: string]: any };
    bgColors: string[];
}

const  Banner: React.FC<BannerProps> = (props) => {
    const linkArray: Link[] = Object.entries(props.linkList).map(([category, url]) => ({
        title: category,
        url: url,
      }));


  return (
    <div className='banner' style={{background:`linear-gradient(135deg, ${props.bgColors[0]}, ${props.bgColors[1]}, ${props.bgColors[1]})`}}>
        <Typography component="div" variant='h4' style={{textAlign:"center",color:"white"}}>
            { props.title }
        </Typography>
        <div className="bannerButtons" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        {linkArray.map((link) => (
          <a href={link.url}>
            <button>{link.title}</button>
            </a>
      ))}
        </div>

    </div>
  )
}

export default Banner