# PriceScraper

## Estrutura do Projeto
- `api/`: Backend com Express.js
- `crawler/`: Crawler com Crawlee e Playwright
- `db/`: Scripts SQL para o PostgreSQL
- `frontend/`: Frontend com Next.js e Bootstrap

## Como Correr
1. Instale as dependências:
   - Backend: `npm install`
   - Frontend: `cd frontend && npm install`
2. Configure o ficheiro `.env` com as variáveis necessárias.
3. Use Docker: `docker-compose up`
   - Backend: `http://localhost:3000`
   - Frontend: `http://localhost:3001`
4. Ou corra manualmente: `npm run dev`

## Scripts
- `npm run dev`: Corre backend e frontend em modo de desenvolvimento.
- `npm run crawl`: Executa o crawler.