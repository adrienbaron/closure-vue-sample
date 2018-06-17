import CounterComponent from "./counter-component";
import CounterComponentData from "./counter-component-data";

const renderFunction = new Function("with(this){return _c('div',[_v(_s(getValue())),_c('div',[_c('button',{on:{\"click\":function($event){add()}}},[_v(\"Add 1 to value\")])])])}");

export default class CounterComponentExposedType extends CounterComponent {
  constructor() {
    super();
  }

  getOptions() {
    const options = {};
    options['el'] = "#counter";
    options['render'] = renderFunction;
    options['data'] = () => {
      const data = new CounterComponentData();
      data.init(this);
      console.log(data.bobby);
      return data;
    };
    options['methods'] = {
      "getValue": this.__proto__.getValue,
      "add": this.__proto__.add
    };
    
    return options;
  }

  add() {
    this.counter++;
    console.log(this.bobby);
  }

  getValue() {
    return super.getValue();
  }
}