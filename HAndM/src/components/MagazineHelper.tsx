import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';

interface MagazineProps {
  imageList: string[];
}

const MagazineHelper: React.FC<MagazineProps> = (props) => {
  return (
    <Grid container spacing={5} style={{justifyContent:"center", paddingTop:"70px",maxWidth:"1200px",width:"95%"}}>
      {props.imageList.map((element, index) => (
        <Grid item xs={12} lg={4}>
        <a href="" key={index} className='magazineCardWrapper'>
        <Card key={index} sx={{ width:{xs:"95%",lg:"100%"} }}>
        <CardMedia
          // sx={{ height: 250 }}
          sx={{
            height:{xs:"50vw",lg:"280px"}
          }}
          image={element}
          title="green iguana"
        />
        <CardContent className='magazineCard'>
          <Typography gutterBottom variant="h6" component="div" style={{marginTop:"15px"}} >
            Lizard
          </Typography>
          <Typography variant="h5" component="div" style={{fontWeight:"700",fontSize:"1.5em"}} >
            Lizards are a widespread group 
          </Typography>
        </CardContent>
        <CardActions  style={{justifyContent:"center",padding:20}}>
          <Typography>Read The Story</Typography>
          <i className="fa-solid fa-arrow-right" style={{color:"#000000"}}></i>
        </CardActions>
      </Card>
        </a>
        </Grid>
      ))}
    </Grid>
  );
};

export default MagazineHelper;