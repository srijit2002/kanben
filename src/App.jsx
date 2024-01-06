import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes/main.jsx";
import { AppProvider } from "./context/Context.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AppProvider>
      <ToastContainer />
      <Router>
        <AppRoutes />
      </Router>
    </AppProvider>
  );
}

export default App;
