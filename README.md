# Projeto AluraGeek

Este projeto foi desenvolvido como parte de um teste técnico proposto pela **Alura** para avaliar conhecimentos em **HTML**, **CSS**, **JavaScript**, manipulação do **DOM**, e utilização de **JSON Server** para simular uma API REST.

---

## Objetivo do Projeto

Criar uma interface de listagem de produtos que inclua:
- Adicionar novos produtos via formulário (requisição **POST**);
- Renderizar os produtos a partir de uma API simulada (requisição **GET**);
- Excluir produtos da interface (requisição **DELETE**);
- Manipulação do **DOM** para exibir dinamicamente as informações na tela;
- Criação de uma experiência responsiva e amigável ao usuário.

---

## Tecnologias Utilizadas

- **HTML5**: Estrutura do projeto e organização semântica.
- **CSS3**: Estilização responsiva e uso de efeitos como animações ao passar o mouse sobre elementos.
- **JavaScript**: Manipulação do DOM, eventos, e interação com a API.
- **JSON Server**: Simulação de uma API REST para as operações CRUD (Create, Read, Delete).

---

## Funcionalidades Implementadas

1. **Listagem de Produtos:**
   - Os produtos são carregados a partir de uma API fake criada com **JSON Server**.
   - Renderização dinâmica dos produtos na interface utilizando **JavaScript**.

2. **Adicionar Produtos:**
   - Formulário para adicionar novos produtos (nome, valor, imagem, descrição).
   - Ao enviar, o produto é adicionado à API fake (é feito um **POST** para o JSON Server).

3. **Excluir Produtos:**
   - Cada produto possui um botão para excluí-lo.
   - O botão realiza uma requisição **DELETE** para a API, removendo o produto da lista.

4. **Experiência de Usuário:**
   - Estilo responsivo para melhor visualização em dispositivos diferentes.
   - Animação ao passar o mouse sobre os elementos, com elevação e sombreamento.

---

## Configuração do Ambiente

1. Certifique-se de ter o **Node.js** instalado.
2. Instale o **JSON Server** globalmente:
   ```bash
   npm install -g json-server
   ```
3. Na raiz do projeto, crie um arquivo `db.json` com a seguinte estrutura inicial:
   ```json
   {
     "produtos": [
       {
         "id": 1,
         "nome": "Boneco Wader",
         "valor": 60.00,
         "imagem": "assets/wader.png",
         "descricao": "Boneco de 12cm"
       }
     ]
   }
   ```
4. Inicie o servidor JSON Server:
   ```bash
   json-server --watch db.json --port 3000
   ```
5. Acesse a API em `http://localhost:3000/produtos`.

---

## Estrutura do Projeto

```plaintext
/
├── assets/          # Imagens e recursos visuais
├── css/             # Estilizações CSS
├── js/              # Arquivos JavaScript
├── db.json          # Banco de dados simulado com JSON Server
├── index.html       # Arquivo principal do projeto
├── README.md        # Documentação do projeto
```

---

## Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Instale o JSON Server (se ainda não tiver):
   ```bash
   npm install -g json-server
   ```
3. Inicie o JSON Server:
   ```bash
   json-server --watch db.json --port 3000
   ```
4. Abra o arquivo `index.html` em seu navegador ou use uma extensão para Live Server no editor.

---

## Melhorias Futuras

- Implementação de edição de produtos (**PUT** ou **PATCH**).
- Validações mais robustas no formulário de adição.
- Paginação para a lista de produtos.

---

## Conclusão

Este projeto simulou um fluxo de e-commerce utilizando tecnologias front-end e um servidor simulado para a API. Ele demonstra a capacidade de manipular o DOM, interagir com APIs, e criar interfaces responsivas e dinâmicas.

Desenvolvido como parte do treinamento da **Alura**.

---

**Desenvolvedora:** Nicole Garilho

