import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import EditingButtons from "../EditingButtons";

const useStyles = makeStyles(theme => ({
  grid: {
    display: "flex",
    justifyContent: "center"
  },
  gridItem: {
    border: "1px solid black",
    margin: "10px",
    borderRadius: "5px",
    backgroundColor: "#c3c5ef",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  placeholderImage: {
    position: "relative",
    backgroundColor: "grey",
    textAlign: "center",
    color: "white",
    height: "100px",
    padding: "2px",
    display: "flex",
    justifyContent: "center"
  },
  authorOverlay: {
    position: "absolute",
    margin: "2px",
    bottom: "0",
    width: "100%"
  },
  title: {
    marginTop: "5px",
    fontWeight: "bold",
    textAlign: "center"
  },
  genre: {
    marginTop: "10px",
    fontStyle: "italic",
    textAlign: "center"
  },
  description: {
    marginTop: "5px",
    textAlign: "center",
    marginRight: "10px"
  }
}));

export default function ColumnDisplay(props) {
  const [works] = useState(props.authorWorks);
  const classes = useStyles();

  return (
    <Grid container className={classes.grid} spacing={2}>
      {works.map(work => (
        <>
          <Grid item xs={12} className={classes.gridItem}>
            <div className={classes.placeholderImage}>
              Placeholder Image
              <Grid item xs={6} sm={3} className={classes.authorOverlay}>
                {work.author}
              </Grid>
            </div>
            <Grid item xs={6} sm={3} className={classes.title}>
              {work.title}
            </Grid>
            <Grid item xs={6} sm={3} className={classes.genre}>
              {work.genre}
            </Grid>
            <Grid item xs={6} sm={3} className={classes.description}>
              {work.description}
            </Grid>
            <EditingButtons />
          </Grid>
        </>
      ))}
    </Grid>
  );
}