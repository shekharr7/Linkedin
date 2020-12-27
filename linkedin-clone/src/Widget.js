import React from 'react';
import InfoIcon from '@material-ui/icons/Info'
import './Widget.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widget() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle('Things are getting pretty hot!', 'Top news')}
            {newsArticle('World is not enough', 'Trending')}
            {newsArticle('Its okay, Boy', 'RDR2')}
            {newsArticle('Happy new year', 'New year')}
        </div>
    )
}

export default Widget;