import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Logo from "./layout/partials/Logo";

const Sidebar = ({ closeMenu, isActive }) => {
    return (
        <div className={classNames("slide", isActive && "is-active")}>
            <div className="box box-element">
              <Logo />  Harmony
                <div className="spacer" />
                <aside className="menu">
                    <ul className="menu-list">
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
                        <li>
                            <Link
                                to="#0"
                                className="button button-primary button-wide-mobile button-sm"
                                onClick={closeMenu}
                            >
                                Sign up
                            </Link>
                        </li>
                    </ul>
                </aside>
            </div>
        </div>
    );
};

export default Sidebar;
