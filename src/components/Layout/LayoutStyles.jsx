import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #FAEBD7;
  padding: 26px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 32px;
  text-transform: uppercase;

  color: #373737;
  border-bottom: 2px solid #2f0a3e;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
`;

export const NavList = styled.ul`
  display: flex;

  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin-right: 24px;
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: #5F9EA0;
  font-weight: bold;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #9400D3;
  }
  &.active {
    color: #9400D3;
   
  }
`;

export const Main = styled.main`
  padding: 26px;
`;
