import React, { useState } from "react";


function Agenda() {

    const [contacts, setContacts] = useState([]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [editingContact, setEditingContact] = useState(null);
   

const addContact = (e) => {
    e.preventDefault();

    if (newName !== "" && newNumber !== "") {
        setContacts([...contacts, { name: newName, number: newNumber }]);
        setNewName("");
        setNewNumber("");
    }
}

const deleteContact = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
}

const modifyContact = (index, newName, newNumber) => {
    const newContacts = [...contacts];
    newContacts[index] = { name: newName, number: newNumber };
    setContacts(newContacts);
    setEditingContact(null);
    setNewName("");
    setNewNumber("");
}

const updateNewName = (e) => {
    setNewName(e.target.value);
}

const updateNewNumber = (e) => {
    setNewNumber(e.target.value);
}

    return (
        <div className="container">
            <h3 className="mt-5">Lista de contactos</h3>
            <ul className="list-group">
                {contacts.map((contacts, index) => (
                    <li className="list-group-item" key={index}>
                        {contacts.name} -- {contacts.number}
                        <button className="btn btn-danger mx-3" onClick={() => deleteContact(index)}>Eliminar</button>
                        <button className="btn btn-warning" onClick={() => setEditingContact(index)}>Modificar</button>
                    </li>
                ))}
            </ul>

            {editingContact !== null && 
            <form onSubmit={(e) => {
                e.preventDefault();
                modifyContact(editingContact, newName, newNumber)
            }}>

                <h3 className="mt-5">Modificar contacto:</h3>
                <div className="col-6">
                    <label htmlFor="modify-name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="modify-name" value={newName} onChange={updateNewName}></input>
                </div>

                <div className="col-6">
                    <label htmlFor="modify-phoneNumber" className="form-label">Número de teléfono:</label>
                    <input type="tel" className="form-control" id="modify-phoneNumber" pattern="[0-9]{9}" value={newNumber} onChange={updateNewNumber}></input>
                </div>

                <button type="submit" className="btn btn-warning mt-3">Modificar</button>
            </form>}

            <h3 className="mt-5">Crear contacto nuevo:</h3>
            <form onSubmit={addContact}>
                <div className="col-6">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control"id="name" value={newName} onChange={updateNewName}></input>
                </div>

                <div className="col-6">
                    <label htmlFor="phoneNumber" className="form-label">Número de teléfono:</label>
                    <input type="tel" className="form-control" id="phoneNumber" pattern="[0-9]{9}" value={newNumber} onChange={updateNewNumber}></input>
                </div>
                
                <button type="submit" className="btn btn-success mt-3">Agregar a la agenda</button>
            </form>
        </div>
    )
}

export default Agenda;

