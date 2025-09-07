// Base de dados de conteúdo pesquisável
const searchDatabase = [
    {
        title: "Naruto Uzumaki",
        description: "Protagonista determinado que sonha em se tornar Hokage. Com seu jutsu clone das sombras e a força da Raposa de Nove Caudas, ele nunca desiste de proteger seus amigos.",
        image: "naruto-shipu.webp",
        link: "personagens.html#naruto",
        keywords: ["naruto", "uzumaki", "hokage", "ninja", "clone", "raposa", "nove", "caudas", "amigos", "proteger", "jutsu", "sombras"]
    },
    {
        title: "Naruto Shippuden",
        description: "Acompanhe a jornada de Naruto Uzumaki e seus amigos ninjas em suas aventuras para proteger a Vila da Folha e o mundo ninja. Uma história épica de amizade, perseverança e crescimento.",
        image: "naruto-shipu.webp",
        link: "personagens.html#naruto",
        keywords: ["naruto", "shippuden", "uzumaki", "ninja", "vila", "folha", "amizade", "perseverança", "crescimento", "aventuras", "jornada", "mundo"]
    },
    {
        title: "Dragon Ball Super",
        description: "Goku e seus amigos enfrentam novas ameaças e desafios cósmicos, explorando poderes e aventuras além do universo após os eventos de Dragon Ball Z.",
        image: "dragon-ball-super.jpg",
        link: "personagens.html#sasuke",
        keywords: ["dragon", "ball", "super", "goku", "amigos", "ameaças", "desafios", "cósmicos", "poderes", "universo", "aventuras", "z"]
    },
    {
        title: "One Piece",
        description: "Siga as aventuras de Monkey Luffy e seus amigos para encontrar o maior tesouro que o lendário pirata já deixou",
        image: "one-piece.jpg",
        link: "personagens.html#sakura",
        keywords: ["one", "piece", "monkey", "luffy", "pirata", "tesouro", "aventuras", "amigos", "lendário", "maior"]
    },
    {
        title: "Attack on Titan",
        description: "Depois que sua cidade é destruída e sua mãe é morta, um jovem promete limpar a terra dos humanóides que levaram a humanidade à beira da extinção.",
        image: "attack-on-titan.jpg",
        link: "personagens.html#kakashi",
        keywords: ["attack", "titan", "cidade", "destruída", "mãe", "jovem", "humanóides", "humanidade", "extinção", "promessa", "terra"]
    },
    {
        title: "Demon Slayer",
        description: "Tanjiro Kamado se torna um caçador de demônios para salvar sua irmã, Nezuko, que foi transformada em um demônio. Ele embarca em uma jornada para encontrar uma cura e vingar sua família.",
        image: "demon-slayer.jpg",
        link: "personagens.html#hinata",
        keywords: ["demon", "slayer", "tanjiro", "kamado", "caçador", "demônios", "irmã", "nezuko", "cura", "vingança", "família", "jornada", "salvar"]
    },
    {
        title: "Jujutsu Kaisen",
        description: "Yuji Itadori é um estudante que se envolve em um ritual sobrenatural e acaba liberando um demônio. Ele se torna um Jujutsu Sorcerer para proteger a humanidade.",
        image: "jujutsu-kaisen.jpg",
        link: "personagens.html#rock-lee",
        keywords: ["jujutsu", "kaisen", "yuji", "itadori", "estudante", "ritual", "sobrenatural", "demônio", "sorcerer", "proteger", "humanidade", "liberando"]
    },
    {
        title: "Últimas Novidades - Naruto Shippuden",
        description: "Episódio mais recente",
        image: "naruto-shippuden2.jpg",
        link: "naruto-shippuden.html",
        keywords: ["naruto", "shippuden", "episódio", "recente", "novidades", "últimas"]
    },
    {
        title: "Últimas Novidades - Dragon Ball Super",
        description: "Nova temporada",
        image: "dragon-ball-super2.jpg",
        link: "dragon-ball-super.html",
        keywords: ["dragon", "ball", "super", "nova", "temporada", "novidades", "últimas"]
    },
    {
        title: "Últimas Novidades - One Piece",
        description: "Últimas notícias",
        image: "one-piece2.jpg",
        link: "one-piece.html",
        keywords: ["one", "piece", "notícias", "últimas", "novidades"]
    },
    {
        title: "Últimas Novidades - Attack on Titan",
        description: "Final da série",
        image: "attack-on-titan2.jpg",
        link: "attack-on-titan.html",
        keywords: ["attack", "titan", "final", "série", "novidades", "últimas"]
    },
    {
        title: "Últimas Novidades - Demon Slayer",
        description: "Nova temporada anunciada",
        image: "demon-slayer2.jpg",
        link: "demon-slayer.html",
        keywords: ["demon", "slayer", "nova", "temporada", "anunciada", "novidades", "últimas"]
    },
    {
        title: "Últimas Novidades - Jujutsu Kaisen",
        description: "Segunda temporada em exibição",
        image: "jujutsu-kaisen2.jpg",
        link: "jujutsu-kaisen.html",
        keywords: ["jujutsu", "kaisen", "segunda", "temporada", "exibição", "novidades", "últimas"]
    }
];

