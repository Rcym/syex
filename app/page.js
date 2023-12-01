import cnxStyle from './cnx.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={cnxStyle.cnxBody}>
      <form className={`commonContainer ${cnxStyle.cnxContainer}`}>

        <div className={cnxStyle.inputElement}>
          <p>Nom d'utilisateur</p>
          <input type="text" id="text" />
        </div>

        <div className={cnxStyle.inputElement}>
          <p>Mot de passe</p>
          <input type="password" id="mdps" />
        </div>

        <div className={cnxStyle.inputElement}>
          <button className={cnxStyle.cnxBtn}>Se connecter</button>
        </div>

      </form>
      <Link href={'/inscription'}>
        <div className={cnxStyle.createAccDiv}>
          <Image src="/profile.svg" alt="" width={22} height={22} />
          <p>Créer un compte</p>
        </div>
      </Link>
    </div>
  )
}
