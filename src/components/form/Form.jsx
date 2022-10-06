import React, { useRef } from 'react';
import '../../styles/Form.scss'
const url = 'http://localhost:3001/';

export default function () {

  const title = useRef(null);
  const message = useRef(null);

  const submit = e => {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        title: title.current.value,
        message: message.current.value
      })
    })
    title.current.value = '';
    message.current.value = '';
  }
  return (
    <form onSubmit={submit} className="form">
      <label htmlFor="title">Título</label>
      <input type="text" ref={title} />
      <label htmlFor="Messaje">Mensaje</label>
      <input type="text" ref={message} />
      <button type="submit">Enviar</button>
    </form>
  )
}
