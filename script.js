const mitologias = [
    {
        local: "Greece",
        nome: "Greco-roman Mythology",
        pagina: "greco-romana.html",
        globo: "Imagens/globo-oriente.png",
        top: "35%",
        left: "32%"
    },

    {
        local: "Scandinavia",
        nome: "Norse Mythology",
        pagina: "nordica.html",
        globo: "Imagens/globo-oriente.png",
        top: "13.5%",
        left: "37%"
    },

    {
        local: "Ireland",
        nome: "Celtic Mythology",
        pagina: "celta.html",
        globo: "Imagens/globo-ocidente.png",
        top: "23%",
        left: "65%"
    },

    {
        local: "Egypt",
        nome: "Egyptian Mythology",
        pagina: "egipcia.html",
        globo: "Imagens/globo-oriente.png",
        top: "45%",
        left: "36%"
    },

    {
        local: "India",
        nome: "Hindu Mythology",
        pagina: "hindu.html",
        globo: "Imagens/globo-oriente.png",
        top: "44%",
        left: "74%"
    },

    {
        local: "Japan",
        nome: "Japanese Mythology",
        pagina: "japonesa.html",
        globo: "Imagens/globo-oriente.png",
        top: "45%",
        left: "96%"
    },

    {
        local: "West Africa (Nigeria)",
        nome: "Yoruba Mythology",
        pagina: "ioruba.html",
        globo: "Imagens/globo-ocidente.png",
        top: "51%",
        left: "85%"
    },

    {
        local: "Peru",
        nome: "Inca Mythology",
        pagina: "inca.html",
        globo: "Imagens/globo-ocidente.png",
        top: "60%",
        left: "16%"
    },

    {
        local: "Brazil",
        nome: "Indigenous Brazilian Mythology",
        pagina: "indigena-brasileira.html",
        globo: "Imagens/globo-ocidente.png",
        top: "63%",
        left: "23%"
    },

    {
        local: "Mexico",
        nome: "Aztec Mythology",
        pagina: "asteca.html",
        globo: "Imagens/globo-ocidente.png",
        top: "40%",
        left: "9%"
    },

    {
        local: "Greenland",
        nome: "Inuit Mythology",
        pagina: "inuit.html",
        globo: "Imagens/globo-ocidente.png",
        top: "12%",
        left: "47%"
    },

    {
        local: "Middle East (Jerusalem)",
        nome: "Judeo-Christian Mythology",
        pagina: "judaico-crista.html",
        globo: "Imagens/globo-oriente.png",
        top: "40%",
        left: "43%"
    },

    {
        local: "China",
        nome: "Chinese Mythology",
        pagina: "chinesa.html",
        globo: "Imagens/globo-oriente.png",
        top: "35%",
        left: "85%"
    }
];

let atual = 0;

function atualizarGlobo() {
    const mitologia = mitologias[atual];

    document.getElementById("local").textContent = mitologia.local;
    document.getElementById("mitologia").textContent = mitologia.nome;
    document.getElementById("link-mitologia").href = mitologia.pagina;
    document.getElementById("imagem-globo").src = mitologia.globo;

    const pin = document.querySelector(".pin-globo");

    pin.style.top = mitologia.top;
    pin.style.left = mitologia.left;
}

function proximo() {
    atual++;

    if (atual >= mitologias.length) {
        atual = 0;
    }

    atualizarGlobo();
}

function anterior() {
    atual--;

    if (atual < 0) {
        atual = mitologias.length - 1;
    }

    atualizarGlobo();
}

atualizarGlobo();



const botaoCompartilhar = document.getElementById("compartilhar");

if (botaoCompartilhar) {
    botaoCompartilhar.addEventListener("click", async function (e) {
        e.preventDefault();

        const dados = {
            title: "Origem das Obras Famosas",
            text: "Conheça o site Origem das Obras Famosas!",
            url: window.location.href
        };

        if (navigator.share) {
            try {
                await navigator.share(dados);
            } catch (erro) {
                console.log("Compartilhamento cancelado.");
            }
        } else {
            await navigator.clipboard.writeText(window.location.href);
            alert("Link copiado!");
        }
    });
}