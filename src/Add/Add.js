import React from 'react';
import './Add.css';

const add = (props) => {
    return (
        <div id="add_new_item">
             <div className="group">      
                <input type="text" required/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Enter new job</label>
            </div>
        </div>
    )
}

export default add