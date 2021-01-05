import React from "react";
// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faThumbtack,
    faBell,
    faUserFriends,
    faInbox,
    faQuestionCircle,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
    return (
        // Main container
        <nav className="level is-dark is-fixed-top">
            {/*  Left side */}
            <div className="level-left"></div>

            {/*  Right side */}
            <div className="level-right">
                <p className="level-item">
                    <FontAwesomeIcon icon={faBell} />
                </p>
                <p className="level-item">
                    <FontAwesomeIcon icon={faThumbtack} />
                </p>
                <p className="level-item">
                    <FontAwesomeIcon icon={faUserFriends} />
                </p>
                <div className="level-item">
                    <div className="field has-addons">
                        <p className="control">
                            <input
                                className="input"
                                type="text"
                                placeholder="Search"
                            />
                        </p>
                        <p className="control">
                            <button className="button">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </p>
                    </div>
                </div>
                <p className="level-item">
                    <FontAwesomeIcon icon={faInbox} />
                </p>
                <p className="level-item">
                    <FontAwesomeIcon icon={faQuestionCircle} />
                </p>
            </div>
        </nav>
    );
};
export default Nav;
