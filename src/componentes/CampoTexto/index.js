import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeholderodificada = `${props.placeholder}...`;
  // let valor = "JBL";


  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
    
  }

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderodificada}
      />
    </div>
  );
};

export default CampoTexto;
