import './App.css';
import Button from './Button';
import useStore from './store';

function App() {
  const { count, increment } = useStore();

  return (
    <>
      <h1>Remote application</h1>
      <Button />
      <button onClick={() => increment(1)}>
        Click Me {count}
      </button>
    </>
  );
}

export default App;
