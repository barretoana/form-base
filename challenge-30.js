/*
A loja de carros será nosso desafio final. Na aula anterior, você fez a parte
do cadastro dos carros. Agora nós vamos começar a deixar ele com cara de
projeto mesmo.

Crie um novo repositório na sua conta do GitHub, com o nome do seu projeto.

Na hora de criar, o GitHub te dá a opção de criar o repositório com um
README. Use essa opção.

Após criar o repositório, clone ele na sua máquina.

Crie uma nova branch chamada `challenge-30`, e copie tudo o que foi feito no
desafio da aula anterior para esse novo repositório, nessa branch
`challenge-30`.

Adicione um arquivo na raiz desse novo repositório chamado `.gitignore`.
O conteúdeo desse arquivo deve ser somente as duas linhas abaixo:

node_modules
npm-debug.log

Faça as melhorias que você achar que são necessárias no seu código, removendo
duplicações, deixando-o o mais legível possível, e então suba essa alteração
para o repositório do seu projeto.

Envie um pull request da branch `challenge-30` para a `master` e cole aqui
nesse arquivo, dentro do `console.log`, o link para o pull request no seu
projeto.
*/

console.log('Link do pull request do seu projeto');

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


//revealing module pattern
//window.app = app; - como função
//window.app = app(); - como objeto

//closure

})(window.DOM);
