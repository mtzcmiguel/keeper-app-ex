import React, { useState } from 'react';

function CreateNote(props) {
    const [key, setKey] = useState(props.initialKeyValue);
    const [note, setNote] = useState({
        key: key,
        title: '',
        content: ''
    });


    function handleChange(event) {
        setNote({
            ...note,
            [event.target.name]: event.target.value
        });
    }

    return (
        <>
            <form>
                <div className='note'>
                    <input
                        name="title"
                        placeholder="Title"
                        onChange={handleChange}
                        value={note.title}
                    />
                    <textarea
                        name="content"
                        placeholder="Content"
                        rows={4}
                        cols={20}
                        onChange={handleChange}
                        value={note.content}
                    />
                    <button onClick={(event) => {
                        const nextKey = key + 1;

                        event.preventDefault();                        
                        props.onAdd({...note, key: nextKey});
                        setNote({
                            key: nextKey, 
                            title: '',
                            content: ''
                        });
                        setKey(nextKey);
                    }}>
                        Add
                    </button>
                </div>
            </form>
        </>
    );
}

export default CreateNote;