import _ from 'lodash';
import "./style.css";
import menu from "src/menu.js"

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack/2 '], ' ');
    //element.innerHTML = 'hello world';

    return element;
  }

  document.body.appendChild(component());