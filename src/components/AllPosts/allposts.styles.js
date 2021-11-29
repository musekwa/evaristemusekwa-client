import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  item: {
    color: "#0d5b49",
    display: "flex",
    justifyContent: "center",
  },

  leftSide: {
    marginRight: "15px",
    marginTop: "25px",
    marginLeft: 0,
    textAlign: "center",
    border: "1px solid",
    width: "20%",
    [theme.breakpoints.down("md")]: {
      width: "15%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "10%",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  rightSide: {
    marginLeft: "15px",
    marginTop: "25px",
    marginRight: 0,
    textAlign: "center",
    border: "1px solid",
    width: "20%",
    [theme.breakpoints.down("md")]: {
      width: "10%",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  allpostTitle: {
    border: "1px solid",
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

  dates: {
    width: "100%",
    // [theme.breakpoints.down("md")]: {
    //   width: "100%",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   width: "100%",
    // },
    // [theme.breakpoints.down("xs")]: {
    //   width: "100%",
    // },
  },

  paper: {
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    color: "#0d5b49",
    width: "100%",
    // [theme.breakpoints.down("md")]: {
    //   width: "80%",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   width: "80%",
    // },
    // [theme.breakpoints.down("xs")]: {
    //   width: "100%",
    // },
  },

  chips: {
    display: "flex",
    color: "#0d5b49",
    flexWrap: "wrap",
    // margin: theme.spacing(4),
    "& > *": {
      //   margin: theme.spacing(2),
      //     marginTop: theme.spacing(1.5),
      //     marginBottom: theme.spacing(1.5),
    },
  },

  title: {
    "&:hover": {
      textDecoration: "underline",
    },
  },

  tags: {
    width: "22%",
    [theme.breakpoints.down("md")]: {
      width: "18%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "0%",
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      width: "0%",
    },
  },
}));

export default styles;
