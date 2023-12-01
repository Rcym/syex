import React from 'react'

const AddMember = ({isAddingMember, setIsAddingMember , GroupeName}) => {

    if (!isAddingMember) {
        return null;
    } else {
        return (
            <div className={`popupContainer`}>
                <div className="popupHeader">
                    <h3>Ajouter un membre</h3>
                    <button className='exitBtn' onClick={() => setIsAddingMember(false)}>X</button>
                </div>
                <div className="popupBody">
                    <form>

                        <div className='popupInputElement'>
                            <p>Nom du groupe</p>
                            <input type="text" name="groupeName" />
                        </div>

                        <button className='submitBtn'>Ajouter le membre</button>

                    </form>
                </div>
            </div>
        )

    }
  
}

export default AddMember