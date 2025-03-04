import Car from "./components/car/car"
import FavoriteColor from "./components/favoriteColor/favoriteColor"
import List from "./components/list/list"
import Title from "./components/title/title"

function App() {
  return(
    <>
      <Title name="Compras"/>
      <List/>
      <FavoriteColor/>
      <Car/>
    </>
  )
}

export default App
