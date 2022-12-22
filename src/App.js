import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Search from "./pages/Search";

export default function App(props) {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Search />} />

          <Route path="/*" element={<h1>ERROR</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
