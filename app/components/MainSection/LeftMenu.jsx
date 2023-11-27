import React from 'react'
import mainStyles from './MainSection.module.css'
import Image from 'next/image'

const LeftMenuComponent = () => {
  return (
    <div className={mainStyles.leftMenuContainer}>
        <div className={mainStyles.leftMenuElement}>
          <Image className={mainStyles.MenuElementIcon} src="/home.svg" alt="search" width={25} height={25} />
          <h3>Actualités</h3>
        </div>

        <div className={mainStyles.leftMenuElement}>
          <Image className={mainStyles.MenuElementIcon} src="/message_letter.svg" alt="search" width={25} height={25} />
          <h3>Messagerie</h3>
        </div>

        <div className={mainStyles.leftMenuElement}>
          <Image className={mainStyles.MenuElementIcon} src="/group.svg" alt="search" width={25} height={25} />
          <h3>Groupes</h3>
        </div>

        <div className={mainStyles.leftMenuElement}>
          <Image className={mainStyles.MenuElementIcon} src="/page.svg" alt="search" width={25} height={25} />
          <h3>Pages</h3>
        </div>

        <div className={mainStyles.devider}></div>

        <div className={mainStyles.leftMenuElement}>
          <Image className={mainStyles.MenuElementIcon} src="/gear.svg" alt="search" width={25} height={25} />
          <h3>Parametres</h3>
        </div>
    </div>
  )
}

export default LeftMenuComponent