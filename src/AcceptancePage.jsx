 import styled from 'styled-components' 

 import Confetti from 'react-confetti'

function AcceptancePage() {
 
  return (
    <Wrapper> 
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
        />
      <div>
        <Image>
          <Img src={null}/>
        </Image>
        <Title>
          Thank you for accepting!!
        </Title>

        <Subtext>
          See you on February 14th
        </Subtext>
      </div>
    </Wrapper>
  )
}

export default AcceptancePage

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
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
  font-size: 8vw;
`;

const Subtext = styled.div` 
  color: #FFB8D0;
  font-size: 5vw;
`;
