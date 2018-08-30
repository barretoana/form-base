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
