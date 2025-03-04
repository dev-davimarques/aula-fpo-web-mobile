import { useState } from "react";

function List(){
    const [produto, setProduto] = useState("");
    const [listaProdutos, setListaProdutos] = useState([]);

    const adicionarProduto = () => {
        if(produto.trim() !== ""){
            setListaProdutos([...listaProdutos, produto]); // Adiciona um novo produto a lista
            setProduto(""); // Limpa o campo após adicionar
        }
    };
    
    return (
        <>
            <label>Produtos</label>
            <br/>
            <input type="text" value={produto} onChange={(e) => setProduto(e.target.value)}/>
            <button typeof="button" onClick={adicionarProduto}>Adicionar</button>
            <ul>
                {listaProdutos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default List;