import React from 'react'

const SectionWrapper = ({children, pad=true}) => {
  return (
    <section className={`w-full  ${pad && 'pt-[160px]'} pb-[64px]`}>
        <div className="w-full max-w-[1300px] px-[50px] mx-auto">
            {children}
        </div>
    </section>
  )
}

export default SectionWrapper