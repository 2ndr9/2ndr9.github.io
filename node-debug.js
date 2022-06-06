const path = require("path");

console.log("__dirname", __dirname);

try {
  console.log("path.resolve", path.resolve("./"));
} catch {}
