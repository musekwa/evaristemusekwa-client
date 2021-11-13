import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  root: {
    //  backgroundColor: theme.palette.background.paper,
    //backgroundColor: "#efffff",
    width: "45%",
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
  tabsRoot: {
    textColor: "#0d5b49",
    backgroundColor: "#efffff",
    [theme.breakpoints.down("md")]: {},
  },
  tabsIndicator: {
    backgroundColor: "#0d5b49",
  },
  tabRoot: {
    textTransform: "initial",
    minWidth: "25%",
    fontWeight: theme.typography.fontWeightMedium,
    marginRight: theme.spacing.unit * 4,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#0d5b49",
      opacity: 1,
    },
    "&$tabSelected": {
      color: "#0d5b49",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#0d5b49",
    },

    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing.unit * 0,
      marginLeft: theme.spacing.unit * 0,
      //     fontSize: theme.typography.h6,
      //     fontWeight: theme.typography.fontWeightLight,
    },
    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing.unit * 0,
      marginLeft: theme.spacing.unit * 0,
      //     fontSize: theme.typography.h6,
    },
  },
  primary: {
    color: "#0d5b49",
  },
  tabSelected: {},
  typography: {
    //   padding: theme.spacing.unit * 3,
  },
}));

export default styles;