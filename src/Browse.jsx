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
const img = styled.default.img`
  display: block;

`
const ItemBox=styled.default.div`
  border: 2px solid red;
`
export default ()=>(
         <div>
  	        <Wrapper>
  	          <Title>Choose Your poison</Title>
              <ItemBox>
  	            <img src="http://chavysliquor.com/wp-content/uploads/2017/03/grey_goose_vodka_750ml-270x360.jpg"/>
              </ItemBox>
  	        </Wrapper>
  	      </div>)

