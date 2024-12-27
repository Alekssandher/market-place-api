import "reflect-metadata"
import "./helpers/container";

import express, {json} from "express";
import cors from "cors";
import ConnectToMongodb from "database";
import router from "routes";

const app = express();

app.use(json());
app.use(cors());
app.use(router)

ConnectToMongodb.execute();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})

