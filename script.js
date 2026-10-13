const urlApi = 'http://localhost:8080/ongs';

// AS 6 ONGs REAIS (Iniciais do sistema)
const ongsIniciais = [
    {
    "nome": "Instituto Caminhos do Saber",
    "descricao": "Oferece reforço escolar, oficinas de leitura, inclusão digital e bolsas de estudo para crianças e adolescentes em situação de vulnerabilidade.",
    "categoria": "Educação",
    "cidade": "São Paulo - SP",
    "imagem": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "metaArrecadacao": 80000,
    "valorArrecadado": 48750
    },
    {
    "nome": "Projeto Patas que Transformam",
    "descricao": "Resgata cães e gatos, realiza tratamentos veterinários, promove castrações e busca lares responsáveis para adoção.",
    "categoria": "Proteção animal",
    "cidade": "Curitiba - PR",
    "imagem": "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "metaArrecadacao": 60000,
    "valorArrecadado": 32120
    },
    {
    "nome": "Instituto Verde Futuro",
    "descricao": "Desenvolve ações de reflorestamento, educação ambiental, reciclagem e recuperação de áreas degradadas.",
    "categoria": "Meio ambiente",
    "cidade": "Belo Horizonte - MG",
    "imagem": "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "metaArrecadacao": 50000,
    "valorArrecadado": 27300
    },
    {
    "nome": "Rede Vida e Saúde",
    "descricao": "Distribui medicamentos, oferece atendimento básico de saúde e promove campanhas de prevenção em comunidades carentes.",
    "categoria": "Saúde",
    "cidade": "Recife - PE",
    "imagem": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "metaArrecadacao": 100000,
    "valorArrecadado": 64200
    },
    {
    "nome": "Casa Recomeço",
    "descricao": "Oferece alimentação, higiene, acolhimento temporário, capacitação profissional e auxílio na reinserção social.",
    "categoria": "Assistência social",
    "cidade": "Rio de Janeiro - RJ",
    "imagem": "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "metaArrecadacao": 120000,
    "valorArrecadado": 75800
    },
    {
    "nome": "Mulheres em Movimento",
    "descricao": "Oferece cursos profissionalizantes, apoio psicológico, orientação jurídica e incentivo ao empreendedorismo para mulheres.",
    "categoria": "Direitos humanos",
    "cidade": "Salvador - BA",
    "imagem": "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "metaArrecadacao": 90000,
    "valorArrecadado": 53600
    }
];

const formatarDinheiro = (valor) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(valor);

