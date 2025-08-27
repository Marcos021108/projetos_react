function Evento({numero}){
    function meuEvento(){
        console.log(`RASENGAAAAAAAAAAAAAAAAAAAAAAAAAN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ==> ${numero} `)
    }
    return(
        <div>
            <p>clique aqui para disparar um evento</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>      
    )
}
export default Evento