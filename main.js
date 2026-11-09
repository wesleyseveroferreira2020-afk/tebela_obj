
const produtos = [
    {
        nome: "Leão",
        nome_cientifico: "Panthera leo",
        alimentacao: "Carnívoro",
        tempo_medio_de_vida: "10 a 14 anos"
    },
    {
        nome: "Elefante",
        nome_cientifico: "Loxodonta africana",
        alimentacao: "Herbívoro",
        tempo_medio_de_vida: "60 a 70 anos"
    },
    {
        nome: "Girafa",
        nome_cientifico: "Giraffa camelopardalis",
        alimentacao: "Herbívoro",
        tempo_medio_de_vida: "20 a 25 anos"
    },
    {
        nome: "Lobo",
        nome_cientifico: "Canis lupus",
        alimentacao: "Carnívoro",
        tempo_medio_de_vida: "6 a 8 anos"
    },
    {
        nome: "Coelho",
        nome_cientifico: "Oryctolagus cuniculus",
        alimentacao: "Herbívoro",
        tempo_medio_de_vida: "8 a 12 anos"
    },
    {
        nome: "Onça-pintada",
        nome_cientifico: "Panthera onca",
        alimentacao: "Carnívoro",
        tempo_medio_de_vida: "12 a 15 anos"
    },
    {
        nome: "Panda-gigante",
        nome_cientifico: "Ailuropoda melanoleuca",
        alimentacao: "Principalmente bambu",
        tempo_medio_de_vida: "15 a 20 anos"
    },
    {
        nome: "Tartaruga-verde",
        nome_cientifico: "Chelonia mydas",
        alimentacao: "Algas e plantas marinhas",
        tempo_medio_de_vida: "60 a 80 anos"
    },
    {
        nome: "Cavalo",
        nome_cientifico: "Equus ferus caballus",
        alimentacao: "Herbívoro",
        tempo_medio_de_vida: "25 a 30 anos"
    }
];

const corpoTabela = document.getElementById("corpoTabela");

for (let produto of produtos) {
    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.nome_cientifico}</td>
        <td>${produto.alimentacao}</td>
        <td>${produto.tempo_medio_de_vida}</td>
    `;

    corpoTabela.appendChild(linha);
}
