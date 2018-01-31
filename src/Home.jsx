import React, { Component } from "react";
import { renderReact } from 'hypernova-react';
import { hydrate } from "react-dom"
import styled from "styled-components";
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  color: red;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  background-color: red;
  margin-left: 200px;
`;
const Input = styled.input`
  display: block;

`
const express = require('express');
const app = express();




export default class Home extends React.Component {   
  
handleClick(){
	app.post('/', function(req, res) {
		res.redirect('/login');
		console.log(res);
});
	
}

  
  render() {
    return (
         <div>
  	        <Wrapper>
	  	          <Title>Whats Your Poison?</Title>
	  	          <Button onClick={this.handleClick.bind(this)}>Login</Button>
	  	          <Button>Browse</Button>
  	        </Wrapper>
  	      </div>
    );
  }
}