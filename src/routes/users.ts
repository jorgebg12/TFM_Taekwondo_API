import express from "express";
import { UserRepository } from "../services/database";
import { InsertUserEntry, UserEntry } from "../types";

const router = express.Router();

router.get("/test/getAllUsers", async (_req, res) => {
  const users = await UserRepository.getAllUsers();
  res.send(users);
});
router.post("/login", async (req, res) => {
  const { email, password }: UserEntry = req.body;
  try {
    const user = await UserRepository.login({ email, password });
    res.send(user);
  } catch (e: any) {
    res.status(401).send(e.message);
  }
});
router.post("/register", async (req, res) => {
  console.log(req.body);
  const { email, username, password }: InsertUserEntry = req.body;
  try {
    const id = await UserRepository.create({ email, username, password });
    res.send(id);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
});

// router.post("/logout", (_req, _res) => {});

// router.get("/protected", (_req, _res) => {});

export default router;
