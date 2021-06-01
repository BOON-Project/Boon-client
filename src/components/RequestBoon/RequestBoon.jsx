import React from "react";
import {
    Box,
    InputLabel,
    Button,
    Select,
    Typography,
    TextField,
} from "@material-ui/core";
import useStyles from "./styles";
import { useForm, Controller } from "react-hook-form";
import { addTask } from "../../helpers/apiCalls";
import { useSelector, useDispatch } from "react-redux";
import { setErrorAction } from "../../store/actions/errorActions";
import { Link, useHistory } from "react-router-dom";
export default function RequestBoon(props) {
    // to go back
    const history = useHistory();

    const { handleSubmit, control } = useForm();

    const classes = useStyles();

    const dispatch = useDispatch();

    const booner = props.location.state.user;

    const boonee = useSelector((state) => state.userReducer.user);

    //Map through skills for dropdown select
    const skillsListSelect = booner.skills.map((skill) => {
        return (
            <>
                <option value={skill.skillID._id}>{skill.skillID.name}</option>
            </>
        );
    });

    const onSubmit = async (data) => {
        let finalData = { ...data, booner: booner._id, boonee: boonee._id };
        let result = await addTask(finalData);
        if (result.error) {
            dispatch(setErrorAction(result.error));
            return;
        }
        alert(`Request sent to ${booner.userName}, let's hope they say yes`);
    };

    return (
        <Box className={classes.main}>
            <Typography variant='h3' color='secondary' className={classes.hero}>
                Request a Boon from {booner.userName}
            </Typography>
            <form
                className={classes.form}
                noValidate
                onSubmit={handleSubmit(onSubmit)}>
                {/* SELECT SKILL */}
                <InputLabel htmlFor='skill' className={classes.label}>
                    Skill
                </InputLabel>
                <Controller
                    name='skill'
                    control={control}
                    defaultValue=''
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => (
                        <Select
                            native
                            name='skill'
                            variant='outlined'
                            fullWidth
                            id='skill'
                            onChange={onChange}
                            value={value}
                            helperText={error ? error.message : null}
                            className={classes.input}>
                            {skillsListSelect}
                        </Select>
                    )}
                    rules={{ required: "skill required" }}></Controller>
                {/*DATE*/}
                <InputLabel htmlFor='date' className={classes.label}>
                    When?
                </InputLabel>
                <Controller
                    name='date'
                    control={control}
                    defaultValue=''
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => (
                        <TextField
                            name='date'
                            type='datetime-local'
                            variant='outlined'
                            fullWidth
                            id='date'
                            onChange={onChange}
                            value={value}
                            helperText={error ? error.message : null}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            className={classes.input}
                        />
                    )}
                    rules={{ required: "date required" }}
                />

                {/*HOW MUCH*/}
                <InputLabel htmlFor='boons' className={classes.label}>
                    How much?
                </InputLabel>
                <Controller
                    name='boons'
                    control={control}
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => (
                        <TextField
                            name='boons'
                            variant='outlined'
                            fullWidt
                            type='number'
                            id='boons'
                            onChange={onChange}
                            value={value}
                            placeholder='20'
                            helperText={error ? error.message : null}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            className={classes.input}
                        />
                    )}
                    rules={{ required: "price required" }}
                />
                {/* MESSAGE */}
                <InputLabel htmlFor='message' className={classes.label}>
                    Message
                </InputLabel>
                <Controller
                    name='message'
                    control={control}
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => (
                        <TextField
                            multiline
                            rows={4}
                            name='message'
                            variant='outlined'
                            fullWidth
                            id='message'
                            placeholder='Hello! I would love to get this boon from you'
                            onChange={onChange}
                            value={value}
                            helperText={error ? error.message : null}
                            maxLenght='400'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            className={classes.input}
                        />
                    )}
                    rules={{ maxLenght: 400 }}
                />
                {/* SUBMIT BUTTON */}
                <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    className={classes.submit}>
                    Request Boon
                </Button>

                {/* second button */}
                <Button
                    component={Link}
                    to='/'
                    color='secondary'
                    variant='contained'
                    onClick={() => history.goBack()}
                    className={classes.button}>
                    Cancel
                </Button>
            </form>
        </Box>
    );
}
