import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">

                        <div>
                        <a href = "https://androidPhones.com" className = "navbar-brand">
                           
                            <b>SophieTelecom Application</b>
                     </a>
                    </div>
                   </nav>
                </header>
            </div>
        )
    }

}
export default Header;