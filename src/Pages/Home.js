import React, { useState } from "react";
import { Box } from "@material-ui/core";
import HeadBanner from "../Components/HeadBanner";
import SearchExercises from "../Components/SearchExercises";
import Exercises from "../Components/Exercises";
const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <Box>
      <HeadBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
