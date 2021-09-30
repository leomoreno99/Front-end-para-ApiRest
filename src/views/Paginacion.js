const Paginacion = (props) => {
  const getPaginas = () => {
    const resultado = [];
    for (let i = 0; i < props.total; i++) {
      let pag = i + 1;
      resultado.push(
        <a
          onClick={() => props.onChange(pag)}
          className={props.pagina === pag ? "active" : ""}
        >
          {pag}
        </a>
      );
    }
    return resultado;
  };

  return (
    <div className="topbar-filter">
      <div className="pagination2">
        <span>
          Pagina {props.pagina} de {props.total}:
        </span>

        {getPaginas()}
      </div>
    </div>
  );
};

export default Paginacion;
