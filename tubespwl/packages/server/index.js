import { PrismaClient } from '@prisma/client';
import  express from 'express'
const  app = express();
const  port = 3000
const prisma  = new PrismaClient()

app.use(express.json())

app.get('/api', async (req, res) => {
    try {
        const result = await prisma.pendaftaran.findMany()
        console.log(result)
        return res.status(200).json(result)
    }catch(err) {
        console.log(err)
        return res.status(500).send("Error")
    }
})

app.post('/api', async (req, res) => {
    if(req.body == null) {
        return res.status(400).send("Data tidak boleh kosong")
    }
    console.log(req.body)
    try {
        const result = await prisma.pendaftaran.create({
            data: req.body
        })
        return res.status(201).json(result)
    }catch(err) {
        console.log(err)
        return res.status(500).send("Server Error")
    }
})

app.get("/:id", async (req, res) => {
    if(req.params.id == null) {
        return res.status(400).send("Id tidak boleh kosong")
    }
    try {

        const result = await prisma.pendaftaran.findFirst({where : {
            id_user : req.params.id
        }})
        
        return res.status(200).json(result)
    }catch(err) {
        return res.status(500).send("Server Error")
    }

})

app.put("/api/:id", async (req,res) => {
    if(req.params.id == null) {
        return res.status(400).send("Id tidak boleh kosong")
    }
    if(req.body == null) {
        return res.status(400).send("Data tidak boleh kosong")
    }
    try {
        const result = await prisma.pendaftaran.update({where : {id_user : parseInt(req.params.id)}, data : req.body})
        
        return res.status(200).json(result)
    }catch(err) {
        console.log(err)
        return res.status(500).send("Server Error")
    }

})

app.delete("/api/:id", async (req,res) => {
    if(req.params.id == null) {
        return res.status(400).send("Id tidak boleh kosong")
    }
    if(req.body == null) {
        return res.status(400).send("Data tidak boleh kosong")
    }

    try {
        const result  = await prisma.pendaftaran.delete({where : { id_user : parseInt(req.params.id)}})

        return res.status(200).json(result)
    }catch(err) {
        console.log(err)
        return res.status(500).send("Server Error")
    }
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})