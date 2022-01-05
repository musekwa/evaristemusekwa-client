import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: "#444",
    backgroundColor: "#eeeeee",
    height: "auto",

    marginBottom: -10,
    position: "relative",
    bottom: -10,
    paddingBottom: 20,
    paddingTop: 40,
  },
  footerInternalLinksContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  footerExternalLinksContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "15px",
  },
  footerExternalLinksButton: {
    color: "inherit",
    margin: 0,
    padding: 0,
  },
  footerInternalLinks: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      color: "#000",
    },
  },

  optional: {
    color: "inherit",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

export default styles;
