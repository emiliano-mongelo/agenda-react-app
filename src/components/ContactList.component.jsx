import React from 'react';
import { groupBy } from 'ramda';
import ContactCard from './ContactCard.component';

const sortAlphabetically = groupBy(({ fullName }) => fullName[0]);

const renderAlphabeticList = contacts => {
  return Object.keys(contacts).map(key => {
  	console.log('key', key);
  	console.log('items', contacts[key]);
  	return (
			<div key={key}>
				<span className="pa2 db">{ key }</span>
				<div className="shadow-4">
					{contacts[key].map((contact, cid) => (
						<div key={cid} className={`${cid < contacts[key].length - 1 ? 'bb' : ''} b--light-gray`}>
							<ContactCard contact={contact} />
						</div>
					))}
				</div>
			</div>
		)
  });
};

function ContactList(props) {
  const { history, toggleLoading, contacts } = props;
  const sortedAlphabetically = sortAlphabetically(contacts);

  return <div className="contact-list-wrapper">{renderAlphabeticList(sortedAlphabetically)}</div>;
}

export default ContactList;
