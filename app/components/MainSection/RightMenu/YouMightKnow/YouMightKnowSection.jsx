import React from 'react'
import mainStyles from '../../MainSection.module.css'
import MightKnowPerson from './MightKnowPerson'

const YouMightKnowSection = () => {
  return (
    <div className={`commonContainer ${mainStyles.mightKnowSectionContainer}`}>
        <h3>Vous connaissez peut étre</h3>
        <MightKnowPerson personName='John Doe' />
        <MightKnowPerson personName='John Doe' />
        <MightKnowPerson personName='John Doe' />
        <MightKnowPerson personName='John Doe' />
    </div>
  )
}

export default YouMightKnowSection