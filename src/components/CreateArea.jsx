import React, { useState } from "react";
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);
    function expand() {
        setExpanded(true);
    }

    const [input, setInput] = useState({ title: "", content: "" });
    function handleChange(event) {
        const { value, name } = event.target;
        setInput(prevValue => {
            return { ...prevValue, [name]: value }
        });
    }

    function submitNote(event) {
        event.preventDefault();
        const inputLength = input.title.length + input.content.length;
        if (inputLength === 0) {
            return;
        } else {
            props.addNote(input);
            setInput({ title: "", content: "" });
        }
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && <input onChange={handleChange} name="title" placeholder="Title" value={input.title} />}
                <textarea
                    onChange={handleChange} 
                    onClick={expand} 
                    name="content" 
                    placeholder="Take a note..." 
                    rows={isExpanded ? 3 : 1} 
                    value={input.content}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}><AddRoundedIcon /></Fab>
                </Zoom>
                
                
            </form>
        </div>
    );
}

export default CreateArea;
