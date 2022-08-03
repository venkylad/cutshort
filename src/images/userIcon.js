import React from 'react'

const UserIcon = ({active}) => {
  return (
    <>
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="21.000000pt" height="23.000000pt" viewBox="0 0 21.000000 23.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,23.000000) scale(0.100000,-0.100000)"
fill={active ?"#664de5" :"#000000"} stroke="none">
<path d="M60 171 c-20 -39 22 -82 60 -61 25 13 28 65 4 74 -29 11 -53 6 -64
-13z"/>
<path d="M62 74 c-41 -29 -28 -44 38 -44 64 0 72 8 40 40 -24 24 -48 25 -78 4z"/>
</g>
</svg>
    </>
  )
}

export default UserIcon