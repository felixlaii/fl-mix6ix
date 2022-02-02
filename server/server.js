const express = require("express");
const app = express();
const cors = require("cors");
const shopRoute = require("./routes/shopRoute")


require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/", shopRoute);



app.listen(PORT, () => {
    `Server is running on ${PORT}`;
  });
  