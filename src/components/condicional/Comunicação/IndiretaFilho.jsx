import React from "react";


// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{
    const bt = props.pressButton;
    return(
        <div>
            <div>
                Filho
            </div>
            <button onClick = {
                function (e){
                bt('Assilon', 78, true)
            }}>Fornece Informação</button>           
        </div>
    );
}