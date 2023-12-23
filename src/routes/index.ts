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

router.post("/songs", async (req, res) => {
  const { title, artist, album, year, genre } = req.body;
  console.log(`${title} ${artist} ${album} ${year} ${genre}`);
  const response: QueryResult = await pool.query(
    "INSERT INTO songs (title, artist, album, year, genre) VALUES ($1, $2, $3, $4, $5);",
    [title, artist, album, year, genre]
  );
  response;
  return res.json({
    message: "New song created succesfuly",
    body: {
      song: {
        title,
        artist,
        album,
        year,
        genre,
      },
    },
  });
});

router.patch("/songs/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const { title, artist, album, year, genre } = req.body;
  await pool.query(
    "UPDATE songs SET title = $1, artist = $2, album = $3, year = $4, genre = $5 WHERE id = $6",
    [title, artist, album, year, genre, id]
  );
  return res.json(`User ${id} upadted succesfuly`);
});

export default router;
