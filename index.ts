import express from 'express';
import serverless from 'serverless-http';

const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from Express on AWS Lambda!' });
  });

// const port = 3000;

// app.listen(port, () => {
// console.log(`Sever running on port: ${port}`);
// });

export const handler = serverless(app);

module.exports.handler = serverless(app);