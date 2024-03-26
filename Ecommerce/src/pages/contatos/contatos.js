import styled from "styled-components";

export const StyledDiv = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  height: 85vh; /* Alterando para viewport height */
  width: 100%;
  padding-top: 120px;
 
  overflow-y: auto; 
 

  .contatos-container {
    text-align: center;
    padding: 20px;
    @media only screen and (max-width: 768px) {
      
    }
  }

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    @media only screen and (min-width: 768px) {
      padding: 0;
    }
  }

  .contatos-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }

  .input, .textarea, .button {
    margin-bottom: 10px;
    width: 100%;
    max-width: 300px;
  }

  @media only screen and (min-width: 768px) {
    .form-container {
      align-items: flex-start;
    }
  }

 

  .footer-container {
    position: relative; 
    bottom: 0;
    left: 0;
    
    width: 100%;
 
  }
`;
