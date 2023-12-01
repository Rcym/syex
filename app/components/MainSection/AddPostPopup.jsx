import React, {useState} from 'react'

const AddPostPopup = ({isAddingPost, setIsAddingPost}) => {

    if (!isAddingPost) {
        return null
    } else {
        return (
            <div className={`popupContainer widerBody`}>

                <div className="popupHeader">
                    <h3>Rédaction du post</h3>
                    <button className='exitBtn' onClick={() => setIsAddingPost(false)}>X</button>
                </div>

                <div className="popupBody">
                    <form>

                        <textarea name="postRedaction" id="" cols="100" rows="10"></textarea>
                        <div className='popupInputElement'>
                            <p>Ajouter une image</p>
                            <input type="file" name="groupeImg" />
                        </div>

                        <button className='submitBtn'>Créer le groupe</button>

                    </form>

                </div>
            </div>
        )
    }
}

export default AddPostPopup