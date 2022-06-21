const notes = require("./data/notes");
const dotenv = require("dotenv");
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandeler } = require("./middlewares/errorMiddleware");
const adiminRoutes=require('./routes/adminRoutes')

const app = express();
dotenv.config();
connectDB()
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Api is running");
});
app.get("/api/notes", (req, res) => {
  res.json(notes);
});
app.use("/api/users", userRoutes);
app.use('/adminHome',adiminRoutes)

app.use(notFound)
app.use(errorHandeler)
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on PORT ${PORT}`));
