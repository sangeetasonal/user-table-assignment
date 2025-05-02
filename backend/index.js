// index.js
import express from 'express';
import cors from 'cors';
import { router as usersRouter } from './routes/users.js';  

const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send(" Server is working!!!!!!");
});

app.use("/api/users", usersRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
