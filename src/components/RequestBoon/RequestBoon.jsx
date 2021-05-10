import React from "react";
import { InputLabel, FormControl, Select, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export default function RequestBoon(props) {
	const user = props.location.state.user;
	console.log(user);
	/* const classes = useStyles();
	const [state, setState] = React.useState({
		age: "",
		name: "hai",
	});

	const handleChange = (event) => {
		const name = event.target.name;
		setState({
			...state,
			[name]: event.target.value,
		});
	}; */

	return (
		<>
			{/* <FormControl variant="outlined" className={classes.formControl}>
				<InputLabel htmlFor="outlined-age-native-simple">Skill</InputLabel>
				<Select
					native
					value={state.age}
					onChange={handleChange}
					label="Skill"
					inputProps={{
						name: "Skill",
						id: "outlined-age-native-simple",
					}}
				>
					<option aria-label="None" value="" />
					<option value={10}>Ten</option>
					<option value={20}>Twenty</option>
					<option value={30}>Thirty</option>
				</Select>
			</FormControl> */}
		</>
	);
}
