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

export function createCar(req, res) {
const db = dbconnect();
const newCar = req.body
db.collection('cars').add(newCar)
.then(doc => {
    res.status(201).send({
        success: true,
        id: doc.id
    })
})
.catch(err => res.status(500).send(err))
}

export function putCar(req, res) {
    const { id } = req.params;
    const db =dbconnect();
    const updateCar = req.body
    db.collection('cars').doc(id).set(updateCar, {merge: true})
    .then(doc => {
        res.status(201).send({
            update: true
        })
    })
}