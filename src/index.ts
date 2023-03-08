import { Express } from "express";
import express from "express";
import { Request, Response } from "express";
import { route } from "./routes/routes";
import * as bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";

const app: Express = express();
const port = 4000;

app.use(bodyParser.json())
app.use('/api', route);

const options: cors.CorsOptions = {
  origin: ["*"]
};

app.use(cors(options));

app.use(helmet());

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Welcome to valo-skin-collection</h1>");
});

app.listen(port);
