import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user";
import { productRouter } from "./routes/product";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/products", productRouter);

mongoose.connect(
  "mongodb+srv://farzicopy08:aman2050@cluster0.ppkdrkq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);
//mongodb+srv://amandhananjay:aman2050@cluster0.ojdiqld.mongodb.net/Cluster0
//mongodb+srv://farzicopy08:<password>@cluster0.ppkdrkq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//mongodb+srv://farzicopy08:<password>@cluster0.ppkdrkq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
app.listen(port, () => console.log("Server started port 3001"));
