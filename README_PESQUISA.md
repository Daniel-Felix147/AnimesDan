# Sistema de Pesquisa - Site de Animes

## Funcionalidades Implementadas

### 🔍 Barra de Pesquisa Funcional
- **Localização**: Barra de pesquisa na navbar do site
- **Funcionamento**: Digite qualquer termo e pressione Enter ou clique em "Buscar"
- **Redirecionamento**: Leva para uma página dedicada de resultados

### 📄 Página de Resultados (search.html)
- **Design Responsivo**: Interface moderna e atrativa
- **Resultados Destacados**: Texto pesquisado é destacado em amarelo
- **Contador de Resultados**: Mostra quantos resultados foram encontrados
- **Sugestões**: Tags clicáveis com termos populares para facilitar a pesquisa

### 🎯 Sistema de Busca Restritiva
- **Busca por Título**: Mostra apenas correspondências exatas no título
- **Busca por Descrição**: Mostra apenas correspondências exatas na descrição
- **Palavras-chave**: Sistema de palavras-chave para correspondências exatas
- **Busca Restritiva**: Mostra apenas resultados que contenham exatamente a palavra pesquisada
- **Sistema de Pontuação**: Ordena resultados por relevância (apenas correspondências exatas)

### 📊 Base de Dados de Conteúdo
O sistema inclui uma base de dados com:
- **Animes Principais**: Naruto, Dragon Ball, One Piece, Attack on Titan, Demon Slayer, Jujutsu Kaisen
- **Personagens**: Informações sobre personagens principais
- **Notícias**: Últimas novidades sobre cada anime
- **Palavras-chave**: Sistema extenso de palavras-chave para cada item

## Como Usar

### 1. Pesquisa Básica
1. Digite um termo na barra de pesquisa (ex: "Naruto")
2. Pressione Enter ou clique em "Buscar"
3. Veja os resultados na página dedicada

### 2. Pesquisa por Palavras-chave
- **Gêneros**: "ninja", "pirata", "demônio"
- **Personagens**: "Naruto", "Goku", "Luffy"
- **Conceitos**: "amizade", "aventura", "poder"

### 3. Sugestões Rápidas
- Use as tags de sugestão na página de resultados
- Clique em qualquer tag para pesquisar automaticamente

## Exemplos de Pesquisa

### ✅ Termos que Funcionam Bem (Correspondências Exatas):
- "Naruto" → Encontra apenas conteúdo que contenha exatamente "Naruto"
- "Dragon Ball" → Mostra apenas conteúdo que contenha exatamente "Dragon Ball"
- "aventuras" → Encontra apenas conteúdo que contenha exatamente "aventuras"
- "ninja" → Mostra apenas conteúdo que contenha exatamente "ninja"
- "demônio" → Encontra apenas conteúdo que contenha exatamente "demônio"

### 🔧 Funcionalidades Técnicas:
- **Busca Case-Insensitive**: Não importa maiúsculas/minúsculas
- **Busca por Múltiplas Palavras**: Separe termos com espaços
- **Destaque de Resultados**: Termos pesquisados aparecem destacados
- **Navegação**: Links funcionais para páginas específicas

## Arquivos Criados/Modificados

### Novos Arquivos:
- `search.html` - Página de resultados de pesquisa
- `search.js` - Lógica JavaScript para funcionalidade de pesquisa
- `README_PESQUISA.md` - Este arquivo de documentação

### Arquivos Modificados:
- `index.html` - Adicionada funcionalidade à barra de pesquisa existente

## Personalização

### Adicionar Novo Conteúdo:
Para adicionar novos itens pesquisáveis, edite o array `searchDatabase` em `search.js`:

```javascript
{
    title: "Título do Conteúdo",
    description: "Descrição detalhada",
    image: "imagem.jpg",
    link: "pagina.html#secao",
    keywords: ["palavra1", "palavra2", "palavra3"]
}
```

### Ajustar Relevância:
Modifique os valores de pontuação na função `searchContent()`:
- Título: +10 pontos
- Descrição: +5 pontos  
- Palavras-chave: +3 pontos
- Correspondência parcial: +1-2 pontos

## Suporte

O sistema está totalmente funcional e pronto para uso. Para dúvidas ou melhorias, consulte o código fonte ou entre em contato.
