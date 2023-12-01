import React from 'react'

const CreationGroupePopUP = ({isCreatingGroupe, setIsCreatingGroupe}) => {


    if (!isCreatingGroupe) {
        return null;
    } else  {
        return (
            <div className={`popupContainer`}>

                <div className="popupHeader">
                    <h3>Création de page</h3>
                    <button className='exitBtn' onClick={() => setIsCreatingGroupe(false)}>X</button>
                </div>

                <div className="popupBody">
                    <form>
                        <div className='popupInputElement'>
                            <p>Nom du groupe</p>
                            <input type="text" name="groupeName" />
                        </div>

                        <div className='popupInputElement'>
                            <p>Visibilité</p>
                            <select name="groupeVisibility" id="groupeVisibility">
                                <option value="public">Public</option>
                                <option value="prive">Privé</option>
                            </select>
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

export default CreationGroupePopUP