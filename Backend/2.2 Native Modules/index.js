const fs = require("fs");

// fs.writeFile("message.txt", "Hello, World!", (err) => {
//     if (err) throw err;
//         console.log("The File has been saved!");
// });

fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data); // Added .toString() to print readable content
});
