import React, { Component } from 'react'
import "./App.css";
import BoxClass from './component/BoxClass';



const choice = {
  rock: {
    name: "Rock",
    img: "./img/color-rock.png"
  },
  scissors: {
    name: "Scissors",
    img: "./img/color-scissors.png"
  },
  paper: {
    name: "Paper",
    img: "./img/color-paper.png"
  }
};

export default class AppClass extends Component {
  //one of lifecycle function what it is constructor()
  //생성자: 컴포넌트가 실행되자 마자 호출이 되는 함수
  constructor() {
    super()
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
      yourScore: 0,
      computerScore: 0,
      totalCount: 0,
    };
  };

  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    let result = this.judgement(choice[userChoice], computerChoice);
    
    this.setState((prevState) => ({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: result,
      totalCount: prevState.totalCount + 1,
      yourScore: result === "Win" ? prevState.yourScore + 1 : prevState.yourScore,
      computerScore: result === "Lose" ? prevState.computerScore + 1 : prevState.computerScore,
    }));
  };


  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "Tie"
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "Win" : "Lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "Win" : "Lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "Win" : "Lose";
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice); //Object.keys() 객체에 키값만 뽑아서 array로 만들어주는 함수이다.
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }

  reset = () => {
     console.log("리셋 버튼 클릭됨")
    this.setState( {
      userSelect: null,
      computerSelect: null,
      result: "",
      yourScore: 0,
      computerScore: 0,
      totalCount: 0,
  });
  }
  

  render() {
    const {yourScore, computerScore, totalCount} = this.state;
    return (
      <div>

        <div className='main'>
          <div className='score'>
            <div><h1>{yourScore}</h1></div>

            <div className="title-img">
              <img className="cursor-pointer reset-img" alt="" src="./img/color-rock-paper-scissors.png" onClick={() => this.reset()} /><span onClick={() => this.reset()}>Reset</span>
            </div>
            <div><h1>{computerScore}</h1></div>

          </div>
        </div>

      
        <div className="main" >
          <BoxClass title="You" item={this.state.userSelect} result={this.state.result} />
          <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result} />
        </div>
        <div className="main main2">
          {/* 3. 버튼을 클릭하면 클릭한 값이 박스에 보임, 무엇을 선택했는지 알게하는 매개변수를 {play()} 에다 넣어준다.  play 함수에다 (userChoice)라는 매개변수이름을 준다. */}
          {/* play("매개변수") 하면 함수를 그냥 실행시켜버린답니다. 그래서 콜백함수를 줘야한다. 어떻게?  { () => play("scissors") 이렇케 해준다.*/}
          <button className="cursor-pointer rps-a" onClick={() => this.play("scissors")}><img className="rock-paper-scissors" alt="" src="./img/scissors.png" /></button>
          <button className="cursor-pointer rps-b" onClick={() => this.play("rock")}><img className="rock-paper-scissors" alt="" src="./img/rock.png" /></button>
          <button className="cursor-pointer rps-c" onClick={() => this.play("paper")}><img className="rock-paper-scissors" alt="" src="./img/paper.png" /></button>
        </div>
        <div className='main text-total'>Total Game : {totalCount}</div>
      </div>
    );
  };
};
