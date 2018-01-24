const React = require('react');
const styled = require('styled-components');
const Button = styled.default.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
const Title = styled.default.h1`
  font-size: 3.5em;
  text-align: center;
  color: red;
`;
const Wrapper = styled.default.section`
  padding: 4em;
  background: papayawhip;
  background-color: red;
`;
const Input = styled.default.input`
  display: block;

`
export default ()=>(
         <div>
  	        <Wrapper>
  	          <Title>Whats Your Poison - Login</Title>
  	          <input placeholder="Username"></input>
              <input placeholder="Password"></input>
              <Button>Sign In</Button>
  	        </Wrapper>
  	      </div>)

