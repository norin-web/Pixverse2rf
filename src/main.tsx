import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles/index.css";

// reveal styles only hide content once scripts run (visible by default without JS)
document.documentElement.classList.add("js");

createRoot(document.getElementById("root")!).render(<App />);
