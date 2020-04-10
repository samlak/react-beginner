import React from 'react';

const withClass = (WrappedComponent, className) => {
    return props => {
        return <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    };
};

// const WithClass = props => {
//     return <div className={props.classes}>{props.children} </div>
// };

export default withClass;