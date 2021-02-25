import { useEffect } from "react";
import axios from "axios";

function App() {

  useEffect(() => {
    axios
    .get("/api/config")
    .then(response => {
      console.log(response.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);
  return (
    <div className="App">
      Sup Dude
    </div>
  );
}

export default App;
