import { Box, Card, CardContent, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
// import "https://images.pexels.com/photos/16124569/pexels-photo-16124569/free-photo-of-restoran-adam-calismak-gomlek.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const ImageSlider: React.FC = () => {
  const [dragStartX, setDragStartX] = useState(0);
  const [lastPositionX, setLastPositionX] = useState(0);
  // const [firstPositionX, setFirstPositionX] = useState(0);
  const [favList, setFavList] = useState<number[]>([]);
  const [prevScrollLeft, setPrevScrollLeft] = useState(0)
  const [scrollCounter, setScrollCounter] = useState(0)

  const lst = [
    {
      title: "photo1",
      price: 500,
      img: "https://images.pexels.com/photos/16124569/pexels-photo-16124569/free-photo-of-restoran-adam-calismak-gomlek.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "photo2",
      price: 700,
      img: "../src/images/men.png",
    },
    {
      title: "photo1",
      price: 500,
      img: "../src/images/women.png",
    },
    {
      title: "photo2",
      price: 700,
      img: "../src/images/kid.png",
    },
    {
      title: "photo1",
      price: 500,
      img: "../src/images/kid.png",
    },
    {
      title: "photo2",
      price: 700,
      img: "../src/images/home.png",
    },
    {
      title: "photo1",
      price: 500,
      img: "https://images.pexels.com/photos/16124569/pexels-photo-16124569/free-photo-of-restoran-adam-calismak-gomlek.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "photo2",
      price: 700,
      img: "https://images.pexels.com/photos/16124569/pexels-photo-16124569/free-photo-of-restoran-adam-calismak-gomlek.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "photo1",
      price: 500,
      img: "https://images.pexels.com/photos/16124569/pexels-photo-16124569/free-photo-of-restoran-adam-calismak-gomlek.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "photo2",
      price: 700,
      img: "../src/images/divided.png",
    },
    {
      title: "photo2",
      price: 700,
      img: "../src/images/divided.png",
    },
  ];

  const dragImg = new Image(0, 0);

  const handleDragStart = (e: React.DragEvent<HTMLUListElement>) => {
      e.dataTransfer.setDragImage(dragImg, 0, 0);
      setDragStartX(e.pageX);
    setPrevScrollLeft(e.currentTarget.scrollLeft);
      
  };
  

  const breakPoints=[0,1200,2400];

  const handleDragEnd = (e: React.DragEvent<HTMLUListElement>) => {
    e.preventDefault();  
    const endX = e.pageX;
      const { currentTarget } = e;
      if (endX - dragStartX > 200) {
        // currentTarget.scrollLeft = lastPositionX - 1100;
        setScrollCounter((prev)=>(prev-1)%breakPoints.length);
        currentTarget.scrollLeft = breakPoints[scrollCounter];
      } else if (endX - dragStartX < -200) {
        // currentTarget.scrollLeft = lastPositionX + 1100;
        setScrollCounter((prev)=>(prev+1)%breakPoints.length);
        currentTarget.scrollLeft = breakPoints[scrollCounter];

      }else{
        currentTarget.scrollLeft=prevScrollLeft;
      }
      setLastPositionX(currentTarget.scrollLeft);
            console.log(currentTarget.scrollLeft);
  };

  const handleDrag = (e: React.DragEvent<HTMLUListElement>) => {
    if (e.pageX!=0) {
    const dif=e.pageX-dragStartX
    e.currentTarget.scrollLeft=prevScrollLeft-dif;
    }
    e.preventDefault();  

  };

  return (
    <>
      {/* <i
        className="fa-solid fa-chevron-right"
        style={{
          color: "#000000",
          transform: "rotate(180deg)",
          margin: "auto",
          padding: "20px",
        }}
      ></i> */}

      <ul
        id="imageSliderList"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDrag={handleDrag}
        draggable="true"
      >

        {lst.map((value, index) => (
          <li key={index} id={index.toString()} className="sliderListItem">
            <Card sx={{boxShadow:"none",position:"relative"}}>
              <CardMedia
                draggable="false"
                component="img"
                src={value.img}
                sx={{ height: "400px", width: "250px" }}
              />
              
      <img
      src={favList.indexOf(index) == -1 ? "../src/images/icons/fav.png" : "../src/images/icons/favActive.png"}
      onClick={()=>{setFavList((prev)=>[...prev,index]);console.log(favList);
      }}
      draggable="false"
        className="likeButton"
        style={{cursor:"pointer",zIndex:5}}
      />
              <CardContent>{value.price}</CardContent>
            </Card>
          </li>
        ))}

        {/* Right chevron */}
      </ul>
      {/* <i
        className="fa-solid fa-chevron-right"
        style={{ color: "#000000", margin: "auto", padding: "20px" }}
      ></i> */}
    </>
  );
};


export default ImageSlider;
