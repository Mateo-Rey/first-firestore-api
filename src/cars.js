import { dbconnect } from "./dbConnect.js";

export function getAllCars(req,res) {
    const db = dbconnect()
    db.collection('cars').get()
    .then(collection => {
        const cars = collection.docs.map(doc => doc.data())
        res.send(cars);
    }) 
    .catch(err => res.status(500).send(err));
}