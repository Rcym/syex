import React from 'react'
import PostHeader from './PostHeader'
import PostCore from './PostCore'
import PostSubSection from './PostSubSection'
import mainStyles from '../MainSection.module.css'

const Post = ({Author, postDate, text, imgPath, nbLikes}) => {
  return (
    <div className={`commonContainer ${mainStyles.postElement}`}>
        <PostHeader Author={Author} postDate={postDate}/>
        <PostCore text={text} imgPath={imgPath}/>
        <PostSubSection nbLikes={nbLikes}/>
    </div>
  )
}

export default Post