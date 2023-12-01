import React from 'react'

const AddContact = ({isAddingContact, setIsAddingContact}) => {

    if (!isAddingContact) {
        return null;
    } else {
        return (
            <div className={`popupContainer`}>
                <div className="popupHeader">
                    <h3>Ajouter un contact</h3>
                    <button className='exitBtn' onClick={() => setIsAddingContact(false)}>X</button>
                </div>
                <div className="popupBody">
                    <form>

                        <div className='popupInputElement'>
                            <p>Nom d'utilisateur</p>
                            <input type="text" name="groupeName" />
                        </div>

                        <button className='submitBtn'>Ajouter</button>

                    </form>
                </div>
            </div>
        )
    }
}

export default AddContact