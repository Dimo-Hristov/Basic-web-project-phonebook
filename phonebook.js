const phonebook = [];

/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/
function getContacts() {
	return phonebook.slice();
}

function addContact(contact) {
	phonebook.push(contact);
}

module.exports = {
	getContacts,
	addContact,
}