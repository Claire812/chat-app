import React from 'react';
import './contact.css';
import PropTypes from 'prop-types';


/*function Contact (props) {
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
}*/

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: props.online
        };
    }

    render() {
        return (<figure className="Contact">
                <img className="avatar"
                     src={this.props.avatar}
                     alt={this.props.name}>
                </img>
                <div>
                    <h4 className="name">
                        {this.props.name}
                    </h4>
                    <div className="status" onClick={event => {
                        const newOnline = !this.state.online;
                        this.setState({online: newOnline});
                    }}>
                        <div className={ this.state.online ? 'status-online' : 'status-offline'}></div>
                        <p className="status-text">{ this.state.online ? 'online' : 'offline'}</p>
                    </div>
                </div>
            </figure>

        )
    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
};

export default Contact;
