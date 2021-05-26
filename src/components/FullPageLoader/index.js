import useStyles from "./styles";
//styingggggggggggggggggggggg
import { Typography, CircularProgress, Box } from "@material-ui/core";

const FullPageLoader = () => {
    //material ui classes
    const classes = useStyles();

    return (
        <>
            <div className={classes.overlay}>
                <div className='absolute'>
                    <Box
                        display='flex'
                        width={400}
                        height={500}
                        alignItems='center'
                        justifyContent='center'>
                        <CircularProgress className={classes.circle} />
                        <Typography>Loading</Typography>
                    </Box>
                </div>
            </div>
        </>
    );
};
export default FullPageLoader;
