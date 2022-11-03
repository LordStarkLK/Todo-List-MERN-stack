const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// routes
const settingsRouter = require("./routes/taskRouutes");
app.use("/api/v1/settings", settingsRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log("Listening on port "+ PORT));