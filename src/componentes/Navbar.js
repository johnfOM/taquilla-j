import React, { memo } from 'react';
import { useLocation } from 'react-router';
import { LinkStyled, NavList } from './Navbar.styled';

const LINKS = [
    { to: '/', text: 'Inicio' },
    { to: '/favorito', text: 'Favorito' }
]

const Navbar = () => {
    const location = useLocation();
    return (
        <div>
            <NavList>
                {LINKS.map(item => (
                    <li key={item.to}>
                        <LinkStyled 
                            to={item.to}
                            className={item.to === location.pathname ? 'active' : ''}
                        >
                            {item.text}
                        </LinkStyled>
                    </li>
                ))}
            </NavList>
        </div>
    );
};

export default memo(Navbar);
