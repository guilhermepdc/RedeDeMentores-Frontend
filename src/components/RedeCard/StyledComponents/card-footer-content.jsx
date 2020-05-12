import styled from 'styled-components';

const CardFooterContent = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
@media screen and (max-width:1000px){
  flex-direction:column;
  justify-content:space-between;
}
`
export default CardFooterContent;   