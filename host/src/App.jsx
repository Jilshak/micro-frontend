import Buttom from "remoteApp/Button"
import useStore from   "remoteApp/store"

function App() {

  const {count, increment} = useStore()

  return (
    <>
    <h1>This is the count: {count}</h1>
    <button onClick={() => increment(1)}>
      increment button
    </button>
      <Buttom />
    </>
  )
}

export default App
