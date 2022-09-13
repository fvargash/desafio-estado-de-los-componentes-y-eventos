const Input = ({estado, setEstado}) => { 

    return(
        <div className="container">
            <label> Nombre: </label>
            <input className="form-control"  type="text" placeholder="Ingresa un texto" />
            <label> Contraseña: </label>
            <input className="form-control" value={estado} type="password" placeholder="Ingresa una contraseña" onChange={(e) => setEstado(e.target.value)} />
        </div>
    )
}

export default Input;