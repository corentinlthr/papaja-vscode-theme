import papajaPurple from "./papaja-purple.js";
// import scheme2023Light from "./2023-light.js";
import papajaBlue from "./papaja-blue.js";
import template from "./template.js";
import fs from "fs";

let file = null;

file = JSON.stringify(template(papajaBlue), null, 4);
fs.writeFileSync("themes/Papaja-Blue.json", file);

file = JSON.stringify(template(papajaPurple), null, 4);
fs.writeFileSync("themes/Papaja-Purple.json", file);

// file = JSON.stringify(template(scheme2023Light), null, 4);
// fs.writeFileSync("themes/2023-light.json", file);
