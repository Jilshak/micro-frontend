import { useRef, useEffect, useState } from 'react';

function App() {
  const iframeRef = useRef(null);
  const [receivedMessage, setReceivedMessage] = useState('No message received');

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== 'http://localhost:4174') {
        return;
      }
      setReceivedMessage(event.data);
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const sendMessage = () => {
    const message = 'Hello from Host';
    iframeRef.current.contentWindow.postMessage(message, 'http://localhost:4174');
  };

  return (
    <div className="App">
      <header style={{ width: "100vw" }} className="App-header">
        <div style={{display: "flex", justifyContent: "center"}}>
          <h1>Host Application</h1>
        </div>
        <button onClick={sendMessage}>Send Message to Remote</button>
        <p>Message: {receivedMessage}</p>
        <iframe
          ref={iframeRef}
          src="http://localhost:4174/"
          title="Remote Application"
          style={{ width: '100vw', height: '500px', border: '1px solid red' }}
        />
      </header>
    </div>
  );
}

export default App;
