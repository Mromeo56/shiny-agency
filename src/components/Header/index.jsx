import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors.js'
import darklogo from '../../assets/dark-logo.png'

const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  ${(props) =>
    props.$isFullLink &&
    `color: white; 
    border-radius: 30px; 
    background-color: ${colors.primary};`}
`

const StyledNav = styled.nav`
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
`

function Header() {
  return (
    <StyledNav>
      <div>
        <StyledLink to="/survey/1">Questionnaire</StyledLink>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
      <img style={{ height: 70 }} alt="Shiny" src={darklogo} />
    </StyledNav>
  )
}

export default Header
