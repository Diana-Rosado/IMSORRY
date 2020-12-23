const navbarStyleSheet = {
  navbar: {
    backgroundImage: "linear-gradient(to right, #663CC0, #663CBF, #333399)",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "27px",

    "& ul": {
      flex: 1,
      maxWidth: "50%",
      display: "flex",
      justifyContent: "space-evenly",
      "& li": {
        display: "inline",
        margin: 0,
        padding: 0,
      },
    },
    "& h3": {},
    "& a": {
      color: "white",
      textDecoration: "none",
      fontWeight: "bold",
    },
  },

  home: {
    marginLeft: "50px",
    marginTop: "10px",
  },
};

export default navbarStyleSheet;
