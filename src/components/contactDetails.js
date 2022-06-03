import React from 'react';
import { Link } from 'react-router-dom';
// import img_avatar from '../images/img_avatar.png';

const ContactDetail = (props) => {
	const { name, email } = props.location.state.contact;
	return (
		<div className="main">
			<div className="ui card center">
				<div className="image">
					<img src="https://www.w3schools.com/howto/img_avatar.png" alt="i" />
				</div>
				<div className="content">
					<div className="header">{name}</div>
					<div className="description">{email}</div>
				</div>
			</div>
			<div className="center-div">
				<Link to="/">
					<button className="ui button blue center">Back to Contact List</button>
				</Link>
			</div>
		</div>
	);
};

export default ContactDetail;
