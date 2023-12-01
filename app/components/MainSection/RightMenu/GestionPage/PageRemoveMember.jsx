import React, {useState} from 'react'

const PageRemoveMember = ({isPageRemovingMember, setIsPageRemovingMember}) => {

    if(!isPageRemovingMember){
        return null
    } else return (
        <div className={`popupContainer`}>
            <div className="popupHeader">
                <h3>Retirer un membre</h3>
                <button className='exitBtn' onClick={() => setIsPageRemovingMember(false)}>X</button>
            </div>
            <div className="popupBody">
                <form>

                    <div className='popupInputElement'>
                        <p>Nom d'utilisateur</p>
                        <input type="text" name="username" />
                    </div>

                    <button className='submitBtn'>Retirer le membre</button>

                </form>
            </div>
        </div>

    
    )
}

export default PageRemoveMember