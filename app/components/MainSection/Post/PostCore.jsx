import React from 'react'
import mainStyles from '../MainSection.module.css'
import Image from 'next/image'

const PostCore = ({text, imgPath}) => {
  return (
    <div className={mainStyles.postCore}>
        <p className={mainStyles.testSection}>{text}</p>
        {/* <Image className={mainStyles.postImg} src={imgPath} alt="search" width={600} height={300}/> */}
        <img className={mainStyles.postImg} src={imgPath} alt="" />
    </div>
  )
}

export default PostCore