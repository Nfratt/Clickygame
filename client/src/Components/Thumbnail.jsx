import React from "react";

function Thumbnail(props) {
    const styles={
        width:'200px',
        height:'200px',
        margin:'50px'
    }
  return (
<img src={props.src} 
onClick={props.onClick}  
className="img-thumbnail" 
style={styles}
/>
  );
}

export default Thumbnail;
