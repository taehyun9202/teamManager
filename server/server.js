const express = require("express");
const cors = require("cors");
const port = 8000;
const db_name = "teammanagerDB"
const app = express();

app.use(cors());
app.use(express.json());

require("./config/mongoose")(db_name);
require("./routes/Players.routes")(app);


app.listen(port, ()=> console.log(`Listening on port ${port}`))