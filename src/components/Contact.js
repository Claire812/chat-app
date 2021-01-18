import React from 'react';
import './contact.css';
import PropTypes from 'prop-types';


function Contact (props) {
    return (<figure className="Contact">
        <img className="avatar"
        src={props.avatar}
        alt="Ramona Armstrong">
        </img>
        <div>
        <h4 className="name">
        {props.name}
        </h4>
        <div className="status">
        <div className={ props.online ? 'status-online' : 'status-offline'}></div>
        <p className="status-text">{ props.online ? 'online' : 'offline'}</p>
        </div>
        </div>
    </figure>

    );
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
};

export default Contact;