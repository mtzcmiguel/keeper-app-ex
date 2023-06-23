import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateNote from './CreateNote';
import notes from '../notes';


function App() {
    const [notesList, setNotesList] = useState(notes);

    function addNote(note) {
        setNotesList([
            ...notesList,
            {
                key: note.key,
                title: note.title,
                content: note.content
            }]);
    }

    return (
        <div>
            <Header />
            <CreateNote
                onAdd={addNote}
                initialKeyValue={notes.length}
            />
            {notesList.map(noteEntry => {
                return (
                    <Note
                        key={noteEntry.key}
                        id={noteEntry.key}
                        title={noteEntry.title}
                        content={noteEntry.content}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;