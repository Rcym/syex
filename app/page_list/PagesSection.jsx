import React from 'react'
import pagesStyle from './pagesStyle.module.css'
import LeftMenuComponent from '../components/MainSection/LeftMenu'
import PagesListSection from './PagesListSection'

const PagesSection = () => {
  return (
    <div className={pagesStyle.pagesSection}>
      <LeftMenuComponent CurrentPage="Pages" />
      <PagesListSection />
    </div>
  )
}

export default PagesSection