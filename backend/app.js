import express from "express";
import path from "path";
import dotenv from "dotenv";
import morgan from "morgan";

const app = express();

dotenv.config();
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    app.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is runnign.........");
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    color.yellow(
      `Server runnig mode ${process.env.NODE_ENV} in port ${process.env.PORT}`
    )
  );
});
