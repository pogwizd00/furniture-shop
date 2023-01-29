import React, {FC} from 'react';
import '../Styles/NavBar.css';
import {Link, Outlet} from "react-router-dom";
import {Logo} from "./Logo";
import basketLogo from "../images/basket.png";


interface LayoutProps {
}

export const Layout: FC<LayoutProps> = () => {
    return (
        <div>
            <div className="App">
                <div className='container'>
                    <Logo/><span className={'title'}>Shoopix</span>
                    <Link to={'/products'} className={`child`}
                          style={{textDecoration: "none", color: "black"}}> Products</Link>
                    <Link to={'/about'} className={'child'}
                          style={{textDecoration: "none", color: "black"}}>About Me</Link>
                    <Link to={'/contact'} className={'child'}
                          style={{textDecoration: "none", color: "black"}}>Contact</Link>
                    <Link to={'/producers'} className={'child'}
                          style={{textDecoration: "none", color: "black"}}>Our Producers</Link>
                    <Link to={'/basket'} className={'child'}><img src={basketLogo} alt={'basketLogo'}/></Link>
                    <Link to={'/signIn'} className={'child signIn'} style={{textDecoration: "none", color: "black"}}>Sign
                        In</Link>
                </div>
                <Outlet/>
            </div>
        </div>
    );
};