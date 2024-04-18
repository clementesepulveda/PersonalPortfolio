import React from 'react'

export default function SocialMediaIcon({ animDelay, children }) {
  return (
    <>
      <div className='init-animation'
        style={{ animationDelay: animDelay }}
      >

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
      </div>

      <style>{`
        .init-animation {
          opacity: 0; /* Initially hide */
          animation: fadeInFromLeft 1s ease forwards; /* Apply animation */
        }

        .social-media-container:hover {
          transform: scale(1.05);
        }

        .social-media-child  > * {
          flex-grow: 1;
          align-content: center;
          box-shadow: 10px 10px 25px 1px rgba(0, 0, 0, 0.3);
        }

        @keyframes fadeInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}
