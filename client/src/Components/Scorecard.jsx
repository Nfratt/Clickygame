import React from 'react';
export default function Score(props){
    const styles = {
        color: 'white',
    };
    
    return(<nav
        className="navbar navbar-dark bg-dark"
        style={styles} >
            <h1>The Mandalorian Clicky Game </h1>
        Score: {props.score}|Top Score: {props.topScore}
    </nav>
    );
}