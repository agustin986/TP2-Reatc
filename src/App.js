
function App() {
  function mostrarAlerta(e){
    e.preventDefault();
    const text = e.target.text.value;
    alert(`El texto ingresado fue ${text}`);
  }

  return (
    <div>
      <h1>Ingrese un texto para ser mostrado en pantalla: </h1>
      <form onSubmit={mostrarAlerta}>
      <input type="text" name="text"placeholder="texto"></input>
      <input type="button" value="enviar"></input>
      </form>
    </div>
  );
}

export default App;
