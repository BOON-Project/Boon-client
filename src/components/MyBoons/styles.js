import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    paper: {
        width: "100%",
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
        height: "75vh",
    },
    box: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "35px",
        backgroundColor: "#E4B363",
    },
    buttonBox: {
        display: "flex",
        justifyContent: "center",
        marginTop: "2rem",
    },
}));
