import React from 'react'
import styled from 'styled-components';

const TitleDiv = styled.div`
    margin: 10px 0;
    font-size: 2rem;
    color: #115599
`;

export default function Title(props) {
    return (
        <TitleDiv>
          {props.data.title}
        </TitleDiv>
    )
}
