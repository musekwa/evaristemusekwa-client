import { Button } from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles";

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 20,
    color: "#444",
    padding: "6px 12px",
    lineHeight: 1.5,
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
      //   backgroundColor: "#C4C4C4",
      // borderColor: "#444",
      color: "#444",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      //   backgroundColor: "#C4C4C4",
      // borderColor: "#444",
    },
    "&:focus": {
      //     boxShadow: "0 0 0 0.2rem rgba(30, 130, 76, 1)",
    },
  },
})(Button);

export default BootstrapButton
