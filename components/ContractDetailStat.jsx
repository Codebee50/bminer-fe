import React from 'react'

const ContractDetailStat = ({label, value}) => {
  return (
    <div className='flex flex-col'>
        <p className='text-[#5b5b5b] text-[18px] font-medium'>{label}</p>
        <h2 className='text-[26px] font-semibold text-[#8e61bf]'>{value}</h2>
    </div>
  )
}

export default ContractDetailStat