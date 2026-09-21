const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const connectDB = require("./src/config/db.js");
const authRouter = require("./src/routes/authRouter.js");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const serviceRouter = require("./src/routes/serviceRoute.js");
const requestRouter = require("./src/routes/requestRoute.js");
const adminRouter = require("./src/routes/admiRoutes.js");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

// Connect to MongoDB
connectDB();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

const authLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 10,
  message: {
    success: false,
    message: "Too many requests, please try again later.",
  },
});

let PORT = process.env.PORT;

app.use("/api/auth",authLimiter, authRouter);
app.use("/api", serviceRouter);
app.use("/api", requestRouter);
app.use("/api/admin", adminRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
