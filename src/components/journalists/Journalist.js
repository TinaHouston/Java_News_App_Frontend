import React from 'react';
import {Link} from 'react-router-dom';


const Journalist = ({journalist}) => {
    
    if(!journalist){
        return<p>Loading...</p>
    }

    const url = "/admin/journalists/" + journalist.id;
    
    return (
        <>
        <Link to = {url} className = "name">
        <p>{journalist.name}</p>
        </Link>
        <p>Title: {journalist.title}</p>
        </>
    )
}

export default Journalist;