import React from "react";
import { Nav, NavLink, NavMenu } 
from "./NavbarElements";

export const Navbar = () => {
return (
<>
<Nav>
<NavMenu>
<NavLink to="/about" activeStyle>
О компании
</NavLink>
<NavLink to="/contact" activeStyle>
Контакты
</NavLink>
<NavLink to="/staff" activeStyle>
Наши тренеры
</NavLink>
<NavLink to="/calendar" activeStyle>
Расписание занятий
</NavLink>
<NavLink to="/sign-up" activeStyle>
Личный кабинет
</NavLink>
</NavMenu>
</Nav>
</>
);
}