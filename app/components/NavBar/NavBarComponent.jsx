import React from 'react'
import navbarStyles from './NavBarStyle.module.css'
import SearchBar from './SearchBar'
import Image from 'next/image'


const NavBarComponent = () => {

  var iconSize = 20     // icon size

  return (
    <div className={navbarStyles.container}>
      <h3 className={navbarStyles.logo}>Projet SYEX</h3>

      <SearchBar />

      <div className={navbarStyles.navbarOptions}>
        <div className={navbarStyles.navbarBtn}>
          <Image className={navbarStyles.optionIcon} src="/plus.svg" alt="+" width={iconSize} height={iconSize} />
        </div>
        <div className={navbarStyles.navbarBtn}>
          <Image className={navbarStyles.optionIcon} src="/notif.svg" alt="+" width={iconSize} height={iconSize} />
        </div>
        <div className={navbarStyles.navbarBtn}>
          <Image className={navbarStyles.optionIcon} src="/message.svg" alt="+" width={iconSize} height={iconSize} />
        </div>
        <div className={navbarStyles.navbarBtn}>
          <Image className={navbarStyles.optionIcon} src="/profile.svg" alt="+" width={iconSize} height={iconSize} />
        </div>
      </div>

    </div>
  )
}

export default NavBarComponent