// Função para realizar a pesquisa
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim().toLowerCase();
    
    if (query === '') {
        alert('Por favor, digite algo para pesquisar!');
        return;
    }
    
    // Redirecionar para a página de resultados com o parâmetro de pesquisa
    window.location.href = `search.html?q=${encodeURIComponent(query)}`;
}

// Função para executar pesquisa quando a página carrega
function executeSearch() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    
    if (!query) {
        showNoResults('Nenhum termo de pesquisa fornecido');
        return;
    }
    
    // Atualizar o campo de pesquisa
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = query;
    }
    
    // Mostrar o termo pesquisado
    const searchQueryElement = document.getElementById('searchQuery');
    if (searchQueryElement) {
        searchQueryElement.textContent = `"${query}"`;
    }
    
    // Realizar a pesquisa
    const results = searchContent(query);
    displayResults(results, query);
}

// Função para pesquisar no conteúdo
function searchContent(query) {
    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
    const results = [];
    
    for (const item of searchDatabase) {
        let score = 0;
        let hasExactMatch = false;
        
        // Verificar correspondência EXATA no título
        const titleLower = item.title.toLowerCase();
        for (const term of searchTerms) {
            if (titleLower.includes(term)) {
                score += 10;
                hasExactMatch = true;
            }
        }
        
        // Verificar correspondência EXATA na descrição
        const descLower = item.description.toLowerCase();
        for (const term of searchTerms) {
            if (descLower.includes(term)) {
                score += 5;
                hasExactMatch = true;
            }
        }
        
        // Verificar correspondência EXATA nas palavras-chave
        for (const keyword of item.keywords) {
            for (const term of searchTerms) {
                if (keyword === term || keyword.includes(term)) {
                    score += 3;
                    hasExactMatch = true;
                }
            }
        }
        
        // Só incluir se houver correspondência exata
        if (hasExactMatch && score > 0) {
            results.push({ ...item, score });
        }
    }
    
    // Ordenar por relevância (score)
    return results.sort((a, b) => b.score - a.score);
}

// Função para exibir os resultados
function displayResults(results, query) {
    const resultsContainer = document.getElementById('searchResults');
    const resultsCountElement = document.getElementById('resultsCount');
    
    if (results.length === 0) {
        showNoResults(query);
        return;
    }
    
    // Atualizar contador de resultados
    if (resultsCountElement) {
        resultsCountElement.textContent = `${results.length} resultado${results.length !== 1 ? 's' : ''} encontrado${results.length !== 1 ? 's' : ''}`;
    }
    
    // Gerar HTML dos resultados
    let html = '';
    for (const result of results) {
        html += `
            <div class="result-item">
                <h2 class="result-title">${highlightText(result.title, query)}</h2>
                <p class="result-description">${highlightText(result.description, query)}</p>
                <a href="${result.link}" class="result-link">
                    <i class="fas fa-external-link-alt"></i>
                    Ver mais detalhes
                </a>
            </div>
        `;
    }
    
    resultsContainer.innerHTML = html;
}

// Função para destacar o texto pesquisado
function highlightText(text, query) {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark style="background-color: #ffeb3b; padding: 2px 4px; border-radius: 3px;">$1</mark>');
}

// Função para mostrar quando não há resultados
function showNoResults(query) {
    const resultsContainer = document.getElementById('searchResults');
    const resultsCountElement = document.getElementById('resultsCount');
    
    if (resultsCountElement) {
        resultsCountElement.textContent = '0 resultados encontrados';
    }
    
    resultsContainer.innerHTML = `
        <div class="no-results">
            <i class="fas fa-search"></i>
            <h2>Nenhum resultado encontrado</h2>
            <p>Não encontramos resultados para "${query}".</p>
            <p>Tente usar palavras-chave diferentes ou verifique a ortografia.</p>
        </div>
    `;
}

// Função para pesquisa por sugestão
function searchSuggestion(term) {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = term;
    }
    performSearch();
}

// Função para permitir pesquisa ao pressionar Enter
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
}

// Executar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    executeSearch();
    
    // Adicionar evento de teclado ao campo de pesquisa
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', handleKeyPress);
    }
});
