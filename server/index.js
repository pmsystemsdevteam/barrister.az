import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
const { Schema } = mongoose;

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

const HoemExamPartSchema = new Schema({
    icon: String,
    name: String,
    comment: String,
});
const HomeExam = mongoose.model('HomeExam', HoemExamPartSchema);


app.get('/exampart1', async (req, res) => {
    const data = await HomeExam.find({})
    res.send(data)
})

app.get('/exampart1/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = await HomeExam.findById(id).exec();
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)

    }
})

app.delete('/exampart1/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = await HomeExam.findByIdAndDelete(id).exec();
        res.status(200).send("Deleted Product")
    } catch (error) {
        res.status(404).send("Not Deleted product")

    }
})

app.post('/exampart1', async (req, res) => {
    try {
        const data = new HomeExam(req.body)
        await data.save()
        res.status(200).send("Deleted Product")
    } catch (error) {
        res.status(404).send("Not Deleted product")

    }
})

mongoose.connect('mongodb+srv://AliIsmayil:ali123@cluster0.tzldidp.mongodb.net/')
    .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})