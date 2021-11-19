import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: "#0d5b49",
    backgroundColor: "#eeeeee",
    height: "auto",
    marginTop: 40,
    marginBottom: -10,
    position: "relative",
    bottom: -10,
    paddingBottom: 20,
    paddingTop: 40,
    
  },
  externalLinksButton: {
    color: 'inherit',
    margin: 0,
    padding: 0,
  },
  internalLinks: {
    textDecoration: 'none',
    color: 'inherit',
    "&:hover": {
      color: "#000",
    }
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