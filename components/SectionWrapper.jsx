import React from 'react'

const   SectionWrapper = ({children, pad=true, centered=false}) => {
  return (
    <section className={`w-full ${pad && 'pt-[160px] pb-[64px]'}`}>
        <div className={`w-[95%] max-w-[1300px] sm:px-[50px] mx-auto ${centered && 'flex items-center justify-center'}`}>
            {children}
        </div>
    </section>
  )
}

export default SectionWrapper