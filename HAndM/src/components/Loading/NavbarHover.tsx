import { Box, Skeleton } from "@mui/material";
import React from "react";

const NavbarHover = (props: { isCart: boolean }) => {
  return (
    <>
      {props.isCart ? (
        <Box
          className="cart-hover-child"
          sx={{
            width: 350,
            backgroundColor: "white",
            visibility: "hidden",
            height: 400,
            position: "absolute",
            zIndex: "5 !important",
            marginLeft: "-150px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Skeleton variant="rectangular" width={300} height={70} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: 300,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                height: 130,
              }}
            >
              <Skeleton variant="rounded" width={135} height={25} />
              <Skeleton variant="rounded" width={135} height={25} />
              <Skeleton variant="rounded" width={135} height={25} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                height: 130,
              }}
            >
              <Skeleton variant="rounded" width={135} height={25} />
              <Skeleton variant="rounded" width={135} height={25} />
              <Skeleton variant="rounded" width={135} height={25} />
            </Box>
          </Box>
          <Skeleton variant="rectangular" width={300} height={80} />
        </Box>
      ) : (
        <Box
          className="cart-hover-child"
          sx={{
            width: 300,
            backgroundColor: "white",
            visibility: "hidden",
            height: 200,
            position: "absolute",
            zIndex: "5 !important",
            marginLeft: "-150px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "column",
          }}
        ><Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: 250,
            }}
          >
              <Skeleton variant="circular" width={50} height={50} />
                <Box>
              <Skeleton variant="rectangular" width={180} height={20} />
              <Skeleton variant="rectangular" width={180} height={20} sx={{my:"10px"}}/>

                </Box>
          </Box>
          <Skeleton variant="rectangular" width={250} height={15} />
          <Skeleton variant="rectangular" width={250} height={40} />
          
        </Box>
      )}
    </>
  );
};

export default NavbarHover;
