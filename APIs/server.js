import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import multer from 'multer';
import PDFParser from 'pdf2json';

const prisma = new PrismaClient()
const upload = multer(); // Configuração básica do multer
const app = express();
const corsOptions = {
    origin: 'http://colocar-o-front-end.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,// Permite cookies
    allowedHeaders: ['Content-Type', 'Authorization'], // Adicione outros headers conforme necessário
};

app.use(cors(corsOptions));
app.use(express.json());
app.listen(3000);




//planos
app.post('/planos', async (req, res) => {
    await prisma.plan.create ({
        data: {
            name: req.body.name
        }
    })

    res.status(201).json({ message: 'Plano adicionado com sucesso!'})
})


//criar usuario
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

//ver usuario
app.get('/usuarios', async (req, res) => {
    const users = await prisma.user.findMany()//o findmany vai buscar as informações e mostrar para a gente

    res.status(200).json(users)
})

//editar usuario
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

//deletar usuario
app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: 'Usuario deletado com sucesso!'})
})

//tratamemto de dados para candidatos não ativos ainda
app.post('/upload', upload.single('file'), async (req, res) => {
    const dataBuffer = req.file.buffer; // O buffer do arquivo PDF

    try {
        const text = await extractTextFromPdf(dataBuffer); // Extrair texto do PDF

        // Usar uma expressão regular para encontrar o primeiro número de inscrição de 8 dígitos
        const regex = /(\d{8})/;
        const match = text.match(regex);

        if (!match) {
            return res.status(400).send('Nenhum número de inscrição encontrado no PDF.');
        }

        // Encontrar a posição do número de inscrição e obter o texto a partir dele
        const startIndex = match.index; // Posição do primeiro número de inscrição
        const recordsText = text.substring(startIndex).trim();
        const lines = recordsText.split('/'); // Divide os registros por barras

        // Processa cada registro
        for (const line of lines) {
            const fields = line.split(',').map(field => field.trim()); // Divide os dados por vírgulas
            
            if (fields.length === 5) { // Verifica se tem todos os campos
                const [numeroInscricao, nome, nota1, nota2, nota3] = fields;

                // Cria um novo registro no banco de dados
                await prisma.candidato.create({
                    data: {
                        nome,
                        numeroInscricao,
                        nota1: parseFloat(nota1), // Converte as notas para float
                        nota2: parseFloat(nota2),
                        nota3: parseFloat(nota3),
                        concursoId: req.body.concursoId
                    },
                });
            }
        }

        res.send('Registros processados com sucesso!');
    } catch (error) {
        console.error('Erro ao processar o PDF:', error);
        res.status(500).send('Erro ao processar o PDF');
    } finally {
        await prisma.$disconnect(); // Desconectar do Prisma
    }
});

// Função para extrair texto de um PDF usando pdf2json
async function extractTextFromPdf(dataBuffer) {
    return new Promise((resolve, reject) => {
        const pdfParser = new PDFParser();
        pdfParser.on('pdfParser_dataError', err => reject(err));
        pdfParser.on('pdfParser_dataReady', pdfData => {
            const text = pdfParser.getRawTextContent();
            resolve(text);
        });
        pdfParser.parseBuffer(dataBuffer);
    });
}

//deletar um candidato
app.delete('/upload/:id', async (req, res) => {
    await prisma.candidato.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: 'Usuario deletado com sucesso!'})
})

//ver candidato
app.get('/upload', async (req, res) => {
    const candidatos = await prisma.candidato.findMany();//o findmany vai buscar as informações e mostrar para a gente

    res.status(200).json(candidatos)
})

//criar concursos
app.post('/concursos', async (req, res) => {
    await prisma.concurso.create ({
        data: {
            name: req.body.name
        }
    })

    res.status(201).json(req.body)
})

//ver concursos
app.get('/concursos', async (req, res) => {
    const concursos = await prisma.concurso.findMany();//o findmany vai buscar as informações e mostrar para a gente

    res.status(200).json(concursos)
})

//mandar arquivo do que é mais cobrado no concurso
app.post('/estudos', upload.single('file'), async (req, res) => {
    const file = req.file;

    if (!file || !concursoId) {
        return res.status(400).send('Arquivo e id do concurso são obrigatórios.');
    }

    // Defina o caminho completo para onde você deseja armazenar o arquivo
    const filePath = path.join(__dirname, 'uploads', file.filename);

    try {
        const estudo = await prisma.estudar.create({
            data: {
                file: filePath, // Salva o caminho do arquivo PDF
                concursoId: req.body.concursoId,
            },
        });
        res.status(201).json(estudo);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao salvar os dados.');
    }
});

//ver os arquivos do que é mais cobrado no concurso
app.get('/estudos/concurso/:concursoId', async (req, res) => {
    const { concursoId } = req.params;

    try {
        const estudos = await prisma.estudar.findMany({
            where: {
                concursoId: concursoId, // Filtra os estudos pelo ID do concurso
            },
        });

        if (!estudos || estudos.length === 0) {
            return res.status(404).send('Nenhum arquivo encontrado para este concurso.');
        }

        res.json(estudos); // Retorna a lista de estudos (arquivos)
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar os dados.');
    }
});

app.put('/estudos/:id', async (req, res) => {
    const { concursoId, file } = req.body; // Obter dados do corpo da requisição

    try {
        // Atualiza os dados do estudo
        const updatedEstudo = await prisma.estudar.update({
            where: {
                id: req.params.id, // ID do estudo a ser atualizado
            },
            data: {
                concursoId: concursoId, // Atualiza o ID do concurso
                file: file, // Atualiza o nome do arquivo
            },
        });

        res.status(200).json(updatedEstudo); // Retorna o estudo atualizado
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao atualizar os dados.');
    }
});

//criar parcerias
app.post('/parcerias', async (req, res) => {
    await prisma.parceria.create({
        data: {
            name : req.body.name
        }
    })

    res.status(201).json(req.body)
})

// Rota para contar parcerias de forma numerica
app.get('/parcerias/count', async (req, res) => {
    try {
        const count = await prisma.parceria.count();
        res.json({ count });
    } catch (error) {
        console.error('Erro ao contar parcerias:', error);
        res.status(500).json({ error: 'Erro ao contar parcerias' });
    }
});

/*
const count = await prisma.parceria.count();:

Esta linha utiliza o Prisma para contar o número de entradas na tabela parceria do banco de dados. 

prisma.parceria.count() é uma chamada assíncrona que retorna a contagem de registros na tabela.
*/

app.post('/especialistas', async (req, res) => {
    await prisma.especialistas.create({
        data: {
            name: req.body.name
        }
    })

    res.status(201).json(req.body)
})


// Rota para contar parcerias de forma numerica
app.get('/especialistas/count', async (req, res) => {
    try {
        const count = await prisma.especialistas.count();
        res.json({ count });
    } catch (error) {
        console.error('Erro ao contar especialistas:', error);
        res.status(500).json({ error: 'Erro ao contar especialistas' });
    }
});