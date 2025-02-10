import { useState } from 'react'
import styled from 'styled-components'
import catImg from './assets/cat.png'
  import { useNavigate } from "react-router-dom";

function App() {
  const [sizeOfButtonYes, setSizeOfButtonYes] = useState(20);

  let navigate = useNavigate();
  
  let clickedYes = () =>{
    // redirect to another page
    navigate("/accepted");
  }

  let clickedNo = () =>{
    // Increase box size of yes input
    setSizeOfButtonYes(sizeOfButtonYes + 10);
    console.log(sizeOfButtonYes);
  }
  return (
    <Wrapper>
      <div>
        <Image>
          <Img src={catImg}/>
        </Image>
        <Title>
        Emma, will you be my valentine?
        </Title>

        <UserInput>
          <ButtonYes sizeOfBtn={sizeOfButtonYes} onClick={clickedYes}>Yes</ButtonYes>
          <ButtonNo sizeOfBtn={20} onClick={clickedNo}>No</ButtonNo>
        </UserInput>
      </div>
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FEF4EA;
  min-height: 100vh;
  min-width: 100vw;
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
max-width: 100%;
height:auto;
display:block;
`;

const Title = styled.div`
  color: #D4668E;
  font-size: 6vw;    
  text-align: center;
`;

const UserInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  place-self: center;

`;

const ButtonNo = styled.button`
  margin: 2%;  
  font-size: 20px;
  background: white;
  color: #FFB8D0;
`; 

const ButtonYes = styled.button`
  margin: 2%;  
  font-size: ${props => (props.sizeOfBtn)}px;
  background: white;
  color: #FFB8D0;
`;