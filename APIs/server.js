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
app.use(express.urlencoded({ extended: true }));
app.listen(3000);

//criar admin
app.post('/admin', async (req, res) => {
    const admin = await prisma.admin.create({
        data: {
            name: req.body.name,
            password: req.body.password
        }
    })

    res.status(201).json({message: 'admin criado com sucesso!'})
})

//listar admin
app.get('/admin', async (req, res) => {
    const admins = await prisma.admin.findMany()

    res.status(201).json({admins})
})

//deletar um admin
app.delete('/admin/:id', async (req, res) => {
    const deletar = await prisma.admin.delete({
        where: {
            id: req.body.id
        }
    })

    res.status(201).json({message:'admin deletado com sucesso'})
})

//planos
app.post('/planos', async (req, res) => {
    await prisma.plan.create ({
        data: {
            name: req.body.name
        }
    })

    res.status(201).json({ message: 'Plano adicionado com sucesso!'})
});


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
});

//ver usuario
app.get('/usuarios', async (req, res) => {
    const users = await prisma.user.findMany()//o findmany vai buscar as informações e mostrar para a gente

    res.status(200).json(users)
});

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

});

//deletar usuario
app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: 'Usuario deletado com sucesso!'})
});

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
            
            // Verifica se o número de campos está entre 3 e 12 (incluindo a notaTotal)
            if (fields.length >= 3 && fields.length <= 12) {
                const [numeroInscricao, nome, ...notas] = fields;

                // Converte as notas para float
                const parsedNotas = notas.map(nota => parseFloat(nota));

                // A última nota é sempre a notaTotal
                const notaTotal = parsedNotas[parsedNotas.length - 1];

                // Cria um novo registro no banco de dados
                await prisma.candidato.create({
                    data: {
                        nome,
                        numeroInscricao,
                        nota1: parsedNotas[0] || null, // Se existir, senão null
                        nota2: parsedNotas[1] || null, // Se existir, senão null
                        nota3: parsedNotas[2] || null, // Se existir, senão null
                        nota4: parsedNotas[3] || null, // Se existir, senão null
                        nota5: parsedNotas[4] || null, // Se existir, senão null
                        nota6: parsedNotas[5] || null, // Se existir, senão null
                        nota7: parsedNotas[6] || null, // Se existir, senão null
                        nota8: parsedNotas[7] || null, // Se existir, senão null
                        nota9: parsedNotas[8] || null, // Se existir, senão null
                        nota10: parsedNotas[9] || null, // Se existir, senão null
                        nota11: parsedNotas[10] || null, // Se existir, senão null
                        notaTotal, // Armazena a notaTotal
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
});

//ver candidato
app.get('/upload', async (req, res) => {
    const candidatos = await prisma.candidato.findMany();//o findmany vai buscar as informações e mostrar para a gente

    res.status(200).json(candidatos)
});


//criar concursos
app.post('/concursos', async (req, res) => {
    await prisma.concurso.create ({
        data: {
            name: req.body.name
        }
    })

    res.status(201).json(req.body)
});

//ver concursos
app.get('/concursos', async (req, res) => {
    const concursos = await prisma.concurso.findMany();//o findmany vai buscar as informações e mostrar para a gente

    res.status(200).json(concursos)
});

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
app.get('/estudos/concurso/:concursoId/usuario/:usuarioId', async (req, res) => {
    const { concursoId, usuarioId } = req.params;

    try {
        // Verifica se o usuário é um candidato do concurso
        const candidato = await prisma.candidato.findFirst({
            where: {
                concursoId: concursoId,
                usuarioId: usuarioId, // Agora você pode usar o usuarioId diretamente
            },
        });

        if (!candidato) {
            return res.status(403).send('Você não participou deste concurso.');
        }

        // Busca os estudos relacionados ao concurso
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
});

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

//adiciona um especialista
app.post('/especialistas', async (req, res) => {
    await prisma.especialistas.create({
        data: {
            name: req.body.name
        }
    })

    res.status(201).json(req.body)
});


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

//manda uma notificação de contato
app.post('/contato', async (req, res) => {

    try {
        const novoContato = await 
        prisma.contato.create({
            data: {
                titulo: req.body.titulo,
                texto: req.body.texto,
            }
        })

        res.status(201).json({novoContato})
    } catch (error) {
        res.status(500).json({error:'ERRO ao tentar entrar em contato'})

    }
});

//mostra todas as notificações de contato
app.get('/contato', async (req, res) => {
    
    try {
        const contatos = await prisma.contato.findMany()

        res.status(201).json({contatos})
    } catch (error) {
        res.status(500).json({error: 'ERRO ao listar os contatos enviados'})
    }
});

//deleta uma notificaçãode contato
app.delete('/contato/:id', async (req, res) => {
    await prisma.contato.delete({
        where: {
            id: req.params.id
        }
    })
});

//cria um feedback
app.post('/feedbacks', async (req, res) => {
    await prisma.feedback.create({
        data: {
            emoji: req.body.emoji,
            texto: req.body.texto
        }
    })
})

//mostra todos os feedbacks
app.get('/feedbacks', async (req, res) => {

    try {
        const feedbacks = await prisma.feedback.findMany()

        res.status(201).json(feedbacks);
    } catch (error) {
        res.status(500).json({error:'ERRO ao listar feedbacks'})
    }

})

//faz a contagem de todos os acessos
app.use(async (req, res, next) => {  // Middleware para todas as requisições
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;  // Obtém o IP do cliente
    const userAgent = req.headers['user-agent'];  // Obtém o user agent do cliente

    try {
      await prisma.acesso.create({  // Cria um registro na tabela acesso
        data: {
          ip,  // Salva o IP no campo ip
          userAgent,  // Salva o user agent no campo userAgent
        },

    });
    } catch (error) {
      console.error('Erro ao registrar o acesso:', error);  // Loga o erro no console se ocorrer
    }

    next();  // Chama o próximo middleware ou rota
});

//mostra a quantidade de acessos
app.get('/contagem-acessos', async (req, res) => {  // Define uma rota GET no caminho /contagem-acessos
    try {
      const contagem = await prisma.acesso.count();  // Conta o número de registros na tabela acesso
      res.json({ contagem });  // Envia a contagem como resposta JSON
    } catch (error) {
      res.status(500).json({ error: 'Erro ao contar os acessos.' });  // Responde com status 500 e mensagem de erro se ocorrer um problema
    }
});

//FILTRANDO O ACESSO DE RESULTADOS DOS CONCURSOS
// Rota para buscar os concursos em que um usuário específico participou
app.get('/usuario/:usuarioId/concursos', async (req, res) => {
    // Extrai o parâmetro usuarioId da URL
    const { usuarioId } = req.params;

    try {
        // Busca um usuário específico no banco de dados, incluindo suas participações em concursos
        const usuarioComConcursos = await prisma.usuario.findUnique({
            where: { id: parseInt(usuarioId) }, // Converte o usuarioId para um número inteiro
            include: {
                participacoes: {
                    include: {
                        concurso: true, // Inclui os dados do concurso relacionado a cada participação
                    },
                },
            },
        });

        // Verifica se o usuário foi encontrado; se não, retorna um erro 404
        if (!usuarioComConcursos) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }

        // Mapeia as participações para obter apenas os concursos
        const concursos = usuarioComConcursos.participacoes.map(p => p.concurso);
        
        // Retorna a lista de concursos como resposta
        res.json(concursos);
    } catch (error) {
        // Em caso de erro, retorna um erro 500
        res.status(500).json({ error: 'Erro ao buscar concursos.' });
    }
});

//aptos para a proxima etapa
app.get('/aptos', async (req, res) => {
    try {
      // Define os critérios de aprovação
        const notaMinima = 7.0;
        const mediaMinima = 7.0;

      // Obtém todos os candidatos
        const candidatos = await prisma.candidato.findMany();

        const aptos = [];

      // Limpa a tabela de aptos antes de recalcular
        await prisma.aptosParaproximaEtapa.deleteMany();

        for (const candidato of candidatos) {
        // Calcula a média das notas
        const media = (candidato.nota1 + candidato.nota2 + candidato.nota3) / 3;

        // Verifica se o candidato está apto
        if (
            candidato.nota1 >= notaMinima &&
            candidato.nota2 >= notaMinima &&
            candidato.nota3 >= notaMinima &&
            media >= mediaMinima
        ) {
          // Adiciona o candidato à tabela AptosParaproximaEtapa
            const apto = await prisma.aptosParaproximaEtapa.create({
            data: {
                candidatoId: candidato.id,
                concursoId: candidato.concursoId,
                media: media,
            },
            });
            aptos.push(apto);
        }
    }

      // Retorna a lista de candidatos aptos
        res.status(200).json({
        message: 'Candidatos aptos calculados com sucesso.',
        aptos: aptos,
        });
    } catch (error) {
        console.error('Erro ao calcular candidatos aptos:', error);
        res.status(500).json({ error: 'Erro ao calcular candidatos aptos.' });
    } finally {
        await prisma.$disconnect();
    }
});


//adiciona o historico 
app.post('/historico', async (req, res) => {
    const { candidatoId, concursoId, numeroInscricao } = req.body;

    try {
      // Verifica se o candidato existe
        const candidato = await prisma.candidato.findUnique({
        where: { id: candidatoId },
    });

    if (!candidato) {
        return res.status(404).json({ error: 'Candidato não encontrado.' });
    }

      // Verifica se o concurso existe
    const concurso = await prisma.concurso.findUnique({
        where: { id: concursoId },
    });

    if (!concurso) {
        return res.status(404).json({ error: 'Concurso não encontrado.' });
    }

      // Calcula o resultado a partir das notas do candidato
    const resultado = calcularResultado(candidato.nota1, candidato.nota2, candidato.nota3);

      // Cria um novo histórico
    const novoHistorico = await prisma.historico.create({
        data: {
          candidato: { connect: { id: candidatoId } }, // Conecta ao candidato
          concurso: { connect: { id: concursoId } },   // Conecta ao concurso
          numeroInscricao, // Número de inscrição fornecido pelo cliente
          resultado, // Resultado calculado a partir das notas
        },
    });

        res.status(201).json({
        message: 'Histórico criado com sucesso.',
        historico: {
            id: novoHistorico.id,
            numeroInscricao: novoHistorico.numeroInscricao,
            resultado: novoHistorico.resultado,
            candidatoId: novoHistorico.candidatoId,
            concursoId: novoHistorico.concursoId,
        },
    });
    } catch (error) {
        console.error('Erro ao criar histórico:', error);
        res.status(500).json({ error: 'Erro ao criar histórico.' });
    } finally {
        await prisma.$disconnect();
    }
});

  // Função para calcular o resultado a partir das notas
    function calcularResultado(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3; // Cálculo da média das notas
    return media.toFixed(2); // Retorna a média formatada com duas casas decimais
}

//ver o historico
app.get('/historico', async (req, res) => {
    const { numeroInscricao, concursoId } = req.query;

    try {
      // Obtém todos os históricos que correspondem ao número de inscrição e concurso específico
        const resultados = await prisma.historico.findMany({
        where: {
          numeroInscricao, // Número de inscrição a partir da consulta
          concursoId,     // ID do concurso a partir da consulta
        },
        include: {
          candidato: true, // Inclui informações do candidato
          concurso: true,  // Inclui informações do concurso
        },
        orderBy: {
          postadoEm: 'desc', // Ordena do mais recente para o mais antigo
        },
    });

    if (resultados.length === 0) {
        return res.status(404).json({ message: 'Nenhum histórico encontrado.' });
    }

    res.status(200).json({
        message: 'Resultados encontrados com sucesso.',
        resultados,
    });
    } catch (error) {
        console.error('Erro ao buscar histórico:', error);
        res.status(500).json({ error: 'Erro ao buscar histórico.' });
    } finally {
        await prisma.$disconnect();
    }
});

// Criar um novo ranking
app.post('/rankings', async (req, res) => {
    const { candidatoId, notaFinal, concursoId } = req.body;
    try {
        const ranking = await prisma.ranking.create({
            data: {
                candidatoId,
                notaFinal,
                concursoId,
            },
        });
        res.status(201).json(ranking);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar ranking' });
    }
});


  // Listar posição do candidato específico no concurso
app.get('/rankings/:candidatoId/:concursoId', async(req, res) => {
    const { candidatoId, concursoId } = req.params;
    try {
      // Obter todos os rankings do concurso
        const rankings = await prisma.ranking.findMany({
        where: { concursoId },
        orderBy: { notaFinal: 'desc' },
        include: { candidato: true }, // Inclui os dados do candidato
    });

      // Encontrar o ranking do candidato específico
        const candidatoRanking = rankings.find(r => r.candidatoId === candidatoId);
    if (!candidatoRanking) {
        return res.status(404).json({ error: 'Candidato não encontrado no concurso' });
    }

      // Calcular a posição do candidato
        const posicao = rankings.findIndex(r => r.candidatoId === candidatoId) + 1;

        res.json({
        posicao,
        notaFinal: candidatoRanking.notaFinal,
        candidato: candidatoRanking.candidato.nome,
    });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar rankings' });
    }
});

//criar arquivo no edital verticalizado
app.post('/edital', upload.single('file'), async (req, res) => {
    const file = req.file;

    if (!file || !concursoId) {
        return res.status(400).send('Arquivo e id do concurso são obrigatórios.');
    }

    // Defina o caminho completo para onde você deseja armazenar o arquivo
    const filePath = path.join(__dirname, 'uploads', file.filename);

    try {
        const edital = await prisma.editalverticalizado.create({
            data: {
                file: filePath, // Salva o caminho do arquivo PDF
                concursoId: req.body.concursoId,
            },
        });
        res.status(201).json(edital);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao salvar os dados.');
    }
});

//ver os arquivos do edital verticalizado
app.get('/edital/concurso/:concursoId/usuario/:usuarioId', async (req, res) => {
    const { concursoId, usuarioId } = req.params;

    try {
        // Verifica se o usuário é um candidato do concurso
        const candidato = await prisma.candidato.findFirst({
            where: {
                concursoId: concursoId,
                usuarioId: usuarioId, // Agora você pode usar o usuarioId diretamente
            },
        });

        if (!candidato) {
            return res.status(403).send('Você não participou deste concurso.');
        }

        // Busca os estudos relacionados ao concurso
        const edital = await prisma.editalverticalizado.findMany({
            where: {
                concursoId: concursoId, // Filtra os estudos pelo ID do concurso
            },
        });

        if (!edital || edital.length === 0) {
            return res.status(404).send('Nenhum arquivo encontrado para este concurso.');
        }

        res.json(edital); // Retorna a lista de estudos (arquivos)
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar os dados.');
    }
});

//deletar um arquivo
app.delete('/edital/:id', async (req, res) => {
    await prisma.editalverticalizado.delete({
        where: {
            id: req.params.id
        }
    })
})


