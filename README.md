# ui-clone-reactjs
Recriando a Interface do Discord com ReactJS | UI Clone #5
- LINKS: https://pastebin.com/1RqAXFqi < :root
-      :https://www.figma.com/design/Mnr08FcriAibSOheL0XvrY/Discord-Clone < Figma

----------------
# Não esquecer
- Notas
! Importante
< Código >
----------------


- npx = node = JS interpreter
<npx creat-react-app projeto-nome --template=typescript>
(I) Delete the files > src > index.css, App.test, App.css. logo.svg e setupTests, WebVitals
(II) Clear App.tsx
(III) Clear index.tsx
(IV) <cd projeto-nome> + <npm start>

! Criar estilos globais
    create a styles folder 
    split terminal + <npm add styled-components (library)> 
    <npm add -D @types/styled-components> --> library com tipagem dependente de desenvolvimento (programadores precisam do devDependences) -->
        (1) package-json: foi criada style-components dependencia do projeto (necessário quando o projeto estiver em produção)
        (2) @types = funciona apenas no ambiente de desenvolvimento, para programaçao dependemos dele mas para rodar não precisaremos dele pois rodará no navegador do cliente 
        (3) librarys typescript devem adicionar a tipagem logo depois

(V) src > styles > create "GlobalStyles.ts" in styles folder 
(VII) Import Google Fonts > public > index.html
(VIII) Define GlobalStyles
(IX) Create a Components folder > ComponentFolder > index.tsx[react] + styles.ts[typescript] files 
(X) Coloca a extensão Rocketseat react (snipets > rfc + styled)
(XI) Passar para o App importar Layout

# Ctrl + D > Seleciona palavras idênticas e edita todas.
# Ctrl + A > Seleciona tudo

(XII) Vamos criar os componentes que vão preencher o Layout... (ServerList)
(XIII) Instale React.Icons para importar os icons --> Add NM to gitignore




