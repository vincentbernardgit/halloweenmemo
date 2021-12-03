import './singlecard.css'

export default function SingleCard({card, handleChoice, flipped, disabled}) {
    const handleClick=()=>{
        if(!disabled){
            handleChoice(card)
        } 
    }

    return (
        <div className="card">
            <div className={flipped ? "flipped": ""}>
              <img className="front" src={card.src} alt="card front" />
              <img className="back" src="assets/33.png" onClick={handleClick} alt="card back" />
            </div>
        </div>
    )
}
