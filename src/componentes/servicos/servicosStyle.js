import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ServicosStyle = styled.div`

position: relative;
  padding-top: 2%;
    
   h2{
    text-align: center;
     font-size: 2rem;
     padding-bottom: 5%;
   }

  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0 auto;
    max-width: 1200px;
  }

  li {
    width: 400px;
    height: auto;
    border: 1px solid #ddd;
    list-style: none;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    animation: ${fadeIn} 0.5s ease-in-out;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
    margin-bottom: 20px;
    background-color: #fff;
  }

  li:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 600px) {
    li{
      position: relative;
      right: 15px;
    }
  }
`;
