import express from "express";
const app = express();
import indexRoutes from "./routes/index";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(indexRoutes);

app.listen(5500, () => {
  console.log("HOLA");
});
