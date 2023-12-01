import React from 'react'
import mainStyles from './MainSection.module.css'
import AddPost from './AddPost'
import Post from './Post/Post'

const MainFeed = () => {

  const Posts = [
    {Author: "John Doe", postDate: "12/12/2020", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis lacinia ultricies, nisl nisl lacinia elit, euismod euismod elit.", imgPath: "/Pictures/astronaut.jpg", nbLikes: 12},
    {Author: "John Doe", postDate: "12/12/2020", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis lacinia ultricies, nisl nisl lacinia elit, euismod euismod elit.", imgPath: "/Pictures/astronaut.jpg", nbLikes: 24},
    {Author: "John Doe", postDate: "12/12/2020", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis lacinia ultricies, nisl nisl lacinia elit, euismod euismod elit.", imgPath: "/Pictures/astronaut.jpg", nbLikes: 12},
    {Author: "John Doe", postDate: "12/12/2020", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis lacinia ultricies, nisl nisl lacinia elit, euismod euismod elit.", imgPath: "/Pictures/astronaut.jpg", nbLikes: 12},
  ]

  return (
    <div className={mainStyles.FeedSectionContainer}>
      <div className={mainStyles.FeedContainer}>
        <AddPost />
        {Posts.map((post) => (
          <Post Author={post.Author} postDate={post.postDate} text={post.text} imgPath={post.imgPath} nbLikes={post.nbLikes} />
        ))}
      </div>
    </div>
  )
}

export default MainFeed