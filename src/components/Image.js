import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components';

const ImageTag = styled.img`
    margin: 10px 0;
    border-radius: 10px;
    width: 500px;
`;
const ImageDiv = styled.div`
    width: 500px;
`;

export default function Image(props) {
    return (
        <div>
            {props.data.media_type === "video" ? <ReactPlayer url={props.data.url}/> : <ImageTag src={props.data.hdurl} />}

        </div>
    )
}
