import { useState } from 'react'
import './App.css'
import { FlashCard } from './flashcard';
function App(){


const questions = [
  { id: 1, question: "What is React?", answer: "A JavaScript library for building UIs." },
  { id: 2, question: "What is JSX?", answer: "A syntax extension that looks like HTML in JS." },
  { id: 3, question: "What is a component?", answer: "Reusable UI piece (function or class)." },
  { id: 4, question: "What is state?", answer: "Data that changes over time in a component." },
  { id: 5, question: "What is a prop?", answer: "Read-only data passed into components." }
];
 const [selectedId, setSelectedId]=useState(null);
 function handleClick(id) {
    setSelectedId(prevId => (prevId === id ? null : id));
  }
 return(
  <>
  <div className="flashcard-container">
    <h1>React FlashCards</h1>
    <div className='cards'>
      {questions.map((q)=>
       <FlashCard key={q.id} selectedId={selectedId===q.id} onClick={()=>handleClick(q.id)} q={q}/>
      )
        }
  </div>
  </div>
 </>
 )
}

export default App;