import React from 'react'
import navbarStyles from './NavBarStyle.module.css'
import Image from 'next/image'

const SearchBar = () => {
  return (
    <div className={navbarStyles.searchBarContainer}>
        <Image className={navbarStyles.searchIcon} src="/search.svg" alt="search" width={25} height={25} />
        <input type="text" placeholder='Chercher un Ami, Group, Post ...' className={navbarStyles.searchInput}/>
    </div>
  )
}

export default SearchBar