import express from "express";
import { AddressInfo } from 'net'
import ViteExpress from "vite-express";

const app = express();

app.get("/message", (_, res) => res.send("Hello from express!"));

const server = ViteExpress.listen(app, 3000, () =>{
    console.log(`Server is listening on ${(server.address() as AddressInfo)?.port}`);
});