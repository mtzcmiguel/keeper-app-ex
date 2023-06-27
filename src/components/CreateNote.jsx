import React, { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateNote(props) {
    const [key, setKey] = useState(props.initialKeyValue);
    const [isExpanded, setIsExpanded] = useState(false);
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
            <div className='create-area'>
                <form>
                    {isExpanded && (
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            onChange={handleChange}
                            value={note.title}
                            autoComplete="off"
                        />)}
                    <textarea
                        name="content"
                        placeholder="Note..."
                        rows={isExpanded ? 3 : 1}
                        onChange={handleChange}
                        onClick={() => setIsExpanded(true)}
                        value={note.content}
                    />
                    <Zoom in={isExpanded} >
                        <Fab
                            sx={{
                                '&:hover': {
                                    backgroundColor: '#dfa911',
                                },
                            }}
                            size="small"
                            onClick={(event) => {
                                const nextKey = key + 1;

                                event.preventDefault();
                                props.onAdd({...note, key: nextKey});
                                setNote({
                                    key: nextKey,
                                    title: '',
                                    content: ''
                                });
                                setKey(nextKey);
                                setIsExpanded(false);
                            }}
                        >
                            <AddCircleOutlineIcon />
                        </Fab>
                    </Zoom>
                </form>
            </div>
        </>
    );
}

export default CreateNote;