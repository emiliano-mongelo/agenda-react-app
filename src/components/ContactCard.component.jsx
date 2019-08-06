import React from 'react';
import { compose, join, map, head, split } from 'ramda';

const getInitials = compose(
	join(''),
	map(head),
	split(' ')
);

function ContactCard(props) {
	const { contact } = props;
	console.log('contact', contact);
	return (
		<div className="contact-card flex flex-auto items-center justify-between w-100 bg-white pv3">
			<section className="w-30 tc">
				{contact.avatar ? (
					<img className="mw3 br-pill" src={contact.avatar} />
				) : (
					<span className="br-pill w-100 b--gray ba pa3">{ getInitials(contact.fullName) }</span>
				)}
			</section>
			<section class="w-70">
				<span class="db b">{ contact.fullName }</span>
				{contact.organization && (
					<span className="db f6">{ contact.organization }}</span>
				)}
				{contact.phones.mobile && (
					<span className="db f7">Mobile: {contact.phones.mobile}</span>
				)}
				{contact.phones.home && (
					<span className="db f7">Home: { contact.phones.home }</span>
				)}
			</section>
		</div>
	);
}

export default ContactCard;
