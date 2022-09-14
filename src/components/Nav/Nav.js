import React from 'react';

const Nav = ({ onRouteChange, isSignedIn, currentRoute }) => {
    if (isSignedIn) {
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
            </nav>
        );
    } else if (currentRoute === 'signin'){
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
            </nav>
        )
    }
    else {
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
            </nav>
        )
    }
    
}

export default Nav;