import React from 'react'
import mainStyles from './MainSection.module.css'
import Image from 'next/image'

const AddPost = () => {
  return (
    <div className={`commonContainer ${mainStyles.addPostElement}`}>
        <button className={mainStyles.mainBtn}>A quoi pensez vous ?</button>
        <button className={mainStyles.PictureBtn}>
            <Image src="/add_img.svg" alt="img" width={25} height={25} />
        </button>
    </div>
  )
}

export default AddPost