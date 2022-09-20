import React, { useEffect, useRef, useState } from 'react'
import '../css/header.css'
import { useNavigate } from 'react-router-dom'

function Header() {
    const [hamburger, setHamburger] = useState(false)
    const [hamburgerActive, setHamburgerActive] = useState('')
    const [navMenu, setNavMenu] = useState('hidden')
    const refHeader = useRef()

    const history = useNavigate();
    const prevScrollY = useRef(0);

    const [goingUp, setGoingUp] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (prevScrollY.current < currentScrollY && goingUp) {
                setGoingUp(false);
            }
            if (prevScrollY.current > currentScrollY && !goingUp) {
                setGoingUp(true);
            }

            if (window.pageYOffset > refHeader.current.offsetTop) {
                refHeader.current.classList.add('navbar-fixed')
                refHeader.current.classList.remove('navbar-absolute')
            } else {
                refHeader.current.classList.add('navbar-absolute')
                refHeader.current.classList.remove('navbar-fixed')
            }

            prevScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [goingUp]);


    const hamburgerHandle = () => {
        !hamburger ? setHamburgerActive('hamburger-active') : setHamburgerActive('')
        !hamburger ? setNavMenu('') : setNavMenu('hidden')
        setHamburger(!hamburger)
    }

    return (
        <header ref={refHeader} className="navbar-absolute py-2 lg:py-0 top-0 left-0 w-full flex items-center transition-all duration-200 ease-linear z-[50]">
            <div className="container">
                <div className="flex items-center justify-between relative">
                    <div className="pl-6 lg:pl-16 flex items-center space-x-4">
                        <div>
                            <div className='inline-block w-8 h-8 bg-primary rotate-45'></div>
                            <div className='inline-block -ml-5 w-8 h-8 bg-primary/50 rotate-45'></div>
                        </div>
                        <span className="text-xl lg:text-3xl text-primary block py-4 cursor-pointer font-semibold family-raleway" onClick={() => history('/')}>
                            Mini Blog
                        </span>
                    </div>
                    <div className="flex items-center">
                        <button className={`block focus:bg-transparent lg:hidden absolute right-8 outline-none border-none ${hamburgerActive}`} id="hamburger" name="hamburger" onClick={() => hamburgerHandle()}>
                            <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                        </button>

                        <nav id="nav-menu" className={`${navMenu} absolute py-5 bg-white drop-shadow-lg shadow-lg lg:shadow-none rounded-lg max-w-[250px] w-full right-10 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:border-none`}>
                            <ul className="block pl-6 lg:flex lg:space-x-6">
                                <li className='group' onClick={() => history('/')}>
                                    <span className="nav-link">Home</span>
                                </li>
                                <li className='group'>
                                    <span className="nav-link">List Articles</span>
                                </li>
                                <li className='group'>
                                    <span className="nav-link">About</span>
                                </li>
                                <li className='group'>
                                    <span className="nav-link">Contact</span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header