import {NavLink} from 'react-router-dom';
import classes from './MainNavigation.module.css';
const MainNavigation =()=>{
return (
<header className={classes.header}>
<div className={classes.logo}>Great Quotes</div>
<nav className={classes.nav}>
    <ul>
        <li><NavLink to='/quotes' className={classes.active} >
        All AllQuotes
        </NavLink>
        </li>
        <li><NavLink to='/new-quote' className={classes.active} >
        Add Quotes
        </NavLink>
        </li>
      
    </ul>
</nav>
</header>
)
}
export default MainNavigation;