import './App.css'
import { useState } from 'react';

function Card({contact, onDelete, onSave}){
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(contact.name);
  const [city, setCity] = useState(contact.city);  

  function handleSave() {
    setIsEditing(!isEditing)
    onSave(contact.id, name, city)
  }
  return (
    <>
      <div className="card text- w-96 bg-base-100 card-md shadow-sm">
        <div className="card-body">
          {
            !isEditing ? <>
              <h2 className="card-title">{contact.name}</h2>
              <p>{contact.city}</p>
              <div className="justify-end card-actions pt-4">
                <button className="btn btn-primary" onClick={() => setIsEditing(!isEditing)}>Edit</button>
              </div> 
            </> : <>
              <input type="text" className='input' placeholder="URL" value={name} onChange={(e) => setName(e.target.value)}></input>
              <input type="text" className='input' placeholder="URL" value={city} onChange={(e) => setCity(e.target.value)}></input>
              <div className='flex justify-between pt-4'>
                <button className="btn btn-error" onClick={() => onDelete(contact.id)}>Delete</button>
                <div className="justify-end card-actions">
                  <button className="btn btn-outline" onClick={() => setIsEditing(!isEditing)}>Cancel</button>
                  <button className="btn btn-primary" onClick={handleSave}>Save</button>
                </div>
              </div>
         
            </>
          }
        </div>  ‹
      </div>
    </>
  )
}

function App() {
  const data = [
    { "id": "1", "name": "Alice Johnson", "city": "New York" },
    { "id": "2", "name": "Bob Smith", "city": "Los Angeles" },
    { "id": "3", "name": "Charlie Brown", "city": "Chicago" },
    { "id": "4", "name": "David Williams", "city": "Houston" },
    { "id": "5", "name": "Emma Davis", "city": "Phoenix" },
    { "id": "6", "name": "Frank Miller", "city": "Philadelphia" },
    { "id": "7", "name": "Grace Wilson", "city": "San Antonio" },
    { "id": "8", "name": "Henry Moore", "city": "San Diego" },
    { "id": "9", "name": "Isabella Garcia", "city": "Dallas" },
    { "id": "10", "name": "Jack Martinez", "city": "San Jose" }
  ]
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [id, setId] = useState(11)

  const [contacts, setContacts] = useState(data) 
  
  function handleAddNewContact(){
    setContacts([...contacts, {"id": id, "name": name, "city": city}])
    setId(id + 1)
  }
  function handleDeleteContact(contactId) {
    setContacts(contacts.filter(contact => contact.id !== contactId))
  }
  function handleEditContact(contactId, newName, newCity){
    setContacts(contacts.map(contact => {
      if(contact.id === contactId){
        return {id: contactId, name: newName, city: newCity}
      } else {
        return contact
      }
    }))
  }

  return (
    <div>
      <h1 className='title'>Contact Book</h1>
      <p>Keep track of where your friends live</p>
      <label className="input">
        <span className="label">Name</span>
        <input type="text" placeholder="URL" value={name} onChange={(e) => setName(e.target.value)}/>
      </label>
      <label className="input">
        <span className="label">City</span>
        <input type="text" placeholder="URL" value={city} onChange={(e) => setCity(e.target.value)} />
      </label>
      <button className='btn btn-primary' onClick={handleAddNewContact}>Add contact</button>
      <div className='grid grid-cols-2 gap-4'>
        {contacts.map(contact => <Card key={contact.id} contact={contact} onDelete={handleDeleteContact} onSave={handleEditContact}/>)}
      </div>
    </div>
  )
}

export default App
