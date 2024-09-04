import { Box, Typography } from "@mui/material";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <Box className="fixed z-[999] w-full md:px-20 px-10 py-8 flex justify-between" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)",  backdropFilter: "blur(5px)" }}>
      <Box className="cursor-pointer  logo font-bold text-[20px]">NECXIS</Box>
      <Box className="links md:flex font-bold gap-10 hidden">
        {["Services", "About Us", "Insights", "Contact"].map((item, index) => (
          <Typography
            variant="a"
            key={index}
            className="text-md capitalize cursor-pointer font-regular"
          >
            {item}
          </Typography>
        ))}
      </Box>
      <Box className="login hidden md:flex font-bold">Login</Box>
      <Box className="flex md:hidden" >
       <MenuIcon />
        
      </Box>
    </Box>
  );
};

export default Navbar;
