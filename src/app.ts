import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import compression from "compression";

import productRouter from "./routes/productsRoutes.js";

const app = express();

//  DEFAULT MISSLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		credentials: true,
	})
);
app.use(compression());
app.use(cookieParser());

app.use("/v1/products", productRouter);

export default app;
