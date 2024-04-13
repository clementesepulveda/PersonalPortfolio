import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faItchIo, faSteam } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <>
      <div className="flex flex-row justify-center items-center w-screen">
        <div className="grid grid-cols-2 gap-4 p-4 place-items-center max-w-screen-sm w-screen gap-y-8">

          <div className="socials-link bg-blue-400">
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

          <a
            href="https://www.linkedin.com/in/clemente-sepulveda/"
            className="socials-link bg-linkedin">
            <i className="fa fa-linkedin text-white"></i>
          </a>

          <a
            href="https://github.com/clementesepulveda"
            className="socials-link bg-zinc-900 text-white dark:text-black dark:bg-zinc-100">
            <i className="fa fa-github text-7xl"></i>
          </a>

          <a
            href="https://clementesepulveda.itch.io/"
            className="socials-link bg-itchio text-white">
            <FontAwesomeIcon icon={faItchIo} />
          </a>

          <a
            href="https://www.instagram.com/clemente_sepulveda/"
            className="socials-link bg-gradient-to-tr from-yellow-500 via-pink-400 to-purple-500">
            <i className="fa fa-instagram text-white "></i>
          </a>

          <a
            href="https://steamcommunity.com/id/clegowi/"
            className="socials-link bg-zinc-900 text-white dark:text-black dark:bg-zinc-200">
            <FontAwesomeIcon icon={faSteam} />
          </a>

        </div>
      </div>

      <style>{`
        .socials-link {
          background-color: redd;
          width: 8rem;
          height: 8rem;
          text-align: center;
          font-size: 4rem;
          align-content: center;
          border-radius: 9999px;
          box-shadow: 10px 10px 25px 1px rgba(0, 0, 0, 0.3);
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
