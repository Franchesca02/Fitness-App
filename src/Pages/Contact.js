import {
  Box,
  Button,
  Stack,
  TextareaAutosize,
  Typography,
} from "@material-ui/core";
import React from "react";

const Contact = () => {
  return (
    <Box sx={{ paddingTop: "30px" }} style={{ margin: "0 auto", width: "60%" }}>
      <Typography
        style={{
          width: "370px",
          color: "#4d4f4f",
          fontSize: "20px",
          marginTop: "30px",
          marginBottom: "25px",
          fontWeight: "400",
        }}
      >
        Please, do not hesitate to send a feedback to help improve the quality
        of work. Thank you!
      </Typography>
      <TextareaAutosize
        placeholder="Send a Feedback"
        sx={{ mt: { lg: "40px" } }}
        mt="40px"
        style={{
          width: "280px",
          height: "100px",
          backgroundColor: "#faf8f7",
          boderRadius: "14px",
          padding: "20px",
          border: "1px #faf8f7 solid ",
          fontSize: "18px",
        }}
      ></TextareaAutosize>
      <Stack sx={{ mt: "15px" }}>
        <Button
          sx={{
            bgcolor: "#FF2324",
            color: "#fff",
            textTransform: "none",
            width: { lg: "85px", xs: "65px" },
            height: "30px",
            // position: "absolute",
            // right: "0px",
            fontSize: { lg: "14px", xs: "10px" },
          }}
        >
          Submit
        </Button>
      </Stack>
      <Typography
        sx={{ fontSize: "24px", color: "#3b3a3a", marginTop: "25px" }}
      >
        You can also reach out to me directly via:
      </Typography>
      <Typography
        sx={{ fontSize: "16px", color: "#3b3a3a", marginTop: "10px" }}
      >
        Email: ihuoma.franchesca@gmail.com
      </Typography>
      <Typography
        sx={{ fontSize: "16px", color: "#3b3a3a", marginTop: "10px" }}
      >
        Phone: +234-9057-237-173
      </Typography>
    </Box>
  );
};

export default Contact;
