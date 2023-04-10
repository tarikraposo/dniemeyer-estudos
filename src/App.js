import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Inicio} from "./pages/Home";
import { useState } from "react";

function App() {
  const [dados, setDados] = useState([]);

  function handleSavedados(user) {
    let newDados = [...dados];
    newDados.push(user);
    setDados(newDados);
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio onAddUser={handleSavedados} />} />
          <Route
            path="/Inicio"
            element={<Inicio onAddUser={handleSavedados} />}
          />
          <Route path="/Body" element={<Body dados={dados} />} />
          <Route path="/Header" element={<Header />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
