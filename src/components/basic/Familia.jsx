import React from "react";


// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            {React.Children.map(props.Children, child => {
                return ( React.cloneElement(child, {...props}));
            })}
            {React.Children.map((child, i) => {
                return ( React.cloneElement(child, {...props, key: i}));
            })}
        
        </div>

        );
}