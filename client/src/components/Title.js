import React from 'react'
import PropTypes from 'prop-types'
import "../styles/title.css"

export const Title = ({content}) => (
    <div className="title font row-center">
        {content}
        <img src='favicon.jpg' alt="Icon" className="icon-image"/>
    </div>
);

Title.propTypes = {
    content: PropTypes.string.isRequired
};

export default Title;