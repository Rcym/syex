import React from 'react'
import MemberDemandes from './MemberDemandes'

const AcceptMembers = () => {

    const membersToAccept = [
        {id: 1,name: 'John Doe',profilePic: '/profile.svg'},
        {id: 2,name: 'Jane Doe',profilePic: '/profile.svg'},

    ]

  return (
    <div className='commonContainer'>
        <h3>Accepter les membres</h3>
        {membersToAccept.map(member => (
            <MemberDemandes demandeName={member.name} demandePic={member.profilePic} key={member.id}/>
        ))}
        
        
    </div>
  )
}

export default AcceptMembers