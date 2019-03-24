import styled from 'styled-components';
export const Parent = styled.div`
  position: relative,;
  height: 20em;
  width: 20rem;
  background: orchid;
  /* margin: auto; */
`;
export const Content = styled.div`
  height: 100vh;
  display: grid;
  justify-content:center;
  align-content: center;	
 `;

export const Child = styled.div`
  position: absolute;
  background: olive;
  height: 10em;
  width: 10em;

  /* left: %; */
`;