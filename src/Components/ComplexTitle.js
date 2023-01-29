import React from 'react'
import styled from 'styled-components'


const ComplexTitle = ({ title }) => {
  return (
    <Wrapper className='bg-grey'>
        <h1>Hellstrom Investment Group, LLC.</h1>
        <div className='underline'></div>
        {/* <div className='underline'></div>  */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin-right: auto;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 1.0em;
    /* text-shadow: 0.1px 0.1px 0.1px gray; */
  color: #9c9c9c;
  background-image: -webkit-radial-gradient(circle, #9c9c9c 0%,#ffb866 0%,#474747 100%);
  background-clip: text;
  -webkit-background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;




    text-align: center;
    
    
/* h1{
    text-transform: capitalize;
    text-align: center;
}
div{
    width: 50px;
    background: red;
    height: 5px;
    margin: 0 auto;
}
.underline{
    width: 5rem;
    background: var(--primary);
    height: 5px; 
    margin: 0 auto;
} */
`

export default ComplexTitle