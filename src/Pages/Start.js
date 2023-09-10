import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Box } from "@mui/material";

const Start = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/login"); // Use a callback function here
  };

  return (
    <>
      <Grid container>
        <Grid item lg={4} mx="auto">
          <Box mt={5}>
            <Box style={{ textAlign: "center" }}>
              <h1>Hello Sir</h1>
            </Box>
          </Box>
          <Box mt={2}>
            {" "}
            <button
              style={{ fontWeight: "500", fontSize: "25px" }}
              className="btn btn-primary form-control"
              onClick={handleStartClick}
            >
              START
            </button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Start;
