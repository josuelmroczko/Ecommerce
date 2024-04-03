import styled from "styled-components";


export const ValoresStyle = styled.div`
position: relative;

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }

  li {
    text-align: center;
    flex: 1;
    padding: 10px;
    border: 1px solid black;
    margin: 5px;
  }

  strong {
    font-weight: bold;
    font-size: 1.2em;
    color: #333;
    display: block;
    margin-bottom: 10px;
  }

  p {
    color: #666;
    margin-bottom: 10px;
  }

  h2{
    text-align: center;
  }
  span {
    font-size: 1.5em;
    color: #00aaff;
    display: block;
  }
  @media (max-width: 580px){
    ul{
        flex-wrap:wrap ;
    }
  }
`;
