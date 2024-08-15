
import { useState } from 'react';
import './App.css';
import Box from "./component/Box"

//1. Box 2 개 (타이틀,사진,결과)
//2. 가위 바위 보 버튼이 있다
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//3-1. 사진과 이름을 가지고있는 object(객체)를 만들자!
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
//5. 3 과 4 번째의 결과를 가지고 누가 이겼는지 승패를 따진다.
//6. 승패 결과에 따라 테두리 색이 바뀐다(이기면: 초록, 지면: 빨강, 비기면: 검정)


//3-1. 사진 이름 object
const choice = {
  rock: {
    name: "Rock",
    img: "https://thumb.ac-illust.com/8d/8dcc7c471c527e7b7df3cadcec669534_t.jpeg"
  },
  scissors: {
    name: "Scissors",
    img: "https://img.freepik.com/free-vector/pink-scissor-design_25030-68368.jpg"
  },
  paper: {
    name: "Paper",
    img: "https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-colored-writing-paper-illustration-image_1432850.jpg"
  }
};

function App() {
  // user
  const [userSelect, setUserSelect] = useState(null);
  // computer
  const [computerSelect, setComputerSelect] = useState(null);
  // 성패를 보여주는 state
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    console.log("선택됨!", userChoice);
    // setUserSelect 변수를 바꿔줄 함수를 써야한다. 바로 그 함수는 setUserSelect()
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    console.log("user : ", user, "computer :", computer);

    // user === computer tie
    // user = "Rock", computer = "Scissors" user Win
    // user = "Rock", computer = "Paper" user Lose
    // user = "scissors", computer = "paper" user Win
    // user = "scissors", computer = "rock" user Lose
    // user = "paper", computer ="rock" user Win
    // user = "paper", computer = "scissors" user Lose

    if (user.name === computer.name) {
       return "Tie"
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "Win" : "Lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "Win" : "Lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "Win" : "Lose";


  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //Object.keys() 객체에 키값만 뽑아서 array로 만들어주는 함수이다.
    console.log("item array", itemArray)
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log("random : ", randomItem);
    let final = itemArray[randomItem];
    return choice[final];

  }

  return (
    <div>
    <div className="title-img">
          <img className="rps-img" ait=" " src="./img/color-rock-paper-scissors.png" />
        </div>
      <div className="main" >
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main main2">
        {/* 3. 버튼을 클릭하면 클릭한 값이 박스에 보임, 무엇을 선택했는지 알게하는 매개변수를 {play()} 에다 넣어준다.  play 함수에다 (userChoice)라는 매개변수이름을 준다. */}
        {/* play("매개변수") 하면 함수를 그냥 실행시켜버린답니다. 그래서 콜백함수를 줘야한다. 어떻게?  { () => play("scissors") 이렇케 해준다.*/}
        <button onClick={() => play("scissors")}><img className="rock-paper-scissors" ait=" " src="./img/scissors.png" /></button>
        <button onClick={() => play("rock")}><img className="rock-paper-scissors" ait=" " src="./img/rock.png" /></button>
        <button onClick={() => play("paper")}><img className="rock-paper-scissors"ait=" " src="./img/paper.png" /></button>
      </div>
    </div>

  );
}

export default App;
