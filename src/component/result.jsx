function Result({ useAnswer, QuizQuestion, reset }) {
  function Give(){
    let score = 0;

    useAnswer.forEach((answer, index) => {
      if (
        QuizQuestion[index] &&
        answer === QuizQuestion[index].correctAnswer
      ) {
        score++;
      }
    });

    return score;
  }

  const score = Give();


  return(

    <div>
   <h1>Score: {score}</h1>
  <button onClick={reset}> reset</button>
    </div>
  )
  

}

export default Result