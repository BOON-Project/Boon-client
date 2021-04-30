import React, { useEffect, useState } from "react";
import {getSkills} from "../../helpers/apiCalls"
import {Typography, Box, Button, TextField} from "@material-ui/core"
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from "./styles"

const Search = () =>{
    const [skills, setSkills] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => { 
        console.log('Home is fetching skills');
        const getData = async () => {
            try{
                let skills = await getSkills();
                setSkills(skills.data);
                setLoading(false);
            }
            catch(err){
                console.log(err);
                setLoading(false);
            }
        };
    
        getData();
      }, []);

    const classes = useStyles();
    return(
        <>
       
        <Box pt="2rem"> 
            <Typography variant="h6" color="info"> Explore our tags and search for what you need  </Typography>
        </Box>

        {!loading&&
        <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={skills.map((skill) => skill.name)}
            renderInput={(params) => (
            <TextField {...params} label="freeSolo" margin="normal" variant="outlined" />
            )}
        />
        }

        <Box display="flex">
            <Button size="large" color="primary" variant="outlined" className={classes.tag}>Petsiting</Button>
            <Button size="large" color="primary" variant="outlined" className={classes.tag}>Bricolage</Button>
            <Button size="large" color="primary" variant="outlined" className={classes.tag}>Painting</Button>
            <Button size="large" color="primary" variant="outlined" className={classes.tag}>Massage</Button>
        </Box>

        </> 
    )

}

export default Search;