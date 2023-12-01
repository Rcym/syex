import React from 'react'
import mainStyles from './MainSection.module.css'
import Image from 'next/image'
import Link from 'next/link'

const LeftMenuComponent = ({CurrentPage}) => {

  return (
    <div className={mainStyles.leftMenuContainer}>
        
        <Link href={'/home'}>
          <MenuTab CurrentPage={CurrentPage} pageName="Actualités" pageIcon="/home.svg" />
        </Link>

        <Link href={'/messagerie'}>
          <MenuTab CurrentPage={CurrentPage} pageName="Messagerie" pageIcon="/message_letter.svg" />
        </Link>

        <Link href={'/page_list'}>
          <MenuTab CurrentPage={CurrentPage} pageName="Pages" pageIcon="/home.svg" />
        </Link>

        <div className={mainStyles.devider}></div>

        {/* <div className={mainStyles.leftMenuElement}>
          <Image className={mainStyles.MenuElementIcon} src="/gear.svg" alt="" width={25} height={25} />
          <h3>Parametres</h3>
        </div> */}

        <div className={`${mainStyles.leftMenuElement} ${mainStyles.dcnx}`}>
          <Image className={mainStyles.MenuElementIcon} src="/dcnx.svg" alt="" width={25} height={25} />
          <h3>Deconnexion</h3>
        </div>


    </div>
  )
}

export default LeftMenuComponent



const MenuTab = ({CurrentPage, pageName, pageIcon}) => {
  
    if (CurrentPage === pageName) {
      return (
        <div className={`${mainStyles.leftMenuElement} ${mainStyles.leftMenuElementActive}`}>
          <Image className={mainStyles.MenuElementIcon} src={pageIcon} alt="search" width={25} height={25} />
          <h3>{pageName}</h3>
        </div>
      )
    } else {
      return (
        <div className={mainStyles.leftMenuElement}>
          <Image className={mainStyles.MenuElementIcon} src={pageIcon} alt="search" width={25} height={25} />
          <h3>{pageName}</h3>
        </div>
      )
    }
}
