import React from "react";
import { Stack } from "@material-ui/core";
import { SpinnerCircular } from "spinners-react";

const Loader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <SpinnerCircular color="grey" />
    </Stack>
  );
};

export default Loader;
