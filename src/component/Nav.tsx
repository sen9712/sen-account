import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Icon from './Icon'

const NavWrapper = styled.nav`
box-shadow: 0 0 3px rgba(0,0,0,0.25);
  line-height: 24px;
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      text-align: center;
      padding: 4px 0;
      > a {
        display: flex;
        flex-direction: column;
        justify-content: center;
         align-items: center;
         .icon {
        width: 24px;
        height: 24px;
      }
      &.selected {
        color: red;
        .icon {
          fill: red
        }
      }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""} >
            <Icon name='tag' />
            标签页
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" className={({ isActive }) => isActive ? "selected" : ""} >
            <Icon name="money" />
            记账页
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics"  className={({ isActive }) => isActive ? "selected" : ""} >
            <Icon name="chart" />
            统计页
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav