const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const port = process.env.PORT || 4000;
const { sequelize } = require("./models");
const cookieParser = require("cookie-parser");

dotenv.config();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", require("./routes/authRouter.js"));
app.use("/api/task", require("./routes/taskRouter.js"));

app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
  await sequelize.authenticate();
  console.log("Database connected!");
});
