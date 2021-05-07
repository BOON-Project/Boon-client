import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const Error404 = () => {
  const history = useHistory();
  return (
    <div>
      <Box
        width='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        pt='2rem'>
        <img height='600px' src='./images/Error.png' alt='Error' mt='10rem' />
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
