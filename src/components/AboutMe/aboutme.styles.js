import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  containerRoot: {
    align: "center",
  },

  paperRoot: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    maxWidth: "50%",
    color: "#444",
    // backgroundColor: "#efffff",

    [theme.breakpoints.down("md")]: {
      maxWidth: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90%",
    },
  },
}));

export default styles;
