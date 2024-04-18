import React from 'react'

export default function SocialMediaIcon({ bgColor, animDelay, children }) {
    return (
        <>
            <div className={`socials-link`} style={{backgroundColor: bgColor, animationDelay:`${animDelay}s`}}>
                {children}
            </div>

            <style>{`
        .socials-link {
          width: 8rem;
          height: 8rem;
          text-align: center;
          font-size: 4rem;
          align-content: center;
          border-radius: 9999px;
          box-shadow: 10px 10px 25px 1px rgba(0, 0, 0, 0.3);
          opacity: 0; /* Initially hide */
          animation: fadeInFromLeft 1s ease forwards; /* Apply animation */
        }F

        /* Define animation */
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
