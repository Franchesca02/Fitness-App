import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@material-ui/core";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      sx={{
        gap: { sm: "60px", xs: "20px" },
        mt: { sm: "12px", xs: "8px" },
        // justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ with: "48px", height: "48px", marginTop: "25px" }}
        />
      </Link>

      <Stack direction="row" gap="40px" fontSize="24" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "2px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>

        <Link
          to="/Contact"
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}
        >
          Contact Us
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
