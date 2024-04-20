import React from 'react'

export default function FamiliarTech({ items }) {
  return (
    <div className='flex flex-wrap justify-center gap-x-2 gap-y-8'>
        {items.map(item => (
            <div className='p-2 flex flex-col items-center size-28 md:size-36 xl:size-44' key={item}>
                <img src={`${process.env.PUBLIC_URL}/images/technologies/${item}.png`}
                    alt="Logo"
                    className='aspect-square object-contain' />
                <p>{item}</p>
            </div>
        ))}
    </div>
  )
}
