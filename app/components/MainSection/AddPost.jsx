'use client'

import React, {useState} from 'react'
import mainStyles from './MainSection.module.css'
import Image from 'next/image'
import AddPostPopup from './AddPostPopup'

const AddPost = () => {

  const [isAddingPost, setIsAddingPost] = useState(false)

  return (
    <div className={`commonContainer ${mainStyles.addPostElement}`}>
        <button onClick={() => {setIsAddingPost(true)}} className={mainStyles.mainBtn}>A quoi pensez vous ?</button>
        <button onClick={() => {setIsAddingPost(true)}} className={mainStyles.PictureBtn}>
            <Image src="/add_img.svg" alt="img" width={25} height={25} />
        </button>
        <AddPostPopup isAddingPost={isAddingPost} setIsAddingPost={setIsAddingPost} />
    </div>
  )
}

export default AddPost