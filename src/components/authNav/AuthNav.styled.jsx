import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkAuth = styled(NavLink)`
  margin-right: 10px;
  text-decoration: none;
  font-weight: bold;
  color: inherit;

  font-size: 16px;

  :hover,
  :focus {
    text-shadow: 5px 5px 10px white;
  }

  &.active {
    color: #0b6bcb;

    :hover,
    :focus {
      text-shadow: 5px 5px 10px black;
    }
  }
`;
