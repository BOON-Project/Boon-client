import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
        marginTop: "5%",
    },
    paper: {
        margin: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
    },
    imgWrapper: {
        margin: "4rem 3rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        width: "200px",
    },
    avatar: {
        border: "5px solid #329282",
        height: "100%",
        width: "100%",
        alignSelf: "center",
        borderRadius: "1rem",
        "&:hover": { cursor: "pointer" },
    },
    // avatar: {
    //     margin: "4rem 3rem",
    //     borderRadius: "1rem",
    //     backgroundColor: theme.palette.secondary.main,
    // },
    form: {
        width: "100%", // Fix IE 11 issue.
        margin: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    input: { opacity: 0 },
    buttonsBox: {
        margin: "1rem",
        display: "flex",
        justifyContent: "space-between",
    },
}));
