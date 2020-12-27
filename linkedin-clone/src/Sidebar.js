import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import {useSelector} from 'react-redux';
import {selectUser} from './features/userSlice';

function Sidebar() {
    const user = useSelector(selectUser);
    const { displayName, email, photoUrl } = user;
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );


    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
                <Avatar src={photoUrl}>{email[0]}</Avatar>
                <h2>{displayName}</h2>
                <h4>{email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">200</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">150</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('front-end-coding')}
                {recentItem('learning')}
                {recentItem('reactjs')}
                {recentItem('react-redux')}
            </div>
        </div>
    )
}

export default Sidebar;