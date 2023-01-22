
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  return (

    useEffect(() => {
      axios
        .get("http://localhost:8000/api/dogs")
        .then ((response) => console.log(response))
        .catch((err) => console.log(err))
    })
  );
};

export default App;
