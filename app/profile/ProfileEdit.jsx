import React from 'react'

const ProfileEdit = ({isEditingProfile, setIsEditingProfile, userInfo}) => {

    if (!isEditingProfile) {
        return null
    } else {
        return (
            <div className={`popupContainer`}>
                <div className="popupHeader">
                    <h3>Ajouter un membre</h3>
                    <button className='exitBtn' onClick={() => setIsEditingProfile(false)}>X</button>
                </div>
                <div className="popupBody">
                    <form>

                        <div className='popupInputElement'>
                            <p>Nom d'utilisateur</p>
                            <input type="text" name="username" value={userInfo.username} disabled/>
                        </div>
                        <div className='popupInputElement'>
                            <p>Prénom</p>
                            <input type="text" name="username" value={userInfo.firstname}/>
                        </div>
                        <div className='popupInputElement'>
                            <p>Nom</p>
                            <input type="text" name="username" value={userInfo.lastname}/>
                        </div>
                        <div className='popupInputElement'>
                            <p>Email</p>
                            <input type="text" name="username" value={userInfo.email}/>
                        </div>
                        <div className='popupInputElement'>
                            <p>numéro de téléphone</p>
                            <input type="text" name="username" value={userInfo.phone}/>
                        </div>

                        <button className='submitBtn'>Ajouter le membre</button>

                    </form>
                </div>
            </div>
        )
    }
}

export default ProfileEdit