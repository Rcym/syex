import React from 'react'

const RemoveMember = ({isRemovingMember, setIsRemovingMember , GroupeName}) => {

    if (!isRemovingMember) {
        return null;
    } else {
        return (
            <div className={`popupContainer`}>
                <div className="popupHeader">
                    <h3>Exlure un membre</h3>
                    <button className='exitBtn' onClick={() => setIsRemovingMember(false)}>X</button>
                </div>
                <div className="popupBody">
                    <form>

                        <div className='popupInputElement'>
                            <p>Nom du groupe</p>
                            <input type="text" name="groupeName" />
                        </div>

                        <button className='submitBtn'>Exlure le membre</button>

                    </form>
                </div>
            </div>
        )
    }

}

export default RemoveMember