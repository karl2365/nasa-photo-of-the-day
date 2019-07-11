import React from 'react'
import styled from 'styled-components';

const DateDiv = styled.div`
    margin: 10px 0;
    font-size: 1.3rem;
    color: #115599
`;
export default function Date(props) {
    return (
        <DateDiv>
            Date: {props.data.date}
        </DateDiv>
    )
}
