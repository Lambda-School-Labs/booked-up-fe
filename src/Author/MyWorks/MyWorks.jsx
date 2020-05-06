import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import GridDisplay from "./GridDisplay";
import RowDisplay from "./RowDisplay";
import ColumnDisplay from "./ColumnDisplay";
import { data } from "../../data";
import ViewModuleOutlinedIcon from "@material-ui/icons/ViewModuleOutlined";
import ViewStreamOutlinedIcon from "@material-ui/icons/ViewStreamOutlined";
import ViewWeekOutlinedIcon from "@material-ui/icons/ViewWeekOutlined";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";
import SortOutlinedIcon from "@material-ui/icons/SortOutlined";
import FilterListOutlinedIcon from "@material-ui/icons/FilterListOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import SortDialog from "./SortDialog";
import FilterDialog from "./FilterDialog";

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
    margin: theme.spacing(2, 0),
    marginLeft: "2px",
    marginRight: "2px",
    marginTop: "2px",
    marginBottom: "2px",
    border: `2px solid ${theme.palette.secondary.dark}`,
    borderRadius: "10px"
  },
  leftToolbarButton: {
    marginRight: "25px"
  },
  rightToolbarButtonGroup: {
    backgroundColor: theme.palette.secondary.light,
    marginRight: "25px",
    paddingTop: "2px"
  },
  rightButtonGroup: {
    backgroundColor: theme.palette.secondary.light,
    marginRight: "25px"
  },
  searchGroup: {
    display: "flex",
    alignItems: "center",
    textAlign: "middle",
    marginLeft: "100px"
  },
  searchBar: {
    marginLeft: "10px",
    marginBottom: "5px"
  },
  contentArea: {
    marginTop: "35px",
    marginLeft: "35px",
    marginRight: "35px"
  },
  iconButton: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  }
}));

export default function MyWorks(props) {
  const [users, setUsers] = useState(data);
  const [selected, setSelected] = useState("grid");
  const [sortClicked, setSortClicked] = useState(false);
  const [filterClicked, setFilterClicked] = useState(false);

  const handleSelect = (event, selected) => {
    setSelected(selected);
  };

  const handleSort = () => {
    setSortClicked(true);
  };

  const handleFilter = () => {
    setFilterClicked(true);
  };

  const handleSortClose = value => {
    setSortClicked(false);

    let sortedData = users.author_works;

    if (value !== null) {
      switch (value) {
        case "Title: A to Z": {
          sortedData = users.author_works.sort(function(a, b) {
            if (a.title < b.title) return -1;
            else if (a.title > b.title) return 1;
            return 0;
          });
          return;
        }
        case "Title: Z to A": {
          sortedData = users.author_works.sort(function(a, b) {
            if (a.title < b.title) return 1;
            else if (a.title > b.title) return -1;
            return 0;
          });
          return;
        }
        case "Author: A to Z": {
          sortedData = users.author_works.sort(function(a, b) {
            if (a.author < b.author) return -1;
            else if (a.author > b.author) return 1;
            return 0;
          });
          return;
        }
        case "Author: Z to A": {
          sortedData = users.author_works.sort(function(a, b) {
            if (a.author < b.author) return 1;
            else if (a.author > b.author) return -1;
            return 0;
          });
          return;
        }
        case "Genre: A to Z": {
          sortedData = users.author_works.sort(function(a, b) {
            if (a.genre < b.genre) return -1;
            else if (a.genre > b.genre) return 1;
            return 0;
          });
          return;
        }
        case "Genre: Z to A": {
          sortedData = users.author_works.sort(function(a, b) {
            if (a.genre < b.genre) return 1;
            else if (a.genre > b.genre) return -1;
            return 0;
          });
          return;
        }
        case "Popularity": {
          console.log(`NL: MyWorks.js: handleSortClose: value=${value}`);
          return;
        }
        default:
          return;
      }

      setUsers({ author_works: sortedData });
    }
  };

  const handleFilterClose = value => {
    setFilterClicked(false);
  };

  const classes = useStyles();

  return (
    <>
      {sortClicked === true && (
        <SortDialog
          handleSortClose={handleSortClose}
          sortClicked={sortClicked}
        />
      )}
      {filterClicked === true && (
        <FilterDialog
          handleFilterClose={handleFilterClose}
          filterClicked={filterClicked}
        />
      )}
      <div className={classes.toolbar}>
        <div className={classes.leftToolbarButton}>
          <Tooltip title="Upload New Work">
            <IconButton className={classes.iconButton}>
              <PublishOutlinedIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className={classes.rightToolbarButtonGroup}>
          <ToggleButtonGroup
            value={selected}
            exclusive
            className={classes.rightButtonGroup}
            onChange={handleSelect}
            aria-label="Text Alignment"
          >
            <Tooltip title="Grid">
              <ToggleButton
                value="grid"
                className={classes.iconButton}
                aria-label="grid"
              >
                <ViewModuleOutlinedIcon />
              </ToggleButton>
            </Tooltip>
            <Tooltip title="Row">
              <ToggleButton
                value="row"
                className={classes.iconButton}
                aria-label="row"
              >
                <ViewWeekOutlinedIcon />
              </ToggleButton>
            </Tooltip>
            <Tooltip title="Column">
              <ToggleButton
                value="column"
                className={classes.iconButton}
                aria-label="column"
              >
                <ViewStreamOutlinedIcon />
              </ToggleButton>
            </Tooltip>
          </ToggleButtonGroup>
        </div>
        <ButtonGroup>
          <Tooltip title="Sort">
            <IconButton onClick={handleSort} className={classes.iconButton}>
              <SortOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Filter">
            <IconButton onClick={handleFilter} className={classes.iconButton}>
              <FilterListOutlinedIcon />
            </IconButton>
          </Tooltip>
        </ButtonGroup>
        <div className={classes.searchGroup}>
          <SearchOutlinedIcon />
          <TextField id="search" className={classes.searchBar} label="Search" />
        </div>
      </div>
      <div className={classes.contentArea}>
        {selected === "grid" && (
          <GridDisplay authorWorks={users.author_works} />
        )}
        {selected === "row" && <RowDisplay authorWorks={users.author_works} />}
        {selected === "column" && (
          <ColumnDisplay authorWorks={users.author_works} />
        )}
      </div>
    </>
  );
}
