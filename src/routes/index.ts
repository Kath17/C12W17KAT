import { Router } from "express";
import { pool } from "../database";
import { QueryResult } from "pg";

const router = Router();

router.get("/songs", async (_req, res) => {
  const response: QueryResult = await pool.query("SELECT * FROM songs");
  return res.status(200).end(JSON.stringify(response.rows, null, 2));
});

router.get("/songs/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const response: QueryResult = await pool.query(
    `SELECT * FROM songs WHERE id= ${id}`
  );
  return res.status(200).end(JSON.stringify(response.rows, null, 2));
});

export default router;
