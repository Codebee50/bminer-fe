import React from 'react'

const LandingCtaButton = ({label="button", variant="yellow"}) => {
  return (
    <button className={`px-6 py-3.5 rounded-lg ${variant=='yellow'? 'bg-yellow100 text-white': "bg-white text-black"}`}>{label}</button>
  )
}

export default LandingCtaButton