'use client'

import React, {useState} from 'react'
import mainStyles from '../components/MainSection/MainSection.module.css'
import ProfileImg from '../components/profileImg/ProfileImg'
import ProfileEdit from './ProfileEdit'


const ProfileHeader = ({userInfo}) => {

    const isOwnProfile = true

    const [isEditingProfile, setIsEditingProfile] = useState(false)

    return (
        <div className={`commonContainer ${mainStyles.profileHeader}`}>

            <div className={mainStyles.profileHeaderImg}>
                <ProfileImg imgPath={userInfo.profilePicutre} size={110} status="offline" />
                <h3 className={mainStyles.usernameTitle}>{userInfo.username}</h3>
            </div>
            
            <div className={mainStyles.profileHeaderInfos}>
                <div className={mainStyles.profileInfo}>
                    <p className={mainStyles.infoTitle}>Full name</p>
                    <p className={mainStyles.info}>{userInfo.firstname} {userInfo.lastname}</p>
                </div>
                <div className={mainStyles.profileInfo}>
                    <p className={mainStyles.infoTitle}>Adresse Email</p>
                    <p className={mainStyles.info}>{userInfo.email}</p>
                </div>
                <div className={mainStyles.profileInfo}>
                    <p className={mainStyles.infoTitle}>numéro de téléphone</p>
                    <p className={mainStyles.info}>{userInfo.phone}</p>
                </div>
                <div className={mainStyles.profileInfo}>
                    <p className={mainStyles.infoTitle}>date de naissance</p>
                    <p className={mainStyles.info}>{userInfo.dateOfBirth}</p>
                </div>

                <div className={mainStyles.profileBtns}>
                    {isOwnProfile && <button onClick={() => setIsEditingProfile(true)} className={mainStyles.profileBtn}>Editer le profil</button>}
                    <ProfileEdit isEditingProfile={isEditingProfile} setIsEditingProfile={setIsEditingProfile} userInfo={userInfo} />
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader