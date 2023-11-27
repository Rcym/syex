import React from 'react'
import mainStyles from '../../MainSection.module.css'

const MightKnowPerson = ({ personName }) => {
  return (
    <div className={mainStyles.mightKnowPersonContainer}>
        <p>{personName}</p>
        <button>Ajouter</button>
    </div>
  )
}

export default MightKnowPerson