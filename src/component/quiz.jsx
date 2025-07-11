import { useState } from "react";
import Result from "./result";


function Quiz() {
  const QuizQuestion = [
    {
    question: "What is React?",
    options: [
      "A JavaScript library for building user interfaces",
      "A programming language",
      "A database management system",
      "A server-side framework"
    ],
    correctAnswer: "A JavaScript library for building user interfaces"
  },
  {
    question: "Which hook is used to manage state in functional components?",
    options: [
      "useEffect",
      "useContext",
      "useState",
      "useReducer"
    ],
    correctAnswer: "useState"
  },
  {
    question: "What does JSX stand for?",
    options: [
      "JavaScript XML",
      "JavaScript Extension",
      "Java Syntax Extension",
      "JavaScript Syntax"
    ],
    correctAnswer: "JavaScript XML"
  },
  {
    question: "Which method is called after a component is rendered for the first time?",
    options: [
      "componentDidUpdate",
      "componentWillUnmount",
      "componentDidMount",
      "shouldComponentUpdate"
    ],
    correctAnswer: "componentDidMount"
  },
  {
    question: "What is the purpose of React Router?",
    options: [
      "State management",
      "API calls",
      "Routing and navigation",
      "Styling components"
    ],
    correctAnswer: "Routing and navigation"
  },
  {
    question: "Which tool can you use to set up a new React project?",
    options: [
      "React CLI",
      "npm init",
      "Create React App",
      "Webpack"
    ],
    correctAnswer: "Create React App"
  },
  {
    question: "What is the virtual DOM in React?",
    options: [
      "A lightweight version of the actual DOM",
      "A database for storing components",
      "A security feature",
      "A testing environment"
    ],
    correctAnswer: "A lightweight version of the actual DOM"
  },
  {
    question: "How do you pass data to a child component?",
    options: [
      "Using state",
      "Using props",
      "Using context",
      "Using refs"
    ],
    correctAnswer: "Using props"
  },
  {
    question: "Which hook replaces componentDidMount in functional components?",
    options: [
      "useEffect with an empty dependency array",
      "useState",
      "useCallback",
      "useMemo"
    ],
    correctAnswer: "useEffect with an empty dependency array"
  },
  {
    question: "What is the purpose of keys in React lists?",
    options: [
      "To improve performance",
      "To add styling",
      "To create unique identifiers",
      "To handle events"
    ],
    correctAnswer: "To improve performance"
  },
  {
    question: "Which method is used to change state in class components?",
    options: [
      "this.updateState()",
      "this.changeState()",
      "this.setState()",
      "this.modifyState()"
    ],
    correctAnswer: "this.setState()"
  },
  {
    question: "What is Redux used for?",
    options: [
      "Styling components",
      "State management",
      "API handling",
      "Form validation"
    ],
    correctAnswer: "State management"
  },
  {
    question: "Which lifecycle method is called before a component is removed from the DOM?",
    options: [
      "componentWillUnmount",
      "componentDidMount",
      "componentWillUpdate",
      "shouldComponentUpdate"
    ],
    correctAnswer: "componentWillUnmount"
  },
  {
    question: "What is the purpose of React Fragments?",
    options: [
      "To improve performance",
      "To group elements without adding extra nodes to the DOM",
      "To handle events",
      "To manage state"
    ],
    correctAnswer: "To group elements without adding extra nodes to the DOM"
  },
  {
    question: "Which hook is used for performance optimization?",
    options: [
      "useEffect",
      "useState",
      "useMemo",
      "useContext"
    ],
    correctAnswer: "useMemo"
  },
  {
    question: "How can you optimize performance in React?",
    options: [
      "Using React.memo",
      "Using useCallback",
      "Using lazy loading",
      "All of the above"
    ],
    correctAnswer: "All of the above"
  },
  {
    question: "What is the purpose of PropTypes?",
    options: [
      "To define the shape of props",
      "To validate props",
      "To document components",
      "All of the above"
    ],
    correctAnswer: "All of the above"
  },
  {
    question: "Which method is used to render React components to the DOM?",
    options: [
      "ReactDOM.render()",
      "React.render()",
      "DOM.render()",
      "Component.render()"
    ],
    correctAnswer: "ReactDOM.render()"
  },
  {
    question: "What is Context API used for?",
    options: [
      "To avoid prop drilling",
      "To manage global state",
      "To share data across components",
      "All of the above"
    ],
    correctAnswer: "All of the above"
  },
  {
    question: "Which hook should you use for side effects?",
    options: [
      "useState",
      "useEffect",
      "useContext",
      "useReducer"
    ],
    correctAnswer: "useEffect"
  }
   
  ];



 

  const initialAwnser = [null, null, null, null, null];
  const [currentQuestion, setCurrent] = useState(0);

  const [useAnswer, setUseranwer] = useState(initialAwnser);
  const selecteded = useAnswer[currentQuestion];

  function handlechange(op) {
    const newUsher = [...useAnswer];
    newUsher[currentQuestion] = op;
    setUseranwer(newUsher);
  }
  

  
    function goToNext() {
if(currentQuestion ===  QuizQuestion.length - 1){
  return setQuizfinished(true)
}else{
    setCurrent(currentQuestion + 1);

}  
  }
  const[isQuizFinished, setQuizfinished] = useState(false)


  
  if(isQuizFinished) {
    return <Result useAnswer ={useAnswer} QuizQuestion ={QuizQuestion}  reset ={reset}/>
}


function reset(){
  setUseranwer(initialAwnser)
  setCurrent(0);
  setQuizfinished(false)

}



   function Prev() {
    if (currentQuestion > 0) {
      setCurrent(currentQuestion - 1);
    }
  }


  return (
    <div>
      <h2>react quiz app</h2>
      <h4 > question : {currentQuestion +1}</h4>

      <p>{QuizQuestion[currentQuestion].question}</p>

      {QuizQuestion[currentQuestion].options.map((op,index) => (
        <button key={index} onClick={() => handlechange(op)}>{op}</button>
      ))}

      <div>
        <button onClick={Prev} disabled={currentQuestion === 0}>
          previous
        </button>

        <button onClick={goToNext} disabled={!selecteded}>
          {currentQuestion === QuizQuestion.length-1 ? "finished" :"next"}
           button
        </button>
      </div>
    </div>
  );
}

export default Quiz;
