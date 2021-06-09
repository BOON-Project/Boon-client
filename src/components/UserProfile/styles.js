import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    hero: {
        marginLeft: 30,
        marginTop: 10,
        marginBottom: 10,
    },
    skills: {
        width: "100%",
        maxWidth: 450,
    },
    container: {
        margin: theme.spacing(3)
    },
    imgWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "250px",
        margin: "2rem 4rem",
        // width: "220px",
    },
    image: {
        height: "100%",
        alignSelf: "center",
        borderRadius: "1rem",
    },

    root: {
        margin: 50,
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "left",
        color: theme.palette.text.secondary,
        marginBottom: 10,
    },
    icon: {
        fontSize: 15,
    },
}));
