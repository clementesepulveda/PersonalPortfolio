import React from 'react'
import FadeInAnimation from './FadeInAnimation'

export default function SocialMediaIcon({ animDelay, children }) {
  return (
    <>
      <FadeInAnimation animDelay={animDelay}>
        <div className='
      bg-green-500
      social-media-container flex
      size-32 rounded-full overflow-hidden
      text-6xl text-center
      hover:scale-105'
        >
          <div className='social-media-child flex size-32 bg-red-500'>
            {children}
          </div>

        </div>
      </FadeInAnimation >

      <style>{`
        .social-media-container:hover {
          transform: scale(1.05);
        }

        .social-media-child  > * {
          flex-grow: 1;
          align-content: center;
          box-shadow: 10px 10px 25px 1px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </>
  )
}
