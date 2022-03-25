import React from "react";
import { capitalizeFirstLetter } from '../../../utils/helpers';

function Nav() {

return (
    <header>
        <h1>
         Alexys Carrasquillo 
        </h1>

        <nav>
            <ul>
                <li>
                    <a href="#about" onClick={ capitalizeFirstLetter }> About </a> 
                </li>
                <li>
                    <a href="#work" onClick={ capitalizeFirstLetter }> Works </a>
                </li>
                <li>
                    <a href="#contact" onClick={ capitalizeFirstLetter }> Contact </a>
                </li>
                <li>
                    <a href="#resume" onClick={ capitalizeFirstLetter }> Resume </a>
                </li>
            </ul>
        </nav>
    </header>
)

}

export default Nav;