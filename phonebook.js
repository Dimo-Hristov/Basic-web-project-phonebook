const phonebook = [
	{
		name: 'pesho',
		number: '1234'
	},
	{
		name: 'gosho',
		number: '12345'
	}
];

/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/
function getContacts() {
	return phonebook.slice();
}