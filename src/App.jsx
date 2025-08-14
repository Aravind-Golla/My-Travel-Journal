import "./App.css";
import { createRoot } from "react-dom/client";
import Header from "./component/Header";

function App() {
    return (
        <div>
            <Header />
        </div>
    );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);

export default App;