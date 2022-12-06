const phonebook = require('../phonebook');
const Contact = require('../models/Contact');

module.exports = {
  index: (req, res) => {
    const contacts = phonebook.getContacts();

    res.render('index', { contacts });
    // TODO: load index page
  },
  addPhonebookPost: (req, res) => {
    // TODO: add a phonebook object to the array
    // get input from client
    let name = req.body.name;
    let number = req.body.number;

    // create model
    const contact = new Contact(name, number);

    // push model to "db"
    phonebook.addContact(contact);

    // redirect to homepage

    res.redirect('/')
  }
}