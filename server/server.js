const express = require("express");
const app = express();
const cors = require("cors");
const kitRoute = require("./routes/kitRoute")
const merchRoute = require("./routes/merchRoute")



require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/kits", kitRoute);
app.use("/merch", merchRoute);




app.listen(PORT, () => {
    `Server is running on ${PORT}`;
  });
  