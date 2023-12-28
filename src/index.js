import { Console } from "console";
import Express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import indexRoutes from "./routes/index.js";

const app = Express();

const Dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", join(Dirname, "views"));
app.set("view engine", "ejs");
app.use(indexRoutes);
app.use(Express.static(join(Dirname, 'public')))
//app.use(Express.text())
//app.use(Express.json())
//app.use(Express.urlencoded({extended: false}))

//app.post("/user", (req, res) => { console.log(req.body) 
//    res.send('Nuevo usuario creado');

app.listen(3000);
console.log("Server is listening on port", 3000);
