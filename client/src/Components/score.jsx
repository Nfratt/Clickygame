import React from 'react';
export default function Score(props){
    const styles= {
        width:'200px'
    };
    
    return(<div> {props.score}|top Score:{props.topScore}
        </div>
    );
}