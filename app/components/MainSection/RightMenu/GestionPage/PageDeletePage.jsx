import React, {useState} from 'react'

const PageDeletePage = ({isPageDeletingPage, setIsPageDeletingPage}) => {

    if(!isPageDeletingPage){
        return null
    } else return (
        <div className={`popupContainer`}>
            <div className="popupHeader">
                <h3>Superssion de la page</h3>
                <button className='exitBtn' onClick={() => setIsPageDeletingPage(false)}>X</button>
            </div>
            <div className="popupBody">
                <form>

                    {/* <div className='popupInputElement'>
                    </div> */}
                        <h2>Veuillez confirmer</h2>

                    <button className='submitBtn'>SUPPRIMER LA PAGE</button>

                </form>
            </div>
        </div>

    
    )
}

export default PageDeletePage