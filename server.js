const app = require("./app");
const mongoConnection = require("./database/db");

mongoConnection();

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
