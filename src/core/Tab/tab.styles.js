import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
//   root: {
//     width: "45%",
//     color: "#0d5b49",
//     [theme.breakpoints.down("md")]: {
//       width: "60%",
//     },
//     [theme.breakpoints.down("sm")]: {
//       width: "80%",
//     },
//     [theme.breakpoints.down("xs")]: {
//       width: "100%",
//     },
//   },
  tabsRoot: {
    textColor: "#444",
    backgroundColor: "#eeeeee",
    [theme.breakpoints.down("md")]: {},
  },
  tabsIndicator: {
    backgroundColor: "#444",
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
      color: "#444",
      opacity: 1,
    },
    "&$tabSelected": {
      color: "#444",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#444",
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
//   popularItem: {
//     color: "#0d5b49",
//   },
  tabSelected: {},
  typography: {
    //   padding: theme.spacing.unit * 3,
  },

//   chips: {
//     display: "flex",
//     color: "#0d5b49",
//     flexWrap: "wrap",
//     "& > *": {
//       marginRight: theme.spacing(2),
//       marginTop: theme.spacing(1.5),
//       marginBottom: theme.spacing(1.5),
//     },
//   },

//   chipItem: {},
}));

export default styles;
