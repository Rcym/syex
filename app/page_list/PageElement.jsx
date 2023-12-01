import React from 'react'
import pagesStyle from './pagesStyle.module.css'

const PageElement = ({pageName, pageType, pageMembers, pageImg, estMembre}) => {

  return (
    <div className={`commonContainer ${pagesStyle.pageElement}`}>

        <div className={pagesStyle.pageElementImgContainer}>
            <img className={pagesStyle.pageElementImg} src={pageImg} alt="" />
        </div>
        <div className={pagesStyle.pageElementInfo}>

            <h4 className={pagesStyle.pageElementName}>{pageName}</h4>
            <div className={pagesStyle.pageElementInfoList}>
                <p>Page {pageType}</p>
                <p>{pageMembers} membres</p>
            </div>

            {estMembre ? (
                <button className={pagesStyle.joinBtn} disabled>Quitter</button>
            ) : (
                <button className={pagesStyle.joinBtn}>Rejoindre</button>
            )}
            
        </div>
        
    </div>
  )
}

export default PageElement