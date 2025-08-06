const path = require("path");

exports.dashboard = (req, res) => {
  if (!req.session.user) {
    return res.redirect("/");
  }
  res.sendFile("dashboard.html", { root: "./views" });
};
