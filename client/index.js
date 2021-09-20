import React from 'react';
import { render } from 'react-dom';
import './fake-hmr';

const ExampleComponent = () => {
  return <div>
    <p><a target="_blank" href="https://pi5final.appdoarmais.repl.co/api-docs/#/">Clique aqui para acessar o swagger da aplicação</a></p>
  </div>
}

render(<ExampleComponent />, document.getElementById('app'));