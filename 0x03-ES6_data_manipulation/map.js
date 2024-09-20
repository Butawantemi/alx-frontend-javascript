// Map to store contacts
const contacts = new Map();

// Add a contact.
contacts.set('Jessie', { phone: '213-555-1234', adress: '123 N 1st Ave' });
contacts.set('Hilary', { phone: '617-555-4321', address: '321 S 2nd St' });

console.log(contacts);

// Get Jessie's contact.
console.log(contacts.get('Jessie'));
