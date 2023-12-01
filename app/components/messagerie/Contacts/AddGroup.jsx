import React from 'react'

const AddGroup = ({isAddingGroup, setIsAddingGroup}) => {

    if (!isAddingGroup) {
        return null;
    } else {
        return (
            <div className={`popupContainer`}>
                <div className="popupHeader">
                    <h3>Création de groupe</h3>
                    <button className='exitBtn' onClick={() => setIsAddingGroup(false)}>X</button>
                </div>
                <div className="popupBody">
                    <form>

                        <div className='popupInputElement'>
                            <p>Nom du groupe</p>
                            <input type="text" name="groupeName" />
                        </div>

                        <div className='popupInputElement'>
                            <p>Image de couverture</p>
                            <input type="file" name="groupeImg" />
                        </div>

                        <button className='submitBtn'>Créer le groupe</button>

                    </form>
                </div>
            </div>
        )
    }
}

export default AddGroup