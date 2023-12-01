import React from 'react'
import mainStyles from '../components/MainSection/MainSection.module.css'
import Post from '../components/MainSection/Post/Post'
import ProfileHeader from './ProfileHeader'

const ProfileFeed = () => {

    const user = {username: "username", profilePicutre: "/Pictures/astronaut.jpg" , firstname: "john", lastname: "doe", email: "username@email.com", phone: "0123456789", dateOfBirth: "00/00/00"}
    
  return (
    <div className={mainStyles.FeedSectionContainer}>
      <div className={mainStyles.FeedContainer}>
        <ProfileHeader userInfo={user} />
        <Post Author="John Doe" postDate="12/12/2020" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis lacinia ultricies, nisl nisl lacinia elit, euismod euismod elit." imgPath="/Pictures/astronaut.jpg" nbLikes="12"/>
      </div>
    </div>
  )
}

export default ProfileFeed