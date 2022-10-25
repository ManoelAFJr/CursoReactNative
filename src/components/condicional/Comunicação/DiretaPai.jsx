import React from "react";
import DiretaFilho from "./DiretaFilho";

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{
    return(
        <div>
            <DiretaFilho nome='Juliano' idade={25} nerd={true}></DiretaFilho>
            <DiretaFilho nome='Manoel Jr' idade={28} nerd={false}></DiretaFilho>
        </div>
    );
}