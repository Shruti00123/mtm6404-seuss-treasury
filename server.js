
import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

const books = [
  {
    id: 1,
    title: "And to Think That I Saw It on Mulberry Street",
    cover_image: "/images/book-covers/1.jpg"
  },
  {
    id: 2,
    title: "The 500 Hats of Bartholomew Cubbins",
    cover_image: "/images/book-covers/2.jpg"
  },
];

app.get('/api/books', (req, res) => {
  res.json(books);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
