import { useState } from "react";
import Titulo from "../tituloChildren/titulo";

export default function Lista(){
    const [produto, setProduto] = useState("");
    const [listaProdutos, setListaProdutos] = useState([]);

    const adicionarProduto = () => {
        if(produto.trim() !== ""){
            setListaProdutos([...listaProdutos, produto]);
            setProduto("");
        }
    };

    return (
        <>
            {/* Componente criado para utilizar a prop children */}
            <Titulo>
                Lista de produtos/compras
            </Titulo>

            <br />

            {/* campo de texto para digitar o produto */}
            <input type="text" value={produto} onChange={(e) => setProduto(e.target.value)}/>

            {/* botao para adicionar */}
            <button type="button" onClick={adicionarProduto}>Adicionar</button>

            {/* lista que ira aparecer dinamicamente na tela */}
            <ul>
                {listaProdutos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
}