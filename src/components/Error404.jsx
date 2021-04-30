import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const Error404 = () => {
  const history = useHistory();
  return (
    <div>
      <Box
        width='100%'
        height='500px'
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        pt='2rem'>
        <Typography color='error' variant='h5'>
          Error 404 Page not Found{" "}
        </Typography>
        <Box pt='3rem'>
          <Button
            size='large'
            color='primary'
            variant='outlined'
            onClick={() => history.goBack()}>
            Take me back
          </Button>
        </Box>
      </Box>
    </div>
  );
};
export default Error404;
