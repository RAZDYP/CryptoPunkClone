import React from 'react';
import './Header.css';
const punklogo = require('../assets/header/cryptopunk-logo.png');
const searchicon = require('../assets/header/search.png');
const themeSwitchIcon = require('../assets/header/theme-switch.png');


// sometimes import function does not work so we need to use require method

const Header = () => {
    return (<div className='header'>
        <div className='logocontainer'>
            <img src={punklogo} className='punklogo' alt='logo' />
        </div>


        <div className='searchBar'>
            <div className='searchIconContainer'>
                <img src={searchicon} />
            </div>
            <div>
                <input className='searchInput' placeholder='Bacardi, Jack Daniels or Vox....' />
            </div>
        </div>


        <div className='headerItems'>
            <p>Drops</p>
            <p>Marketplace</p>
            <p>Create</p>
        </div>

        <div className='headerActions'>
            <div className='themeSwitchContainer'>
                <img src={themeSwitchIcon} />
            </div>

        </div>

        <div className='loginButton'>GET IN</div>
    </div>)
}

export default Header
