import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Logo from "./partials/Logo";
import Sidebar from "../Sidebar";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const propTypes = {
    navPosition: PropTypes.string,
    hideNav: PropTypes.bool,
    hideSignin: PropTypes.bool,
    bottomOuterDivider: PropTypes.bool,
    bottomDivider: PropTypes.bool,
};

const defaultProps = {
    navPosition: "",
    hideNav: false,
    hideSignin: false,
    bottomOuterDivider: false,
    bottomDivider: false,
};

const Header = ({
    className,
    navPosition,
    hideNav,
    hideSignin,
    bottomOuterDivider,
    bottomDivider,
    ...props
}) => {
    const [isActive, setIsactive] = useState(false);

    const nav = useRef(null);
    const hamburger = useRef(null);
    const sidebar = useRef(null);

    useEffect(() => {
        isActive && openMenu();
        document.addEventListener("keydown", keyPress);
        document.addEventListener("click", clickOutside);
        return () => {
            document.removeEventListener("keydown", keyPress);
            document.removeEventListener("click", clickOutside);
            closeMenu();
            clearAllBodyScrollLocks();
        };
    });

    const openMenu = () => {
        document.body.classList.add("off-nav-is-active");
        document.body.classList.add("sidebar-active");
        
        disableBodyScroll(sidebar.current);
        // nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
        setIsactive(true);
    };

    const closeMenu = () => {
        document.body.classList.remove("sidebar-active");
        document.body.classList.remove("off-nav-is-active");
        disableBodyScroll(sidebar.current);
        enableBodyScroll(sidebar.current)
        // nav.current && (nav.current.style.maxHeight = null);
        setIsactive(false);
    };

    const keyPress = (e) => {
        isActive && e.keyCode === 27 && closeMenu();
    };

    const clickOutside = (e) => {
        if (!nav.current) return;
        console.log("fired");
        console.log(sidebar);
        if (!sidebar.current) return;
        console.log("fired2");
        if (
            !isActive ||
            nav.current.contains(e.target) ||
            sidebar.current.contains(e.target) ||
            e.target === hamburger.current
        )
            return;
        closeMenu();
    };

    const classes = classNames(
        "site-header",
        bottomOuterDivider && "has-bottom-divider",
        className
    );

    return (
        <>
            <header {...props} className={classes}>
                <div className="container">
                    <div
                        className={classNames(
                            "site-header-inner",
                            bottomDivider && "has-bottom-divider"
                        )}
                    >
                        <Logo className="brand" /> <h4> Harmony</h4> 
                        {!hideNav && (
                            <>
                                <button
                                    ref={hamburger}
                                    className="header-nav-toggle"
                                    onClick={isActive ? closeMenu : openMenu}
                                >
                                    <span className="screen-reader">Menu</span>
                                    <span className="hamburger">
                                        <span className="hamburger-inner"></span>
                                    </span>
                                </button>

                                <nav
                                    ref={nav}
                                    className={classNames(
                                        "header-nav",
                                        isActive && "is-active"
                                    )}
                                >
                                    <div className="header-nav-inner">
                                        <ul
                                            className={classNames(
                                                "list-reset text-xs",
                                                navPosition &&
                                                    `header-nav-${navPosition}`
                                            )}
                                        >
                                            <li>
                                                <Link to="" onClick={closeMenu}>
                                                    Download
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="" onClick={closeMenu}>
                                                    Why Harmony?
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="" onClick={closeMenu}>
                                                    Safety
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="" onClick={closeMenu}>
                                                    Support
                                                </Link>
                                            </li>
                                        </ul>
                                        {!hideSignin && (
                                            <ul className="list-reset header-nav-right">
                                                <li className="sidbar-button">
                                                    <Link
                                                        to="#0"
                                                        className="button button-primary button-wide-mobile button-sm"
                                                        onClick={closeMenu}
                                                    >
                                                        Sign up
                                                    </Link>
                                                </li>
                                            </ul>
                                        )}
                                    </div>
                                </nav>
                            </>
                        )}
                    </div>
                </div>
                <div ref={sidebar}>
                <Sidebar closeMenu={closeMenu} isActive={isActive} />
            </div>
            </header>
            
        </>
    );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
