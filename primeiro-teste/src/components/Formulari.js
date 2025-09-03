import {useState} from 'react'

function Formulario(){

    function cadastrar(e){
        e.preventDefault()
        //console.log(nome)
       //console.log("usuario cadastrado")
       console.log(`Usuario ${nome} cadastrado com a senha ${senha}`)
    }

    const [nome, setNome] = useState('Marcos Gabriel')
    const [senha, setSenha] = useState('')

    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrar}>
                <div>
                    <label htmlFor="nome"> Nome:</label>
                    <input type="text" id="nome" name="nome" placeholder="digite seu nome" value={nome} onChange={(e)=> setNome(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="senha"> Senha:</label>
                    <input type="password" id="senha" name="senha" placeholder="digite seu senha" onChange={(e)=> setSenha(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="cadastrar"/>
                </div>
            </form>
        </div>
    )
}
export default Formulario