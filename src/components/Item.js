import styled from "styled-components";
import React, { useState } from "react";

const Task = styled.div`
    list-style: none;
    margin: 1rem 0;
    span {
        text-decoration: ${props => props.done ? "line-through" : "none"};
    }
    font-size: 1.2rem;
    background-color: yellow;
    padding: 2rem;
    box-shadow: 3px 3px 3px black;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    button {
        padding: .3rem;
        font-size: 1.2rem;
        color: white;
        background-color: rgb(52, 74, 141);
        transition: .3s;
        border-radius: 10px;
        border: none;
        text-decoration: none !important;
        margin-top: 2rem;
        &:hover {
            background-color: rgb(15, 1, 93);
            cursor: pointer;
        }
        &:disabled {
            background-color: rgba(11, 108, 0, 0.688);
            cursor:no-drop;
        }
    }
`

export default function Item({ task }) {

    const [disable, setDisable] = useState(false)

    return (
        <Task done={disable}>
            <span>
                {task}
            </span>
            <button disabled={disable} onClick={() => {
                setDisable(!disable)
            }}>{disable ? "Feito :)" : "Terminei"}</button>
        </Task>
    )

}