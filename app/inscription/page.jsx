import cnxStyle from '../cnx.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={cnxStyle.cnxBody}>
      <form className={`commonContainer ${cnxStyle.cnxContainer}`}>

        <div className={cnxStyle.inputElement}>
          <p>Nom d'utilisateur</p>
          <input type="text" id="text" required/>
        </div>

        <div className={cnxStyle.inputElement}>
          <p>Mot de passe</p>
          <input type="password" id="mdps" required/>
        </div>

        <div className={cnxStyle.inputElement}>
          <p>address email</p>
          <input type="email" id="email" required/>
        </div>

        <div className={cnxStyle.inputElement}>
          <p>Numéro de téléphone</p>
          <input type="text" id="tel" required/>
        </div>
        
        <div className={cnxStyle.inputElement}>
          <button className={cnxStyle.cnxBtn}>Inscription</button>
        </div>

      </form>
      <Link href={'/'}>
        <div className={cnxStyle.createAccDiv}>
          <p>Retour a la page de connexion</p>
        </div>
      </Link>
    </div>
  )
}
