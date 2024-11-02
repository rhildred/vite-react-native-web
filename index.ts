import express from "express";
import { AddressInfo, Server } from 'net'
import ViteExpress from "vite-express";

const app = express();

app.get("/message", (_, res) => res.send("Hello there from express!"));

declare global {
    var server: Server;
}

if(globalThis.server){
    await globalThis.server.close();
}
  
globalThis.server = ViteExpress.listen(app, 3000, () =>{
    console.log(`Server is listening on ${(globalThis.server.address() as AddressInfo)?.port}`);
});