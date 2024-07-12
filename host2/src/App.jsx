import './App.css';
import useStore from "remoteApp/store";
import { useState, useEffect } from 'react';

function App() {
  const { count, increment } = useStore();
  const [message, setMessage] = useState('No message received');

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== 'http://localhost:4175') {
        return;
      }
      setMessage(event.data);
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const sendMessageToHost = () => {
    const message = 'Hello from Remote';
    window.parent.postMessage(message, 'http://localhost:4175');
  };

  return (
    <div style={{border: "1px solid yellow"}}>
      <button onClick={() => increment(1)}>
        Click me: {count}
      </button>
      <h1>Send message to host: </h1>
      <div>
        <p>from host: {message}</p>
        <button onClick={sendMessageToHost}>Send Message to Host</button>
      </div>
    </div>
  );
}

export default App;
