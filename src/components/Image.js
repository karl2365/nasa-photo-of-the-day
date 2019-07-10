import React from 'react'

export default function Image(props) {
    return (
        <div>
            <img src={props.data.hdurl} width='400px'/>

        </div>
    )
}
