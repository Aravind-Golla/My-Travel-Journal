import "./App.css";
import { createRoot } from "react-dom/client";
import Header from "./component/Header";
import Entry from "./component/Entry";
import Data from "./data";

function App() {
    const entries = Data.map((entry) => (
        <Entry
            key={entry.id}
            img={entry.img.src}
            alt={entry.img.alt}
            title={entry.title}
            country={entry.country}
            text={entry.text}
            maps={entry.googleMapsLink}
        />
    ));

    return (
        <div>
            <Header />
            {entries}
        </div>
    );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
