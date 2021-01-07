import React, { useEffect } from "react";
import User from "../components/User";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../lib/apiClient";

const UserContainer = () => {
    const users = useSelector((state) => state.userState.users);
    console.log(users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers);
    }, [dispatch]);

    return (
        <aside className="menu">
            <p className="menu-label">Text Channels</p>
            <ul className="menu-list">
                {users &&
                    users.map((user) => {
                        return <User user={user} />;
                    })}
            </ul>
            <p className="menu-label">Voice Channels</p>
            <ul className="menu-list">
                <li>
                    {/* <a>Team 1</a> */}
                </li>
                {/* <li>
        <a className="is-active">Manage Your Team</a>
        <ul>
            <li>
                <a>Members</a>
            </li>
            <li>
                <a>Plugins</a>
            </li>
            <li>
                <a>Add a member</a>
            </li>
        </ul>
    </li> */}
            </ul>
        </aside>
    );
};
export default UserContainer;
