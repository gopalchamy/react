import React from 'react';
const Paragraph = () =>{
    return(
        <>
        <h1 style={{color:'green'}}>Inline Style in JSX Example.</h1>
        <div style={{backgroundColor:'lightblue',color:'darkblue',padding:'10px',borderWidth:'1px',borderStyle:'solid',borderColor:'blue',borderRadius:'5px'}}>
            <p style={{color:'darkblue',fontSze:'16px'}}>
                This is a paragraph with inline styles applied.

            </p>
            
        </div>
        
        </>
    )
}
export default Paragraph;
