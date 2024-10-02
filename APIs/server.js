import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express();

app.use(express.json());
app.listen(3000);


app.post('/usuarios', async (req, res) => {
    await prisma.user.create ({
        data: {
            fullName: req.body.fullName,
            registrationNumber: req.body.registrationNumber,
            username: req.body.username,
            password: req.body.password,
            planId: req.body.planId
        }
    })

    res.status(201).json(req.body)
})

app.get('/usuarios', async (req, res) => {
    const users = await prisma.user.findMany()//o findmany vai buscar as informações e mostrar para a gente

    res.status(200).json(users)
})

app.put('/usuarios/:id', async (req, res) => {
    await prisma.user.update ({
        where: {//quem vou atualizar, por onde
            id:req.params.id
        },
        data: {
            fullName: req.body.fullName,
            registrationNumber: req.body.registrationNumber,
            username: req.body.username,
            password: req.body.password,
        }
    })

    res.status(200).json({ message: 'Usuario Editado com sucesso!'})

})

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: 'Usuario deletado com sucesso!'})
})