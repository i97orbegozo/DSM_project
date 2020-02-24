import React from 'react';


const inputCal = (props) => {
    return(
        <div className="inputCal">
            <form>
                <label>{props.nameLabel}</label><br></br>
                <input type="number"  value={props.value} onChange={props.change}/>
            </form>
        </div>
    )
}

export default inputCal;