import React from 'react'

const RemoveGroupe = ({isRemovingGroupe, setIsRemovingGroupe , GroupeName}) => {

    if (!isRemovingGroupe) {
        return null;
    } else {
        return (
            <div className={`popupContainer`}>
                <div className="popupHeader">
                    <h3>Suprimer le groupe</h3>
                    <button className='exitBtn' onClick={() => setIsRemovingGroupe(false)}>X</button>
                </div>
                <div className="popupBody">
                    <form>

                        {/* <div className='popupInputElement'>
                            <p>Nom du groupe</p>
                            <input type="text" name="groupeName" />
                        </div> */}

                        <h3>Veuilliez confirmer</h3>

                        <button className='submitBtn'>Suprimer le groupe</button>

                    </form>
                </div>
            </div>
        )


}

  
}

export default RemoveGroupe