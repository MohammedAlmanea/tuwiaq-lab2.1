import express, { Request, Response } from 'express';
import User from './types/user.type';
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(express.json());

const port = 5500;

let users: User[] = [];

app.get('/users', (req: Request, res: Response) => {
  res.send(users);
});

app.post('/users', (req: Request, res: Response) => {
  const newUser = req.body as User;
  newUser.id = uuidv4();

  users.push({
    id: newUser.id,
    name: newUser.name,
    password: newUser.password,
  });
  res.send(users);
});

app.get('/', (req, res) => {
  res.redirect('/users');
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
