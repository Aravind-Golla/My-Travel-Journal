import "./App.css";
import { createRoot } from "react-dom/client";
import Header from "./component/Header";
import Entry from "./component/Entry";

function App() {
    return (
        <div>
            <Header />
            <Entry />
        </div>
    );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);

export default App;