import express from 'express';
import { createCar, getAllCars, putCar, } from "./src/cars.js"

const app = express();
const PORT = 3002;
app.use(express.json())
app.get('/cars', getAllCars);
app.post('/cars', createCar)
app.put('/cars/:id',putCar)
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
});
