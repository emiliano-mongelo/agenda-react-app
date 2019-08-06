import React, { useState, useEffect } from 'react';
import { InputAdornment, Tabs, Tab, TextField } from '@material-ui/core';
import { Favorite, Person, Search } from '@material-ui/icons';
import { filter, propEq } from 'ramda';
import ContactList from '../components/ContactList.component';
import { getAll } from '../services/contacts.js';

function List ({ toggleLoading }) {
	const [showFavorites, setShowFavorites] = useState(0);
	const [filterText, setFilterText] = useState('');
	const [contacts, setContacts] = useState([]);
	const onChange = str => setFilterText(str);

	useEffect(() => {
		let ignore = false;
		async function fetchContacts() {
			const result = await getAll();
			console.log('RES', result);
			if (!ignore) setContacts(result);
		}
		fetchContacts();
		return () => { ignore = true; }
	}, []);

	const handleChange = (event, newValue) => {
		setShowFavorites(newValue);
	};

	const favourites = () => filter(propEq('favourite', true), contacts);

	return (
		<div className="contact-list-container">
			<div className="w-100 pv3">
				<Tabs value={showFavorites} onChange={handleChange}>
					<Tab id="tab-contacts" icon={<Person />} />
					<Tab id="tab-favorites" icon={<Favorite />} />
				</Tabs>

				<div className="ph2">
					<TextField
						id="input-with-icon-textfield"
						label="Search"
						value={filterText}
						onChange={onChange}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<Search />
								</InputAdornment>
							),
						}}
					/>

					{contacts.length && (
						<ContactList contacts={showFavorites ? favourites() : contacts} />
					)}
				</div>
			</div>
		</div>
	);
}

export default List;
