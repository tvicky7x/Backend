const rootDir = require("./path");
const path = require("path");

function servingHtml(pageName) {
  return (req, res, next) => {
    res.sendFile(path.join(rootDir, "view", `${pageName}`));
  };
}

module.exports = servingHtml;
