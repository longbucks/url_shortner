const exp = require("express");
const app = exp();

app.get("/", (req, res) => {
  res.send("hello World");
});
app.listen(3000);
