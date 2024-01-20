import express from "express";

const main = async () => {
  const port = 8000;

  const app = express();
  app.use(express.json());

  app.listen(port, () => console.log(`running on port ${port}!`));
};

main();
