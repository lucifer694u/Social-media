import React from "react";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Box, Typography } from "@mui/material";

const LandingPage = () => {
  return (
    <Box className="relative w-full md:px-10 h-screen  pt-1 "  >
      <Typography
        variant="h1"
        className="absolute top-0 left-0 z-[-1] text-9xl opacity-10 pointer-events-none"
      >
        Necxis
      </Typography>
      <Box className="md:flex md:flow-row  items-center  justify-center  md:h-[70%] mt-[10%] md:mt-10% md:mb-20 gap-20" >
        <Box className=" relative   mt-52 md:mt-20 px-10">
        
            <Box className="masker">
              <Box className="w-fit flex items-center">
                <Typography
                  variant="h1"
                  className=" text-[15vw] md:text-[7vw] h-full  md:leading-[7vw] font-bold text-zinc-700 "
                  style={{ fontFamily: "var(--font-Bebas_Neue)" }}
                >
                  Let's Connect <br></br>  In Real <img src="photo-1543060829-a0029874b174.jpg " className="h-[50vh]"  style={{ display: 'inline-block', verticalAlign: 'top', margin: '0 5px' }}/>  Time
                </Typography>
              </Box>
            </Box>
     
        </Box>
        {/* <Box
          className="hidden absolute mt-12 right-60 bottom-0 md:mt-0 lg:flex justify-center items-center fit"
          component="img"
          sx={{
            height: { xs: "auto", md: 500, lg: '70vh' },
            width: { xs: "100%", md: "auto", lg: 'auto'}, 
            maxWidth: "100%", 
          }}
          alt="phone"
          src="eliott-reyna-vfraDDWY0-o-unsplash.jpg"
        /> */}
      </Box>
      {/* <Box className="border-t-[1px] border-zinc-300 mt-32 md:mt-0 md:flex   justify-between py-5 px-10 items-center">
        {[
          "For Public and Private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <Typography
            variant="p"
            className="text-md font-medium tracking-tight mb-10 leading-none flex "
          >
            {item}
          </Typography>
        ))}
        <Box className="start flex items-center gap-5">
          <Box className="px-5 py-2 border-[2px] rounded-full border-black font-light uppercase text-sm">
            start the project
          </Box>
          <Box className="w-10 h-10 lg:flex items-center hidden justify-center border-[1px]  border-black rounded-full">
            <NorthEastIcon />
          </Box>
        </Box>
      </Box> */}
    </Box>
  );
};

export default LandingPage;
