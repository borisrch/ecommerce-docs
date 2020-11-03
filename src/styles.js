import { makeStyles } from "@material-ui/core/styles";

const useContentStyles = makeStyles({
  root: {
    // paddingLeft: "2%",
    // paddingRight: "2%",
    color: "#333",
    "& img": {
      width: "100%",
      textAlign: "center",
      // padding: "5%",
    },
    "& code": {
      backgroundColor: "#edf1fb",
      color: "#1976d2",
      padding: "4px 8px",
      borderRadius: "4px",
      fontFamily: "Consolas",
    },
    "& p": {
      lineHeight: "2.5em",
      textAlign: "justify",
      fontSize: "1rem",
    },
    "& blockquote": {
      backgroundColor: "#E3F2FD",
      marginLeft: "none",
      borderLeft: "3px solid #2196F3",
      color: "#0D47A1",
      "& p": {
        padding: "5px",
        margin: "10px",
        fontSize: "0.825rem",
        letterSpacing: "0.02em",
      },
    },
  },
});

export default useContentStyles;
