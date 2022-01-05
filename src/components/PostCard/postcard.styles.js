import { makeStyles } from "@material-ui/core/styles";


const styles = makeStyles((theme) => ({
  root: {
    width: "45%",
    color: "#444",
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
  chips: {
    display: "flex",
    color: "#444",
    flexWrap: "wrap",
    "& > *": {
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(1.5),
      marginBottom: theme.spacing(1.5),
    },
  },

  chipItem: {},
}));

export default styles;
