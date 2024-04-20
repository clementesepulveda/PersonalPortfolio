import React from 'react'

export default function FadeInAnimation({ animDelay, children }) {
  return (
    <>
      <div className='fade-in-animation'
        style={{ animationDelay: animDelay }}
      >
            {children}
      </div>

      <style>{`
        .fade-in-animation {
          opacity: 0; /* Initially hide */
          animation: fadeInFromLeft 1s ease forwards; /* Apply animation */
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
