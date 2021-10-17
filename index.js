import express from "express";
import mongoose from "mongoose";
import router from "./router.js";

const PORT = 5000;
const BD_URL = 'mongodb+srv://user:user@cluster0.mzbhb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express();

app.use(express.json());
app.use('/api', router);

async function startApp() {
  try {
    await mongoose.connect(BD_URL, { useUnifiedTopology: true, useNewUrlParser: true });
    app.listen(PORT, () => console.log(`сервер запущен на порту ${PORT}`));
  }
  catch (e) {
    console.log(e);
  }
}

startApp();
