import Componenteclase from "./componentes"
import { Componentefuncional, Componenteflecha} from "./componentes";

function App() {
let nombre = "pepitp perez "
let n1= 5; 
let n2 = 10;

  return (
    <>
      <Componenteclase />
      <Componentefuncional />
      <Componenteflecha />
    </>
  )
}
function suma (n1, n2){
  return n1 + n2;
}

export default App
