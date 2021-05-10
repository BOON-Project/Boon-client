import { useStyles } from "./styles";
import { makeStyles } from "@material-ui/core";

export default makeStyles({
	root: {
		marginTop: "5%",
	},
	card: {
		marginTop: "20px",
		marginRight: "20px",
	},
	userCard: {
		padding: 0,
		margin: 0,
		marginRight: "20px",
		textAlign: "center",
	},

	ratingCard: {
		minHeight: "330px",
	},

	circle: {
		marginLeft: "40px",
	},
	button: {
		width: "100%",
		margin: 0,
		backgroundColor: "#E4B363",
		border: "none",
		padding: "10px",
	},
	tag: {
		margin: "5px 5px 5px 0",
	},
	media: {
		height: 100,
	},
	avatar: {
		width: "100px",
		height: "100px",
	},
	avatarBooners: {
		width: "150px",
		height: "150px",
	},
});
