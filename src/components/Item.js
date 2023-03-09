import styled from "styled-components";
import React, { useState } from "react";

const Task = styled.div`
    list-style: none;
    margin: 1rem 0;
    span {
        text-decoration: ${props => props.done ? "line-through" : "none"};
    }
    display: ${props => props.showCard ? "flex" : "none"};
    font-size: 1.2rem;
    background-color: ${props => props.done ? "lightgreen" : "yellow"};
    padding: 2rem;
    box-shadow: 3px 3px 3px black;
    text-align: center;
    align-items: center;
    flex-direction: column;
    button {
        padding: .3rem;
        font-size: 1.2rem;
        color: white;
        transition: .3s;
        border-radius: 10px;
        border: none;
        margin-top: 2rem;
        &:hover {
            cursor: pointer;
        }
    }
    .concluir {
        background-color: rgb(52, 74, 141);
        &:hover {
            background-color: rgb(15, 1, 93);
        }
        &:disabled {
            background-color: rgba(11, 108, 0, 0.688);
            cursor:no-drop;
        }
    }
    .remover {
        background-color: red;
        &:hover {
            background-color: darkred;
        }
    }
    div {
        display: flex;
        max-width: 300px;
        width: 100%;
        justify-content: space-around;
    }
`

export default function Item({ task }) {

    const [disable, setDisable] = useState(false)
    const [show, setShow] = useState(true)

    return (
        <Task done={disable} showCard={show}>
            <span>
                {task}
            </span>
            <div>
                <button className="concluir" disabled={disable} onClick={() => {
                    setDisable(!disable)
                }}>{disable ? "Feito :)" : "Terminei"}</button>

                <button className="remover" showButton={show} onClick={() => {
                    setShow(false)
                }}>Excluir</button>
            </div>
        </Task>
    )

}