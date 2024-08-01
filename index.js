const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const { sequelize } = require("./models");

dotenv.config();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRouter.js"));

app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
  await sequelize.authenticate();
  console.log("Database connected!");
});
