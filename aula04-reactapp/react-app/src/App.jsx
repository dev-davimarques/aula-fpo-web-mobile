import ArrayMap from "./components/arrayMap/arrayMap"
import Botao from "./components/botao/botao"
import Car from "./components/car/car"
import Contador from "./components/contador/contador"
import Counter from "./components/counter/counter"
import FavoriteColor from "./components/favoriteColor/favoriteColor"
import List from "./components/list/list"
import Lista from "./components/lista/lista"
import Title from "./components/title/title"
import Welcome from "./components/welcome/welcome"

function App() {
  return(
    <>
      <Title name="Compras"/>
      {/* <List/> */}
      <Lista />
      <FavoriteColor/>
      <Car/>
      <ArrayMap/>
      <Welcome name="Davi"/>
      <Welcome name="Hugo"/>
      <Welcome name="Diego"/>
      <Contador/>
      <Counter/>
      <br />
      <Botao>
        Clique aqui
      </Botao>
      <br/>
      <Botao>
        <strong>Enviar</strong>
      </Botao>
    </>
  )
}

export default App
