import SingleCard from './components/SingleCard'
import { useState, useEffect } from 'react'
import './App.css'

const cardImages=[
  {"src": "assets/4.png", matched: false},
  {"src": "assets/5.png", matched: false},
  {"src": "assets/13.png", matched: false},
  {"src": "assets/14.png", matched: false},
  {"src": "assets/15.png", matched: false},
  {"src": "assets/16.png", matched: false},
  {"src": "assets/17.png", matched: false},
  {"src": "assets/18.png", matched: false},
  {"src": "assets/38.png", matched: false},
  {"src": "assets/39.png", matched: false}
]

function App() {
  const [cards, setCards]=useState([])
  const [turns, setTurns]=useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  //shuffle cards
  const shuffleCards=()=>{
    const shuffledCards=[...cardImages, ...cardImages]
      .sort(()=>Math.random()-0.5)
      .map((card)=>({...card, id: Math.random()}))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }

  //handle a choice
  const handleChoice=(card)=>{
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  //compare 2 selected cards
  useEffect(() => {
    if(choiceOne && choiceTwo){
      setDisabled(true)
      if(choiceOne.src===choiceTwo.src){
        setCards(prevCards=>{
          return prevCards.map(card=>{
            if(card.src===choiceOne.src){
              return {...card, matched: true}
            }
            else{
              return card
            }
          })
        })
        resetTurn()
      }
      else{
        setTimeout(()=>resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  console.log(cards)

  //reset choices & increase turn
  const resetTurn=()=>{
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns=>prevTurns+1)
    setDisabled(false)
  }

  //start a new game automatically
  useEffect(()=>{
    shuffleCards()
  }, [])

  return (
    <div className="App">
      <h1>Halloween Memo</h1>
      <div className="container">
        <div className="card-grid">
          {cards.map(card=>(
            <div className="card" key={card.id}>
              <SingleCard key={card.id} handleChoice={handleChoice} card={card} flipped={card===choiceOne || card===choiceTwo || card.matched} disabled={disabled} />
            </div>
          ))}
        </div>
        <div className="menu">
          <button onClick={shuffleCards}>New Game</button>
          <p>Turns: {turns}</p>
        </div>
      </div>
    </div>
  );
}

export default App