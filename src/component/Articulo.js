import React from 'react'

const Articulo = ({data}) => {
    return (
        <div style={{display:"flex", padding:"10px",width:"100%", gap:"10px"}}>
            <img src={data.imagen} alt="..." width="200px" height="200px"/>
            <div>
                <h3>{data.title}</h3>
                <p>{data["article-description"]}</p>
                <span>{data.author}</span>
            </div>
        </div>
    )
}

export default Articulo
