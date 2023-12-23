CREATE DATABASE songsapi;
CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30),
    artist VARCHAR(20),
    album VARCHAR(20),
    year INTEGER,
    genre VARCHAR(15)
);

INSERT INTO songs (title, artist, album, year, genre)
VALUES
    ('Shape of You', 'Ed Sheeran', '÷ (Divide)', 2017, 'Pop'),
    ('Uptown Funk', 'Mark Ronson', 'Uptown Special', 2014, 'Funk');

