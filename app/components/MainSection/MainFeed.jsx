import React from 'react'
import mainStyles from './MainSection.module.css'
import AddPost from './AddPost'
import Post from './Post/Post'

const MainFeed = () => {
  return (
    <div className={mainStyles.FeedSectionContainer}>
      <div className={mainStyles.FeedContainer}>
        <AddPost />
        <Post Author="John Doe" postDate="12/12/2020" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis lacinia ultricies, nisl nisl lacinia elit, euismod euismod elit." imgPath="/Pictures/astronaut.jpg" nbLikes="12"/>
        <Post Author="John Doe" postDate="12/12/2020" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis lacinia ultricies, nisl nisl lacinia elit, euismod euismod elit." imgPath="/Pictures/astronaut.jpg" nbLikes="12"/>
        <Post Author="John Doe" postDate="12/12/2020" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis lacinia ultricies, nisl nisl lacinia elit, euismod euismod elit." imgPath="/Pictures/astronaut.jpg" nbLikes="12"/>
      </div>
    </div>
  )
}

export default MainFeed