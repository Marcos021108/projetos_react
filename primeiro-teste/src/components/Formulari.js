function Formulario(){

    function cadastrar(e){
        e.preventDefault()
        console.log("usuario cadastrado")
    }

    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrar}>
                <div>
                    <input type="text" placeholder="digite seu nome"/>
                </div>
                <div>
                    <input type="submit" value="cadastrar"/>
                </div>
            </form>
        </div>
    )
}
export default Formulario