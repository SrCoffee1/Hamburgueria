DOCUMENTAÇÃO DO TRABALHO FINAL DE TI

HOTBURGUERS

João Victor Rocha Carvalho

SENAI

FERRAMENTAS E LINGUAGENS

UTILIZADAS

Visual Studio Code
Firebase
Node.js
HTML
CSS
JavaScripts

PRINCIPAIS DESAFIOS
ENFRENTADOS

Conexões do projeto ao banco de dados do Firebase usando npm;

Estilização das páginas;
Tempo.

PASTAS

Pasta node_modules - Contém todas as dependências do projeto, que são pacotes e
bibliotecas externas instalados por meio do npm (Node Package Manager). Esses
pacotes podem incluir frameworks, bibliotecas de JavaScript, ferramentas de build e

outras dependências necessárias para o funcionamento do projeto. O conteúdo da
pasta não deve ser alterado manualmente, pois as dependências são gerenciadas
através do arquivo package.json, e a pasta é gerada automaticamente quando o projeto
é iniciado ou quando novas dependências são instaladas;

Pasta public - Esta pasta armazena todos os arquivos estáticos que podem ser
acessados diretamente pelos usuários por meio do navegador. Isso inclui imagens,
fontes, arquivos CSS e JavaScript compilados, e outros recursos que precisam ser
servidos diretamente ao cliente. O servidor web usa essa pasta para fornecer os
arquivos solicitados pelos usuários. Qualquer arquivo colocado nesta pasta estará
disponível sem a necessidade de processamento adicional, garantindo uma forma
eficiente de entregar recursos estáticos ao navegador;

Pasta images - Guarda todas as imagens do site, como logotipos, banners e fotos de
produtos. Elas são usadas para compor a parte visual das páginas;

Pasta javascripts - Contém os arquivos JavaScript responsáveis pela funcionalidade
dinâmica do site, como interações do usuário, validação de formulários e manipulação
de eventos.

Pasta stylesheets - Armazena os arquivos CSS que definem a aparência do site,
incluindo cores, fontes, layout e animações. A estilização é configurada aqui para
tornar o site visualmente atrativo e bem organizado.

Pasta views - Contém os arquivos de template que definem a estrutura das páginas
HTML. Nessa pasta ficam os templates das páginas do site, que são renderizados no
servidor com dados dinâmicos.

OUTROS ARQUIVOS

app.js - Configura um servidor web utilizando o framework Express. Ele define
duas rotas: a rota principal (/), que renderiza o template index.ejs, e a rota de
cadastro (/signup), que renderiza o template signup.ejs. O servidor é
configurado para rodar na porta 3000 e exibe uma mensagem no console

indicando que está funcionando corretamente. Além disso, o Express é
configurado para usar o mecanismo de visualização EJS, permitindo a
renderização dinâmica de páginas HTML.
