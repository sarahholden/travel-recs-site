import styled from "styled-components";

const Form = styled.form`
  label {
    display: block;
  }
  input {
    display: block;
  }
  fieldset {
    border: none;
    position: relative;
    padding-top: 2.8rem;
    &[aria-busy="true"] {
      opacity: .6;
    }
  }
  button {
    
  }


`

export { Form };