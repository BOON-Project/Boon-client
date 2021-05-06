import React from "react";
import { useSelector } from "react-redux";
import {
	Typography,
	Box,
	Card,
	Button,
	Grid,
	Avatar,
	CardContent,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles";

const TopRatedBoons = () => {
	const classes = useStyles();

	const tasks = useSelector((state) => state.tasksReducer);

	const sortedTasks = tasks
		.filter((task) => task.rating > 0)
		.sort((a, b) => b.rating - a.rating)
		.slice(0, 4);
	console.log("sorted", sortedTasks);

	// GRID
	return (
		<>
			<Box my={8} display="flex" alignItems="center">
				<Typography variant="h2" color="primary">
					Top Rated Boons
				</Typography>
			</Box>
			<Grid container spacing={1}>
				{sortedTasks.map((task) => {
					const rating = task.rating;
					return (
						<Grid item xs={12} md={6}>
							<Card className={classes.ratingCard} elevation={8} p={2}>
								{/* NAMES RATING AND SKILL CONTAINER */}
								<CardContent>
									<Typography>
										<b>Bonee:</b> {task.boonee.userName}
									</Typography>
									<Typography>
										<b>Boner:</b> {task.booner.userName}
									</Typography>
									{/* RATING */}
									<Box my={1}>
										<Rating name="read-only" value={rating} readOnly />
									</Box>
									{/* SKILL */}
									<Box mb={1}>
										<Button
											size="small"
											color="info"
											variant="outlined"
											className={classes.tag}
										>
											{task.skill.name}
										</Button>
									</Box>
									{/* RATING TEXT */}
									<Typography variant="body1" p={4}>
										{task.message}
									</Typography>
								</CardContent>
								{/* </Box> */}
							</Card>
						</Grid>
					);
				})}
			</Grid>
		</>
	);
};

export default TopRatedBoons;
