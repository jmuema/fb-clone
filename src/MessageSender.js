import { Avatar } from '@material-ui/core';
import React from 'react';
import './MessageSender.css';


function MessageSender() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };


    return (
        <div className="messageSender" >
            <div className="messageSender__top" >
                <Avatar />
                <form>
                    <input className="messageSender__input" placeholder={`Whats on your mind`} />
                    <input placeholder="Image URL (Optional)" type="text" />
                    <button onClick={handleSubmit} type="submit" > Hidden submit</button>
                </form>

            </div>
            <div className="messageSender__bottom" >

            </div>
            
        </div>
    )
}

export default MessageSender
