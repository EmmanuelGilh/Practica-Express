import Express from "express";
import products from "./products.js";


const app = Express();
const port = 3000;




app.get("/", (req, res) =>{
// res.send("Hello World");
    res.json(products)
} )




app.listen(port, () => console.log('Listening on Port' + port))