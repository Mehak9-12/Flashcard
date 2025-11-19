export function FlashCard({selectedId,onClick,q}){
    return (
        <>
        <div
            className={`flashcard ${selectedId ? "selected" : ""}`}
            onClick={onClick}
          >
            <div className="flashcard-inner">
      <div className="flashcard-front">
        <p>{q.question}</p>
      </div>
      <div className="flashcard-back">
        <p>{q.answer}</p>
      </div>
    </div>
          </div>

        </>
    )
}