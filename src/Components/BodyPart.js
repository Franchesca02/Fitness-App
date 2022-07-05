import React from "react";
import { Stack, Typography } from "@material-ui/core";
import Icon from "../assets/icons/gym.png";

const bodyParts = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignContent="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        bodyPart === item
          ? {
              borderTop: "4px solid #FF2625",
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
          : {
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
      }
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        className="body-part-icon"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        texttransform="capitalize"
      >
        {" "}
        {item}
      </Typography>
    </Stack>
  );
};

export default bodyParts;