async function carregarOngs() {
    const container = document.getElementById('lista-ongs');
    container.innerHTML = '<div class="text-center w-100 py-5"><div class="spinner-border text-principal" role="status"></div><p class="mt-2 text-muted">Carregando causas do banco de dados...</p></div>';

    try {
        const resposta = await fetch(urlApi);
        if (!resposta.ok) throw new Error('Erro ao buscar dados');
        
        const ongs = await resposta.json();
        container.innerHTML = ''; 

        if(ongs.length === 0) {
            container.innerHTML = '<p class="text-center text-muted">Nenhuma causa cadastrada ainda.</p>';
            return;
        }

        ongs.forEach((ong) => {
            const meta = ong.metaArrecadacao || 50000;
            const arrecadado = ong.valorArrecadado || 12500;
            const porcentagem = Math.round((arrecadado / meta) * 100);
            
            const imgUrl = ong.imagem || "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
            const categoria = ong.categoria || "Comunidade";
            const localizacao = ong.bairro ? `${ong.cidade} - ${ong.bairro}` : ong.cidade;

            const cartao = `
                <div class="col-md-6">
                    <div class="card card-ong h-100">
                        <div class="row g-0 h-100">
                            <div class="col-5"><img src="${imgUrl}" class="card-ong-img" alt="${ong.nome}"></div>
                            <div class="col-7">
                                <div class="card-body d-flex flex-column h-100 justify-content-between p-4">
                                    <div>
                                        <span class="badge-categoria mb-2 d-inline-block">${categoria}</span>
                                        <h5 class="card-title fw-bold text-dark fs-5 mb-1">${ong.nome}</h5>
                                        <p class="card-text small text-secondary mb-3"><i class="bi bi-geo-alt-fill text-principal me-1"></i> ${localizacao}</p>
                                        
                                        <div class="mt-3 mb-3">
                                            <div class="d-flex justify-content-between small text-muted mb-1" style="font-size: 0.75rem;">
                                                <span class="fw-bold text-dark">${formatarDinheiro(arrecadado)}</span>
                                                <span>${formatarDinheiro(meta)}</span>
                                            </div>
                                            <div class="progress" style="height: 6px; border-radius: 10px;">
                                                <div class="progress-bar bg-principal" role="progressbar" style="width: ${porcentagem}%"></div>
                                            </div>
                                            <div class="text-end small fw-bold text-principal mt-1" style="font-size: 0.75rem;">${porcentagem}%</div>
                                        </div>
                                    </div>
                                    <button class="btn btn-principal w-100 mt-2" onclick="abrirModalDoacao('${ong.nome}')">
                                        <i class="bi bi-suit-heart me-2"></i>Doar agora
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += cartao;
        });
    } catch (erro) {
        console.error(erro);
        container.innerHTML = '<div class="alert alert-danger w-100 text-center">Erro ao conectar com a API Java. Verifique se o servidor está rodando.</div>';
    }
}

carregarOngs();

let modalDoacao;
function abrirModalDoacao(nomeDestino) {
    if (!modalDoacao) { modalDoacao = new bootstrap.Modal(document.getElementById('doacaoModal')); }
    document.getElementById('titulo-doacao').innerText = 'Apoiar ' + nomeDestino;
    document.getElementById('passo-selecao').classList.remove('d-none');
    document.getElementById('passo-sucesso').classList.add('d-none');
    modalDoacao.show();
}

function destacarBotaoValor(botaoClicado) {
    const botoes = document.querySelectorAll('.btn-valor');
    botoes.forEach(b => b.classList.remove('ativo'));
    botaoClicado.classList.add('ativo');
    document.getElementById('valor-personalizado').value = ''; 
}

function limparBotoesValor() { document.querySelectorAll('.btn-valor').forEach(b => b.classList.remove('ativo')); }

function gerarPix() {
    const botaoPix = document.querySelector('#passo-selecao .btn-principal');
    botaoPix.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Gerando...';
    setTimeout(() => {
        document.getElementById('passo-selecao').classList.add('d-none');
        document.getElementById('passo-sucesso').classList.remove('d-none');
        botaoPix.innerHTML = '<i class="bi bi-qr-code-scan me-2"></i> Gerar PIX Copia e Cola';
    }, 800);
}

// LÓGICA DE LOGIN
document.getElementById('form-login').addEventListener('submit', async function(e) {
    e.preventDefault();
    const alerta = document.getElementById('modal-alerta');
    
    const dadosLogin = {
        email: document.getElementById('login-email').value,
        senha: document.getElementById('login-senha').value
    };

    try {
        const resposta = await fetch(`${urlApi}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dadosLogin)
        });
        
        if (resposta.ok) {
            const ongLogada = await resposta.json();
            alerta.innerHTML = `<div class="alert alert-success">Login aprovado! Bem-vinda, ${ongLogada.nome}.</div>`;
            
            localStorage.setItem('ong_sessao', JSON.stringify(ongLogada));
            
            setTimeout(() => {
                bootstrap.Modal.getInstance(document.getElementById('authModal')).hide();
                document.getElementById('area-botoes-nav').innerHTML = `
                    <span class="text-dark fw-medium align-self-center me-3">Olá, ${ongLogada.nome}</span>
                    <button class="btn btn-outline-danger btn-sm" onclick="localStorage.removeItem('ong_sessao'); location.reload();">Sair</button>
                `;
            }, 1500);
        } else { 
            alerta.innerHTML = '<div class="alert alert-danger">E-mail ou senha incorretos.</div>'; 
        }
    } catch (erro) { 
        alerta.innerHTML = '<div class="alert alert-danger">Servidor fora do ar. Verifique o Java.</div>'; 
    }
});

// LÓGICA DE CADASTRO
document.getElementById('form-cadastro').addEventListener('submit', async function(e) {
    e.preventDefault();
    const alerta = document.getElementById('modal-alerta');
    
    const novaOng = {
        nome: document.getElementById('cad-nome').value,
        cidade: document.getElementById('cad-cidade').value,
        bairro: document.getElementById('cad-bairro').value,
        email: document.getElementById('cad-email').value,
        senha: document.getElementById('cad-senha').value,
        descricao: "Nova instituição cadastrada na plataforma Apoia+. Em breve mais informações.",
        categoria: "Comunidade",
        imagem: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        metaArrecadacao: 50000.0,
        valorArrecadado: 0.0
    };

    try {
        const resposta = await fetch(urlApi, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(novaOng)
        });
        
        if (resposta.ok) {
            alerta.innerHTML = '<div class="alert alert-success">Cadastro realizado com sucesso! Recarregando...</div>';
            setTimeout(() => location.reload(), 2000);
        } else {
            alerta.innerHTML = '<div class="alert alert-warning">Erro ao cadastrar. Verifique os dados.</div>';
        }
    } catch (erro) { 
        alerta.innerHTML = '<div class="alert alert-danger">Erro de rede ao tentar cadastrar.</div>'; 
    }
});