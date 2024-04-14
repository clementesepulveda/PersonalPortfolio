import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faItchIo, faSteam } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <>
      <div className="flex flex-row justify-center items-center w-screen">
        <div className="grid grid-cols-2 gap-4 p-4 place-items-center max-w-screen-sm w-screen gap-y-8">

          <div className="socials-link bg-blue-400" style={{ animationDelay: '0.1s' }}>
            <Link
              to='#'
              onClick={(e) => {
                window.location.href = 'mailto:clemente.sepulveda@uc.cl';
                e.preventDefault();
              }}
            >
              <div className="fa fa-envelope text-white"></div>
            </Link>
          </div>

          {/* Add animation delay for each link */}
          <a
            href="https://www.linkedin.com/in/clemente-sepulveda/"
            className="socials-link bg-linkedin"
            style={{ animationDelay: '0.2s' }}>
            <i className="fa fa-linkedin text-white"></i>
          </a>

          {/* Add animation delay for each link */}
          <a
            href="https://github.com/clementesepulveda"
            className="socials-link bg-zinc-900 text-white dark:text-black dark:bg-zinc-100"
            style={{ animationDelay: '0.3s' }}>
            <i className="fa fa-github text-7xl"></i>
          </a>

          {/* Add animation delay for each link */}
          <a
            href="https://clementesepulveda.itch.io/"
            className="socials-link bg-itchio text-white"
            style={{ animationDelay: '0.4s' }}>
            <FontAwesomeIcon icon={faItchIo} />
          </a>

          {/* Add animation delay for each link */}
          <a
            href="https://www.instagram.com/clemente_sepulveda/"
            className="socials-link bg-gradient-to-tr from-yellow-500 via-pink-400 to-purple-500"
            style={{ animationDelay: '0.5s' }}>
            <i className="fa fa-instagram text-white "></i>
          </a>

          {/* Add animation delay for each link */}
          <a
            href="https://steamcommunity.com/id/clegowi/"
            className="socials-link bg-zinc-900 text-white dark:text-black dark:bg-zinc-200"
            style={{ animationDelay: '0.6s' }}
            >
            <FontAwesomeIcon icon={faSteam} />
          </a>

        </div>
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
        }

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

        /* LinkedIn */
        .bg-linkedin {
          background-color: #0077B5;
        }

        /* Itch.io */
        .bg-itchio {
          background-color: #FA5C5C;
        }

        /* GitHub */
        .bg-github {
          background-color: #181717;
        }

        /* Instagram */
        .bg-instagram {
          background-color: #C13584;
        }

      `}</style>

    </>
  );
}

export default Contact;
