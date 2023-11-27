import React from 'react'
import mainStyles from '../../MainSection.module.css'
import Image from 'next/image'

const TrendEelement = ({trendTitle, nbPosts}) => {
  return (
    <div className={mainStyles.trendElement}>
        <Image className={mainStyles.trendIcon} src="/hashtag.svg" alt="search" width={25} height={25} />
        <div className={mainStyles.trendElementCore}>
            <h4 className={mainStyles.trendElementTitle}>{trendTitle}</h4>
            <p className={mainStyles.trendElementSubtitle}>{nbPosts} posts</p>
        </div>
        
    </div>
  )
}

export default TrendEelement