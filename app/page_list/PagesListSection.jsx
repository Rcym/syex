'use client'

import React, {useState} from 'react'
import pagesStyle from './pagesStyle.module.css'
import PageElement from './PageElement'
import CreationGroupePopUP from './CreationGroupePopUP'


const filtrerLesPages = (pages, recherche) => {
    if (recherche === "") {
        return pages;
    }
    return pages.filter((page) => {
        return page.PageName.toLowerCase().includes(recherche);
    })

}


const PagesListSection = () => {

    const pages = [
        {PageName: "Page 1", PageType: "Public", PageMembers: 12, PageImg: "https://picsum.photos/200", estMembre: false},
        {PageName: "abcdef", PageType: "Public", PageMembers: 12, PageImg: "https://picsum.photos/300", estMembre: true},
        {PageName: "abcdrrrr 3", PageType: "Privé", PageMembers: 12, PageImg: "https://picsum.photos/400", estMembre: true},
        {PageName: "Page 4", PageType: "Public", PageMembers: 12, PageImg: "https://picsum.photos/500", estMembre: false},
        {PageName: "egap 8", PageType: "Privé", PageMembers: 12, PageImg: "https://picsum.photos/600", estMembre: false},
        {PageName: "Page 6", PageType: "Privé", PageMembers: 12, PageImg: "https://picsum.photos/100", estMembre: true},
        {PageName: "Page 7", PageType: "Public", PageMembers: 12, PageImg: "https://picsum.photos/700", estMembre: false},
    ]

    // handle recherche
    const [recherche, setRecherche] = useState("");
    const pagesFiltres = filtrerLesPages(pages, recherche);

    // handle creation groupe
    const [isCreatingGroupe, setIsCreatingGroupe] = useState(false);


  return (
    <div className={pagesStyle.pagesListSection}>
        <CreationGroupePopUP isCreatingGroupe={isCreatingGroupe} setIsCreatingGroupe={setIsCreatingGroupe} />
        
        <div className={pagesStyle.pagesListContainer}>

            <h2 className={pagesStyle.pageTitle}>Explorer les pages</h2>


            <div className={pagesStyle.pagesListSearch}>
                <input 
                    className={pagesStyle.recherche}
                    type="text" placeholder="Rechercher une page"
                    onChange={(e) => setRecherche(e.target.value)}
                />
            </div>


            <div className={pagesStyle.divider}></div>
            <button className={pagesStyle.addPageBtn} onClick={() => {setIsCreatingGroupe(true)}}>Créer un groupe</button>


            {pagesFiltres.map((page, index) => (
                <PageElement
                    key={index}
                    pageName={page.PageName}
                    pageType={page.PageType}
                    pageMembers={page.PageMembers}
                    pageImg={page.PageImg}
                    estMembre={page.estMembre}
                />
            ))}
        </div>
    </div>
  )
}

export default PagesListSection