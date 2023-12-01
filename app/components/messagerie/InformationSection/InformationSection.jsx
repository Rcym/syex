import React, {useState} from 'react'
import msgStyle from '../msgStyles.module.css'
import ProfileImg from '../../profileImg/ProfileImg'
import GroupeMember from './GroupeMember'
import AddMember from './AddMember'
import RemoveMember from './RemoveMember'
import RemoveGroupe from './RemoveGroupe'

const InformationSection = ({contactToInfo, isGroup,}) => {

  const groupeMembers = [
    {name: 'JohnDoe',profilePic: '/profile.svg'},
    {name: 'JohnDoe',profilePic: '/profile.svg'},
    {name: 'JohnDoe',profilePic: '/profile.svg'},
    {name: 'JohnDoe',profilePic: '/profile.svg'},
    {name: 'JohnDoe',profilePic: '/profile.svg'},
  ]

  const CreateurDuGroupe = "john doe"
  const isCreateurDuGoupe = true

  // popup gestion du groupe
  const [isAddingMember, setIsAddingMember] = useState(false)
  const [isRemovingMember, setIsRemovingMember] = useState(false)
  const [isRemovingGroup, setIsRemovingGroup] = useState(false)

  const handleGestionClick = (clickedGestion) => {
    switch (clickedGestion) {
      case "addMember":
        setIsRemovingGroup(false)
        setIsRemovingMember(false)
        setIsAddingMember(true)
        break;
      case "removeMember":
        setIsRemovingGroup(false)
        setIsAddingMember(false)
        setIsRemovingMember(true)
        break;
      case "removeGroup":
        setIsAddingMember(false)
        setIsRemovingMember(false)
        setIsRemovingGroup(true)
        break;
      default:
        break;
  }
}





  if (isGroup) {
    return (
      <div className={msgStyle.InformationSection}>
          <h3>informations</h3>
  
          <div className={msgStyle.infoSectionSpacer}></div>
          
          <ProfileImg className={msgStyle.contactImg} imgPath="/profile.svg" size={75} status="online" />
          <p className={msgStyle.informationContactName}>Groupe1</p>
  
          <div className={msgStyle.infoSectionSpacer}></div>

          
          <div className={msgStyle.informationElement}>
            <p className={msgStyle.infoTitle}>Créateur :</p>
            <p className={msgStyle.infoContent}>{CreateurDuGroupe}</p>
          </div>

          {
            isCreateurDuGoupe && (
              <div className={msgStyle.informationElement}>
                <button onClick={() => {handleGestionClick("addMember")}} className={msgStyle.grpGestionBtn}>Ajouter un membre</button>
                <button onClick={() => {handleGestionClick("removeMember")}} className={msgStyle.grpGestionBtn}>Supprimer un membre</button>
                <button onClick={() => {handleGestionClick("removeGroup")}} className={msgStyle.grpGestionBtn}>Suprimer le groupe</button>

                <AddMember isAddingMember={isAddingMember} setIsAddingMember={setIsAddingMember} />
                <RemoveMember isRemovingMember={isRemovingMember} setIsRemovingMember={setIsRemovingMember} />
                <RemoveGroupe isRemovingGroupe={isRemovingGroup} setIsRemovingGroupe={setIsRemovingGroup} />
              </div>
            )
          }
          



          <div className={msgStyle.informationElement}>
            <p className={msgStyle.infoTitle}>Membres :</p>
            {groupeMembers.map((member, index) => (
              <GroupeMember 
                key={index}
                memberName={member.name}
                memberPic={member.profilePic}
              />
            ))}
          </div>
      </div>
    )





    } else {   
      



      // contact information


      return (
        <div className={msgStyle.InformationSection}>
            <h3>informations</h3>
    
            <div className={msgStyle.infoSectionSpacer}></div>
            
            <ProfileImg className={msgStyle.contactImg} imgPath="/profile.svg" size={75} status="online" />
            <p className={msgStyle.informationContactName}>JohnDoe</p>
    
            <div className={msgStyle.infoSectionSpacer}></div>
    
            <div className={msgStyle.informationElement}>
              <p className={msgStyle.infoTitle}>address e-mail :</p>
              <p className={msgStyle.infoContent}>address@email.com</p>
            </div>
            <div className={msgStyle.informationElement}>
              <p className={msgStyle.infoTitle}>Numéro de téléphone :</p>
              <p className={msgStyle.infoContent}>0123456789</p>
            </div>
        </div>
      )
    }
  }

export default InformationSection



