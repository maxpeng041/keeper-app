import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "../notes.js";

function App() {
    return (
        <div>
            <Header />
            {notes.map(noteEntry => <Note
                key={noteEntry.key}
                title={noteEntry.title}
                content={noteEntry.content}
            />)}
            <Footer />
        </div>
    );
}

export default App;