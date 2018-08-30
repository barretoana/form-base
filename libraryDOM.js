(function (){
   //MARK: - DOM library

   function DOM(string) {
    this.element = document.querySelectorAll(string);
  }

  DOM.prototype.on = function on(type, callbackFunction) {
    Array.prototype.forEach.call(this.element, function(element){
      element.addEventListener(type, callbackFunction)
    });
  }

  DOM.prototype.off = function off() {
    Array.prototype.forEach.call(this.element, function(element){
      element.removeEventListener()
    });
  }
  DOM.prototype.get = function get(index) {
    if (!index)
      return this.element[0];
    return this.element[index];
  }

  DOM.prototype.isArray = function isArray(element) {
    return Object.prototype.toString.call(element) === '[object Array]';
  };

  DOM.prototype.isObject = function isObject(element) {
    return Object.prototype.toString.call(element) === '[object Object]';
  };

  DOM.prototype.isFunction = function isFunction(element) {
    return Object.prototype.toString.call(element) === '[object Function]';
  };

  DOM.prototype.isNumber = function isNumber(element) {
    return Object.prototype.toString.call(element) === '[object Number]';
  };

  DOM.prototype.isString = function isString(element) {
    return Object.prototype.toString.call(element) === '[object String]';
  };

  DOM.prototype.isBoolean = function isBoolean(element) {
    return Object.prototype.toString.call(element) === '[object Boolean]';
  };

  DOM.prototype.isNull = function isNull(element) {
    return Object.prototype.toString.call(element) === '[object Null]' || Object.prototype.toString.call(element) === '[object Undefined]';;
  };

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments)
  };

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments)
  };

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments)
  };

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments)
  };

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments)
  };

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.element, arguments)
  };

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element, arguments)
  };

  window.DOM = DOM;

})();
