const container = document.getElementById("pokemon-container");

const pokemonsRaros = [
    { nome: "Mewtwo", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png", descricao: "Um Pokémon criado geneticamente a partir do DNA de Mew. Muito poderoso e altamente inteligente." },
    { nome: "Mew", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png", descricao: "Um Pokémon lendário que se diz conter o DNA de todos os outros Pokémons." },
    { nome: "Lugia", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png", descricao: "Guardião dos mares, capaz de criar tempestades enormes com o bater de suas asas." },
    { nome: "Ho-Oh", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png", descricao: "Pokémon lendário que renasce a partir das chamas do arco-íris. Símbolo da vida eterna." },
    { nome: "Celebi", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/251.png", descricao: "Pokémon guardião do tempo, capaz de viajar para o passado e futuro." },
    { nome: "Rayquaza", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png", descricao: "Dragão lendário que habita a atmosfera e mantém o equilíbrio entre Kyogre e Groudon." },
    { nome: "Groudon", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/383.png", descricao: "Pokémon que representa a terra, capaz de criar continentes e provocar terremotos." },
    { nome: "Kyogre", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/382.png", descricao: "Pokémon que representa o mar, capaz de criar chuvas torrenciais e enchentes." },
    { nome: "Jirachi", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/385.png", descricao: "Pokémon que realiza desejos. Acorda a cada mil anos para conceder desejos." },
    { nome: "Dialga", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/483.png", descricao: "Pokémon lendário que governa o tempo e sua passagem." },
    { nome: "Palkia", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/484.png", descricao: "Pokémon lendário que governa o espaço e pode distorcer dimensões." },
    { nome: "Giratina", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/487.png", descricao: "Pokémon do mundo reverso, associado ao antimundo e à vida após a morte." },
    { nome: "Arceus", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png", descricao: "Pokémon criado como o deus de todos os Pokémons, controla o espaço-tempo e a criação." },
    { nome: "Reshiram", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/643.png", descricao: "Pokémon lendário que simboliza a verdade e controla o fogo." },
    { nome: "Zekrom", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/644.png", descricao: "Pokémon lendário que simboliza o ideal e controla a eletricidade." },
    { nome: "Kyurem", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/646.png", descricao: "Pokémon de gelo que representa o vazio e pode mudar de forma com Reshiram ou Zekrom." },
    { nome: "Xerneas", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/716.png", descricao: "Pokémon lendário que representa a vida e pode compartilhar sua energia vital." },
    { nome: "Yveltal", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/717.png", descricao: "Pokémon lendário que representa a destruição e absorve a força vital ao seu redor." },
    { nome: "Zygarde", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/718.png", descricao: "Pokémon que mantém o equilíbrio do ecossistema, assumindo formas diferentes conforme necessário." },
    { nome: "Solgaleo", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/791.png", descricao: "Pokémon lendário do sol, símbolo da luz e da vida." },
    { nome: "Lunala", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/792.png", descricao: "Pokémon lendário da lua, símbolo do mistério e da noite." },
    { nome: "Necrozma", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/800.png", descricao: "Pokémon de luz que pode absorver energia, assumindo formas poderosas." },
    { nome: "Zacian", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/888.png", descricao: "Pokémon lendário que empunha uma espada e protege Galar com coragem." },
    { nome: "Zamazenta", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/889.png", descricao: "Pokémon lendário que usa seu escudo para proteger Galar e seus aliados." },
    { nome: "Eternatus", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/890.png", descricao: "Pokémon gigante do espaço que exala energia venenosa, ameaçando Galar." }
];

function carregarPokemons() {
    container.innerHTML = "";

    pokemonsRaros.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${p.imagem}" alt="${p.nome}">
            <h2>${p.nome}</h2>
            <p>${p.descricao}</p>
        `;

        container.appendChild(card);
    });
}

carregarPokemons();
