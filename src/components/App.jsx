import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(input) {
        setNotes(prevNotes => {
            return [...prevNotes, input];
        });
    };

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((note, index) => id !== index)
        })
    }

    return (
        <div>
            <Header />
            <CreateArea addNote={addNote} />
            {notes.map((note, index) =>
                <Note
                    title={note.title}
                    content={note.content}
                    key={index}
                    id={index}
                    deleteNote={deleteNote}
                />
            )}
            <Footer />
        </div>
    );
}

export default App;
