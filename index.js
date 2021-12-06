const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

require("./db");//

const app = express();



app.use(cors()); //
app.use(express.json());
const morgan = require("morgan")
app.use(morgan("dev"));//


const todoRouter = require("./routers/routes/todos");
app.use(todoRouter);


dotenv.config();
const PORT = process.env.PORT || 4000;

app.listen(PORT , () => {
  console.log(`server is on ${PORT}`);
});