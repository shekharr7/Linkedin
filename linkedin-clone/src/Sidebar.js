import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';

function Sidebar() {

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
                <Avatar />
                <h2>Shekhar R</h2>
                <h4>shekhar.r008@gmail.com</h4>
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