import { useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0);

    return(
        <>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button onClick={() => setContador(contador - 1)}>Decrementar</button>
        </>
    );
};

export default Contador;