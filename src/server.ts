import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./dbconfig.env" });

import app from "./app.js";

const DB =
	process.env.DB?.replace("<PASSWORD>", process.env.DATABASE_PASSWORD || "") ||
	"";

mongoose.connect(DB).then(() => console.log("DB connection successful!"));

//SERVER
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`server listening on port ${PORT}`);
});
