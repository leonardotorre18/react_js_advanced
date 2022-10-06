import React from 'react';
import './App.scss';
import Form from './components/form/Form';
import Updater from './components/pure/Updater';

function App() {
  return (
    <div className="App">
      <h1 className="title">Aplicación para Curso de React Avanzado</h1>
      <Updater />
      <Form />
    </div>
  );
}

export default App;
