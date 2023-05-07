import express from 'express';
import Connection from './db/config.js';
import cors from 'cors';
import axios from 'axios';
import crypto from './db/crypto.js';
import routes from './Routes/Routes.js';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
// app.post("/add", async (req,resp)=>{
// let crypto= new Crypto(req.body);
// let result= await crypto.save();
//     resp.send(result);
// });
async function getPosts() {
  const tickers = await axios.get("https://api.wazirx.com/api/v2/tickers", {
    params: {
      _limit: 10,
    },
  });
  const response = tickers.data;
  const jsonArray = await JSON.parse(JSON.stringify(response));
  const valuesArray = Object.values(jsonArray);
  const filtered_data = valuesArray.map((obj) => {
    delete obj.quote_unit;
    delete obj.low;
    delete obj.high;
    delete obj.type;
    delete obj.open;
    delete obj.volume;
    delete obj.at;
    return obj;
  });
  for (let i = 0; i < 10; i++) {
    console.log(filtered_data[i]);
  }
  const firstTen = filtered_data.slice(0, 10);
  //crypto.insertMany(firstTen);//
  await crypto.deleteMany({});
 await crypto.insertMany(firstTen);
}

Connection();
app.listen(5000, () => {
  console.log("Application started and Listening on port 5000");
});

getPosts();
app.use('/',routes);
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'index.html'));
});
