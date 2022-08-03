import React from 'react'

const UsersIcon = ({active}) => {
  return (
    <>
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="26.000000pt" height="26.000000pt" viewBox="0 0 26.000000 26.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,26.000000) scale(0.100000,-0.100000)"
fill={active ?"#664de5" :"#000000"} stroke="none">
<path d="M107 203 c-4 -3 -7 -17 -7 -30 0 -18 6 -23 24 -23 13 0 27 7 30 16
11 28 -27 57 -47 37z"/>
<path d="M60 140 c0 -13 5 -20 13 -17 6 2 12 10 12 17 0 7 -6 15 -12 18 -8 2
-13 -5 -13 -18z"/>
<path d="M164 149 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16
-11z"/>
<path d="M97 124 c-4 -4 -7 -22 -7 -41 0 -31 2 -33 36 -33 35 0 35 1 32 38 -3
31 -7 37 -28 40 -14 2 -29 0 -33 -4z"/>
<path d="M57 103 c-11 -10 -8 -53 3 -53 6 0 10 14 10 30 0 31 -2 35 -13 23z"/>
<path d="M180 81 c0 -17 5 -31 10 -31 6 0 10 11 10 24 0 14 -4 28 -10 31 -6 4
-10 -7 -10 -24z"/>
</g>
</svg>
    </>
  )
}

export default UsersIcon