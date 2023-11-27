import React from 'react'
import TrendEelement from './TrendEelement'
import mainStyles from '../../MainSection.module.css'

const Trends = () => {
  return (
    <div className='commonContainer'>
        <h3>Trends</h3>
        <div className={mainStyles.trendsList}>
            <TrendEelement trendTitle='Web Developement' nbPosts={24} />
            <TrendEelement trendTitle='Web Developement' nbPosts={24} />
            <TrendEelement trendTitle='Web Developement' nbPosts={24} />
            <TrendEelement trendTitle='Web Developement' nbPosts={24} />

        </div>
    </div>
  )
}

export default Trends