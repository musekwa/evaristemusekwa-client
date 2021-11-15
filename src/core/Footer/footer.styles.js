import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: "#eeeeee",
    backgroundColor: "#707070",
    height: "auto",
    marginTop: 40,
    marginBottom: -10,
    position: "relative",
    bottom: -10,
    paddingBottom: 20,
    paddingTop: 40,
    
  },
  footer: {},
  optional: {
    color: "inherit",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

export default styles;
