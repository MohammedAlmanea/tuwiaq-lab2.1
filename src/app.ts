import express, { Request, Response } from 'express';

const app = express();
const port = 5500;

type User = {
  name: string;
  password: string;
};

let user1: User = { name: 'Mohammed', password: '123' };
let user2: User = { name: 'Abdullah', password: '321' };

let users: User[] = [user1, user2];


app.get('/users', (req: Request, res: Response) => {
  res.send(users);
});

app.get('/', (req, res) => {
  res.redirect('/users');
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
