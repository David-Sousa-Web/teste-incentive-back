import express from "express";
import { env } from "./env";
import routes from "./routes";

const main = async () => {
  const port = env.PORT;

  const app = express();
  app.use(express.json());

  app.use(routes);

  app.listen(port, () => console.log(`running on port ${port}!`));
};

main();
