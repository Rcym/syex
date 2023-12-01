import React from 'react'
import mainSectionStyle from './MainSection.module.css'
import LeftMenu from './LeftMenu'
import MainFeed from './MainFeed'
import RightMenu from './RightMenu/RightMenu'

const MainSectionComponent = () => {
  return (
    <div className={mainSectionStyle.container}>
        <LeftMenu CurrentPage="Actualités" />
        <MainFeed />
        <RightMenu />
    </div>
  )
}

export default MainSectionComponent