# Portfólio Web (React + Vite)

Portfólio de estúdio digital para divulgar a criação de sites, lojas virtuais e sistemas para pequenos negócios. Feito com React 19 e Vite 8, pronto para publicar na Vercel.

**Importante:** os projetos do portfólio são **exemplos demonstrativos** e o número de WhatsApp é **fictício**. Troque antes de divulgar (veja "Antes de publicar").

## Requisitos

- Node.js 20.19+ ou 22.12+ (o arquivo `.nvmrc` indica a versão 22)
- npm 10+

## Comandos

```bash
npm install        # instala as dependências
npm run dev        # servidor de desenvolvimento em http://localhost:5173
npm run build      # gera a versão de produção na pasta dist/
npm run preview    # abre a versão de produção localmente em http://localhost:4173
```

## Antes de publicar

1. **WhatsApp:** abra `src/config/site.js` e troque `whatsappNumber` pelo seu número real (só dígitos, com 55 e DDD, ex.: `5582912345678`). O botão flutuante, o botão do contato e o formulário usam esse valor.
2. **E-mail e Instagram (opcionais):** preencha `email` e `instagram` no mesmo arquivo. Se ficarem vazios, não aparecem no site.
3. **Nome do estúdio:** `name` e `descriptor` em `src/config/site.js`. O título e as descrições de SEO ficam em `index.html`; se mudar o nome, troque lá também.
4. **Projetos:** edite `src/data/projects.js` (instruções no topo do arquivo). Coloque as imagens em `public/projects/`. Quando nenhum projeto for `demo: true`, o aviso de "exemplos" some sozinho.
5. **Serviços e etapas:** `src/data/services.js` e `src/data/process.js`. Revise os textos para refletir o que você realmente oferece.
6. **Imagem de compartilhamento:** `public/og-image.png` (1200x630) é a prévia do link no WhatsApp e nas redes. Troque se quiser outra.

## Estrutura

```
index.html                 SEO básico (title, description, Open Graph, JSON-LD)
vite.config.js             React + geração de robots.txt e sitemap.xml
vercel.json                cabeçalhos de segurança e cache
public/                    favicon e imagem de compartilhamento
src/
  config/site.js           nome, WhatsApp, e-mail, links de navegação
  data/                    projetos, serviços e etapas (conteúdo editável)
  components/              Header, Hero, Portfolio, Services, Process, Contact, QuoteForm...
  hooks/useInView.js       detecta quando uma seção aparece na tela
  styles/global.css        cores, tipografia e botões
```

## Como o formulário funciona

O site não tem servidor. Ao enviar, o formulário valida os campos, monta uma mensagem e abre o WhatsApp com o texto pronto para você receber. Nenhum dado é guardado no site.

## SEO

- `lang="pt-BR"`, título, descrição, canonical, Open Graph, Twitter Card e dados estruturados (JSON-LD).
- `robots.txt` e `sitemap.xml` são gerados no build.
- A URL do site é detectada na Vercel automaticamente. Para usar domínio próprio, defina a variável `VITE_SITE_URL` (veja `.env.example`) nas configurações do projeto na Vercel e faça um novo deploy.

## Publicar na Vercel

1. Envie o projeto para o GitHub (instruções abaixo).
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório `suyane09/portfolio-web`.
3. A Vercel detecta o Vite sozinha: Build Command `npm run build`, Output Directory `dist`. Clique em **Deploy**.

## Enviar para o GitHub

No Git Bash, dentro da pasta do projeto:

```bash
git init
git branch -M main
git remote add origin https://github.com/suyane09/portfolio-web.git
git add .
git commit -m "Portfólio: versão inicial"
git push -u origin main
```

Se o repositório já tiver commits (por exemplo, um README criado pelo GitHub), o `push` será recusado. Nesse caso:

```bash
git pull origin main --allow-unrelated-histories
# resolva conflitos, se houver (normalmente só no README.md)
git push -u origin main
```
