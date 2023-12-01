import React, {useState} from 'react'

const PageAddMember = ({isPageAddingMember, setIsPageAddingMember}) => {

    if(!isPageAddingMember){
        return null
    } else return (
        <div className={`popupContainer`}>
            <div className="popupHeader">
                <h3>Ajouter un membre</h3>
                <button className='exitBtn' onClick={() => setIsPageAddingMember(false)}>X</button>
            </div>
            <div className="popupBody">
                <form>

                    <div className='popupInputElement'>
                        <p>Nom d'utilisateur</p>
                        <input type="text" name="username" />
                    </div>

                    <button className='submitBtn'>Ajouter le membre</button>

                </form>
            </div>
        </div>

    
    )
}

export default PageAddMember