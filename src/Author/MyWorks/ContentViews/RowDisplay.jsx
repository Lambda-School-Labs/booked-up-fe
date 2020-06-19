import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import EditingButtons from "../EditingButtons";
import ImagePlaceholder from "../../../assets/image-placeholder.png";

const useStyles = makeStyles(theme => ({
  grid: {
    display: "flex",
    justifyContent: "center"
  },
  gridItem: {
    border: "1px solid black",
    margin: "10px",
    borderRadius: "5px",
    backgroundColor: "#c3c5ef"
  },
  placeholderImage: {
    position: "relative",
    backgroundSize: "100% 100%",
    textAlign: "center",
    color: "white",
    height: "100px",
    padding: "2px"
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
    marginBottom: "10px",
    fontStyle: "italic",
    textAlign: "center"
  },
  description: {
    marginTop: "5px",
    textAlign: "center"
  }
}));

export default function RowDisplay(props) {
  const classes = useStyles();

  const imageSet = work => {
    if (work.img_url) {
      return {
        backgroundImage: `url("${work.img_url}")`
      };
    } else {
      return {
        backgroundImage: `url("${ImagePlaceholder}")`
      };
    }
  };
  return (
    <Grid container className={classes.grid} spacing={2}>
      {props.isFull &&
        props.works.map((work, index) => (
          <Grid item xs={2} key={index} className={classes.gridItem}>
            <div style={imageSet(work)} className={classes.placeholderImage}>
              <div className={classes.authorOverlay}>{work.author}</div>
            </div>
            <div className={classes.title}>{work.title}</div>
            <div className={classes.genre}>{work.genre}</div>
            <div className={classes.description}>{work.description}</div>
            <EditingButtons
              book={work.content_url}
              handleDelOpen={props.handleDelOpen}
            />
          </Grid>
        ))}
      {!props.isFull &&
        props.sortFilteredData.map((work, index) => (
          <Grid item xs={2} key={index} className={classes.gridItem}>
            <div style={imageSet(work)} className={classes.placeholderImage}>
              <div className={classes.authorOverlay}>{work.author}</div>
            </div>
            <div className={classes.title}>{work.title}</div>
            <div className={classes.genre}>{work.genre}</div>
            <div className={classes.description}>{work.description}</div>
            <EditingButtons
              book={work.content_url}
              handleDelOpen={props.handleDelOpen}
            />
          </Grid>
        ))}
    </Grid>
  );
}
