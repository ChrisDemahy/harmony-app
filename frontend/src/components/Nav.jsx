import React, { useState } from "react";
// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faThumbtack,
    faBell,
    faUserFriends,
    faInbox,
    faQuestionCircle,
    faSearch,
    faHashtag,
} from "@fortawesome/free-solid-svg-icons";
import Inbox from "../containers/Inbox/Inbox";

import { useDispatch, useSelector } from "react-redux";

const Nav = () => {
    const [isActive, setIsActive] = useState(false);
    const currentChatroom = useSelector(
        (state) => state.chatroomState.currentChatroom
    );
    // console.log(chatrooms);

    const handleInbox = () => {
        setIsActive(!isActive);
    };
    return (
        // Main container
        <>
            <nav className="level is-dark is-fixed-top">
                {/*  Left side */}
                <div className="level-left">
                    {currentChatroom && (
                        <p className="level-item">
                            <FontAwesomeIcon
                                style={{ height: "20px", width: "20px" }}
                                icon={faHashtag}
                            />
                            {currentChatroom.name}
                        </p>
                    )}
                </div>

                {/*  Right side */}
                <div className="level-right">
                    <p className="level-item">
                        <FontAwesomeIcon
                            style={{ height: "20px", width: "20px" }}
                            icon={faBell}
                        />
                    </p>

                    <p className="level-item">
                        <FontAwesomeIcon
                            style={{ height: "20px", width: "20px" }}
                            icon={faThumbtack}
                        />
                    </p>
                    <p className="level-item">
                        <FontAwesomeIcon
                            style={{ height: "20px", width: "20px" }}
                            icon={faUserFriends}
                        />
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
                                    <FontAwesomeIcon
                                        style={{
                                            height: "20px",
                                            width: "20px",
                                        }}
                                        icon={faSearch}
                                    />
                                </button>
                            </p>
                        </div>
                    </div>
                    <p className="level-item">
                        <span onClick={handleInbox}>
                            <FontAwesomeIcon
                                style={{ height: "20px", width: "20px" }}
                                icon={faInbox}
                            />
                        </span>
                        {isActive && <Inbox />}
                    </p>
                    <p className="level-item">
                        <FontAwesomeIcon
                            style={{ height: "20px", width: "20px" }}
                            icon={faQuestionCircle}
                        />
                    </p>
                </div>
            </nav>
        </>
    );
};
export default Nav;
