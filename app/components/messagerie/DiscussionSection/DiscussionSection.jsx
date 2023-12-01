import React from 'react'
import msgStyle from '../msgStyles.module.css'
import DiscussionTop from './DiscussionTop'
import DiscussionCore from './DiscussionCore'
import DiscussionBottom from './DiscussionBottom'

const DiscussionSection = () => {
  
  return (
    <div className={msgStyle.discussionSection}>
      <DiscussionTop />
      <DiscussionCore />
      <DiscussionBottom />
    </div>
  )
}

export default DiscussionSection