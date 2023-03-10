import './App.css';
import Item from './components/Item';
import { useState } from 'react';
import styled from 'styled-components';

const OuterContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(57, 34, 34);
  color: white;
  min-height: 100vh;
  h1 {
    font-size: 2rem;
    text-align: center;
  }
`

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 90%;
  align-self: center;
  max-width: 1000px;
  color: black;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  align-items: center;
  div {
    width: 80%;
    max-width: 600px;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
  label, input {
    font-size: 1.2rem;
  }
  #task {
    padding: .3rem;
    border-radius: 10px;
    border: 1px solid black;
    width: max-content;
    border: none;
  }
  #submit {
    padding: .5rem;
    border: none;
    border-radius: 10px;
    background-color: green;
    color: white;
  }
  #submit:hover {
    cursor: pointer;
    background-color: darkgreen;
  }
  #submit:active {
    background-color: rgb(10, 74, 10);
  }
`

function App() {

  const [input, setInput] = useState('')
  const [items, setItems] = useState([])

  return (
    <OuterContainer>
      <h1>To do list</h1>
      <Form onSubmit={(event) => {
        event.preventDefault()
        if(input === '') return
        setItems([...items, <Item task={input} />])
        setInput('')
      }}>
        <div>
          <label for="task">
            Digite a tarefa:
          </label>
          <input type="text" id='task' value={input} onChange={(event) => {
            setInput(event.target.value)
          }} />
        </div>
        <input id='submit' value="Cadastrar" type="submit" />
      </Form>
      <CardContainer>
        {items}
      </CardContainer>
    </OuterContainer>
  )
}

export default App;
