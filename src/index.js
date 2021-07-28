import 'dotenv/config';
import cors from 'cors';
import express from 'express';
 
const app = express();

const data = [
    {"snapdatetime": "2021/08/21 09:00", "count": 32},
    {"snapdatetime": "2021/08/21 09:30", "count": 50},
    {"snapdatetime": "2021/08/21 10:00", "count": 44},
    {"snapdatetime": "2021/08/21 10:30", "count": 42},
    {"snapdatetime": "2021/08/21 11:00", "count": 32},
    {"snapdatetime": "2021/08/21 11:30", "count": 120},
    {"snapdatetime": "2021/08/21 12:00", "count": 113},
]

app.use(cors());

app.get('/', (req, res) => {
    console.log(data)
    res.send(data);
});
 
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);