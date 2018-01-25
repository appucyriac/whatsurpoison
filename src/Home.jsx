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
const express = require('express');
const app = express();
function handleClick(){
	app.post('/', function(req, res) {
		res.redirect('/login');
		console.log(res);
});
	
}
export default ()=>(
         <div>
  	        <Wrapper>
  	          <Title>Whats Your Poison?</Title>
  	          <Button onclick={handleClick}>Login</Button>
  	          <Button>Browse</Button>
  	        </Wrapper>
  	      </div>)

