import express, { Request, Response } from "express"

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World! boss, great to see you')
});

export default app;