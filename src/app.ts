import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from 'cors'
import path from "path";
import * as swaggerUI from "swagger-ui-express";
import * as YAML from "yamljs";
import ErrorHandler from "./middlewares/ErrorHandler";
import movieRouter from "./routes/MovieRoute";

dotenv.config();
const swaggerPath = path.join(__dirname, "../swagger/app.yaml");
const swaggerDocument = YAML.load(swaggerPath);
const app: Express = express();
const PORT = process.env.PORT || 8000;

// view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

//db
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGODB || "")
  .then(() => console.log(`MongoDB Connected!`))
  .catch((error) => console.log(`Couldn't connect to MongoDB!`, error));

//swagger
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.get("/", (req: Request, res: Response) => {
  res.redirect("/api/movies");
});
//route api
// app.use("/api/movies", movieRouter);
app.use("/movies", movieRouter);

//middleware errorhandler
app.use(ErrorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
