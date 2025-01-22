import cors from "cors";
import express from "express";
import techniqueRouter from "./routes/techniques";
import usersRouter from "./routes/users";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:4200",
      "https://tfm-jorge-bartol-guillamon.netlify.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

const PORT = process.env.API_PORT || 3000;

//test
app.get("/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.use("/api/techniques", techniqueRouter);
app.use("/user", usersRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
