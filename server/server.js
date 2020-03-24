const express = require("express");
const cors = require("cors");
const port = 8000;
const cookieParser = require("cookie-parser");
const db_name = "teammanagerDB"
const app = express();

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());


require("./config/mongoose")(db_name);
require("./routes/Players.routes")(app);


app.listen(port, ()=> console.log(`Listening on port ${port}`))