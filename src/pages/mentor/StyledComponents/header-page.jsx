import styled from 'styled-components';

const HeaderPage = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 21px;
    width:1000px;
    margin-top:30px;
    @media screen and (max-width: 500px){    
            flex-direction: column;   
            justify-content:center;
            align-items: center;
    }
`;

export default HeaderPage;