/*
Agora vamos criar a funcionalidade de "remover" um carro. Adicione uma nova
coluna na tabela, com um botão de remover.

Ao clicar nesse botão, a linha da tabela deve ser removida.

Faça um pull request no seu repositório, na branch `challenge-31`, e cole
o link do pull request no `console.log` abaixo.

Faça um pull request, também com a branch `challenge-31`, mas no repositório
do curso, para colar o link do pull request do seu repo.
*/

/*
Já temos as funcionalidades de adicionar e remover um carro. Agora, vamos persistir esses dados, 
salvando-os temporariamente na memória de um servidor.

Nesse diretório do `challenge-32` tem uma pasta `server`. É um servidor simples, em NodeJS, para 
que possamos utilizar para salvar as informações dos nossos carros.

Para utilizá-lo, você vai precisar fazer o seguinte:

- Via terminal, acesse o diretório `server`;
- execute o comando `npm install` para instalar as dependências;
- execute `node app.js` para iniciar o servidor.

Ele irá ser executado na porta 3000, que pode ser acessada via browser no endereço: 
`http://localhost:3000`

O seu projeto não precisa estar rodando junto com o servidor. Ele pode estar em outra porta.
As mudanças que você irá precisar fazer no seu projeto são:

- Para listar os carros cadastrados ao carregar o seu projeto, faça um request GET no endereço
`http://localhost:3000/car`
- Para cadastrar um novo carro, faça um POST no endereço `http://localhost:3000/car`, enviando
os seguintes campos:
  - `image` com a URL da imagem do carro;
  - `brandModel`, com a marca e modelo do carro;
  - `year`, com o ano do carro;
  - `plate`, com a placa do carro;
  - `color`, com a cor do carro.

Após enviar o POST, faça um GET no `server` e atualize a tabela para mostrar o novo carro cadastrado.

Crie uma branch `challenge-32` no seu projeto, envie um pull request lá e cole nesse arquivo a URL
do pull request.
*/

/*
Hora de finalizar nosso projeto!

Já temos o cadastro funcionando e persistindo em memória;
Já estamos deletando o carro da tabela (no frontend).

Mas se você perceber, se você recarregar a tela, o carro ainda vai estar lá.
Agora você precisa fazer com que, ao clicar no botão de deletar, o carro seja
removido da tabela e também seja deletado do servidor.

Para fazer isso, você precisa enviar o verbo HTTP "DELETE" para a mesma URL
que você faz o POST para cadastrar o carro:
`http://localhost:3000/car`, só que, ao invés de enviar todas as informações
do carro, como você faz para cadastrar, você deve enviar somente a placa
do carro.

Fazendo isso, ao recarregar a tela, a tabela deve mostrar os carros atualizados.

A lógica do servidor que está criada nesso diretório desse desafio é o mesmo
do desafio anterior, com a diferença que, nesse desafio, nós temos a
implementação da regra para a deleção do carro =)

A regra é a mesma das anteriores: crie uma branch `challenge-33` no seu
repositório do GitHub, e envie o pull request para lá.

Depois, envie um pull request no repositório do curso, colocando no console.log
abaixo a URL do pull request no seu repositório.
*/

(function(DOM) {
  'use strict';
  var app = (function appExecution() {

    return {
      init: function init() {
        this.companyInfo();
        this.initEvents();

      },

      companyInfo: function companyInfo() {
        var ajax = new XMLHttpRequest();
        ajax.open('GET', 'company.json', true);
        ajax.send();
        ajax.addEventListener('readystatechange', this.getCompanyInfo, false);

      },

      getCompanyInfo: function getCompanyInfo() {
        if(this.status === 200 && this.readyState === 4) {
          var data = JSON.parse(this.responseText);
          var $header = new DOM('[data-js="header"]');
          var company = $header.get().children
          company[0].textContent = data.name;
          company[1].textContent = data.phone;

        }
      },

      initEvents: function initEvents() {
        var $form = new DOM('[data-js="car-form"]');
        $form.on('submit', this.handleFormSubmit);

      },

      handleFormSubmit: function handleFormSubmit(event) {
        event.preventDefault();
        var $inputElements = new DOM('[data-js="text-input"]');
        var $tableCell = new DOM('[data-js="table-cell"]');
        var $table = new DOM('[data-js="table"]');

        var cellHtml = $tableCell.get().cloneNode(true);

        $inputElements.forEach(function(element, index){
          if (index === 0) {
            cellHtml.children[index].setAttribute('src', element.value);
          } else {
            cellHtml.children[index].textContent = element.value;
          }
        });

        $table.get().appendChild(cellHtml);
        console.log($inputElements, cellHtml.children);
      }
    };
  })();

  app.init();
  
})(window.DOM);
