import React from 'react';
import './contact.css';

const online = true;
function Contact () {
    return (<figure className="Contact">
        <img className="avatar"
        src="https://randomuser.me/api/portraits/women/8.jpg"
        alt="Ramona Armstrong">
        </img>
        <div>
        <h4 className="name">
        Ramona Armstrong
        </h4>
        <div className="status">
        <div className={online ? 'status-online' : 'status-offline'}></div>
        <p className="status-text">{online ? 'online' : 'offline'}</p>
        </div>
        </div>
    </figure>

    );
}

export default Contact;