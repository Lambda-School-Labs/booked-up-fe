import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Input, Button, Select, MenuItem, FormControl, InputLabel, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const content_library = [
    {
        ID: 1,
        title: "The Future of Us",
        description: "When the world enters WWWIII a couple has to deal with the downfall of the world and survive it"
    }
]

const useStyles = makeStyles(theme => ({
    searchContainer: {
        padding: "1%"
    },
    formControl: {
        marginLeft: ".5%"
    },
    filter: {
        border: "1px solid black",
        width: "6em",
        paddingLeft: "5%"
    },
    worksContainer: {
        border: "1px solid black",
        width: "95%",
        height: "22.5%",
        margin: "auto",
        padding: 0,
        display: "flex",
        alignItems: "center"
    },
    works: {
        border: "1px solid black",
        width: "20%",
        height: "11.25em"
    },
    title: {
        marginLeft: "2%"
    },
    button: {
        ...theme.typography.estimate,
        padding: ".25em",
        borderRadius: 0,
        
        border: "1px solid black",
        marginLeft: "1%",
        backgroundColor: theme.palette.secondary.main,
        color: "white"
    },
    featuredContainer: {
        width: "80%",
        height: "30%",
        margin: "auto"
    },
    bottomMargin: {
        marginBottom: "3em"
    }
}))


export default function Browse(props) {
    const [works, setWorks] = useState([{id: 0, title: "", description: ""}])
    const [filter, setFilter] = useState("")
    const [value, setValue] = useState("all")
    const classes = useStyles()


    const handleChange = (e) => {
        setValue(e.target.value);
      };
    

    return(
        <>
            <div className={classes.searchContainer}>
                
                <Input placeholder="Search"/>
                <FormControl className={classes.formControl}>
                    <Select
                        labelId="search-filter-label"
                        id="search-filter"
                        className={classes.filter}
                        value={value}
                        onChange={handleChange}
                    >
                        <MenuItem value={"all"}>All</MenuItem>
                        <MenuItem value={"title"}>Title</MenuItem>
                        <MenuItem value={"author"}>Author</MenuItem>
                        <MenuItem value={"genre"}>Genre</MenuItem>
                    </Select>
                </FormControl>
                <Button className={classes.button}>Go</Button>
            </div>
            <h2 className={classes.title}>Featured</h2>
            
            
                <Carousel className={classes.featuredContainer}>
                {content_library.map((cl, i) => (
                    <div key={i} className={classes.works}>
                        <p>{cl.title}</p>
                        <p>{cl.description}</p>
                    </div>
                ))}
                </Carousel>
            
            <h2 className={classes.title}>New Releases</h2>
            
            
            <Carousel indicators={false} className={classes.worksContainer}>
            {content_library.map((cl, i) => (
                <div key={i} className={classes.works}>
                    <p>{cl.title}</p>
                    <p>{cl.description}</p>
                </div>
            ))}
            </Carousel>
            <h2 className={classes.title}>Most Popular</h2>
            
            
            <Carousel indicators={false} className={classes.worksContainer}>
            {content_library.map((cl, i) => (
                <div key={i} className={classes.works}>
                    <p>{cl.title}</p>
                    <p>{cl.description}</p>
                </div>
            ))}
            </Carousel>
            <div className={classes.bottomMargin}></div>
        </>
    )
}