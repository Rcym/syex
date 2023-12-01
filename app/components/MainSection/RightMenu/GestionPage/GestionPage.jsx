'use client'

import React, {useState} from 'react'
import mainStyles from '../../MainSection.module.css'
import PageAddMember from './PageAddMember'
import PageRemoveMember from './PageRemoveMember'
import PageDeletePage from './PageDeletePage'

const GestionPage = () => {

    const [isPageAddingMember, setIsPageAddingMember] = useState(false)
    const [isPageRemovingMember, setIsPageRemovingMember] = useState(false)
    const [isPageDeletingPage, setIsPageDeletingPage] = useState(false)

    const handleGestionClick = (gestionType) => {
        switch(gestionType){
            case 'addMember':
                setIsPageRemovingMember(false)
                setIsPageDeletingPage(false)
                setIsPageAddingMember(true)
                break
            case 'removeMember':
                setIsPageAddingMember(false)
                setIsPageDeletingPage(false)
                setIsPageRemovingMember(true)
                break
            case 'deletePage':
                setIsPageAddingMember(false)
                setIsPageRemovingMember(false)
                setIsPageDeletingPage(true)
                break
            default:
                break
        }
    
    }
    

  return (
    <div className='commonContainer'>
        <h3>Gestion de la page</h3>
        <div className={mainStyles.gestionPageBtns}>
            <button onClick={() => {handleGestionClick('addMember')}} className={mainStyles.gestionPageBtn}>Ajouter un membre</button>
            <button onClick={() => {handleGestionClick('removeMember')}} className={mainStyles.gestionPageBtn}>Ajouter un membre</button>
            <button onClick={() => {handleGestionClick('deletePage')}} className={mainStyles.gestionPageBtn}>Suprimer la page</button>

            <PageAddMember isPageAddingMember={isPageAddingMember} setIsPageAddingMember={setIsPageAddingMember} />
            <PageRemoveMember isPageRemovingMember={isPageRemovingMember} setIsPageRemovingMember={setIsPageRemovingMember} />
            <PageDeletePage isPageDeletingPage={isPageDeletingPage} setIsPageDeletingPage={setIsPageDeletingPage} />
        </div>
    </div>
  )
}

export default GestionPage



