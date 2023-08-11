const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/config");

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();
connectDB();

const contactMeRoute = require("./routes/saveMsg");
const getFormDataRoute = require("./routes/getFormData");

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

app.get("/testing", (req, res) => {
  res.json({ msg: "tesing node server and mongodb connection" });
});

app.use("/contact-me", contactMeRoute);
app.use("/get-formdata", getFormDataRoute);

app.listen(port, (error) => {
  // if(!error) console.log("main--> Server running at port,", port);
  if (!error) console.log(`App listening at http://localhost:${port}`);
  else console.log("Error! ", error);
});
