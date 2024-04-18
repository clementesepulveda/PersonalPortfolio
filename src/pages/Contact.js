import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faItchIo, faSteam } from "@fortawesome/free-brands-svg-icons";
import SocialMediaIcon from "../components/SocialMediaIcon";

function Contact() {
  return (
    <>
      <div className="flex flex-row justify-center items-center w-screen">
        <div className="grid grid-cols-2 gap-4 p-4 place-items-center max-w-screen-sm w-screen gap-y-8">

          <SocialMediaIcon animDelay={'0.1s'}>
            <Link
              className="bg-blue-400"
              to='#'
              onClick={(e) => {
                window.location.href = 'mailto:clemente.sepulveda@uc.cl';
                e.preventDefault();
              }}
            >
              <div className="fa fa-envelope text-white "></div>
            </Link>
          </SocialMediaIcon>

          <SocialMediaIcon animDelay={'0.1s'}>
            <a href="https://www.linkedin.com/in/clemente-sepulveda/"
              style={{ backgroundColor: '#0077B5' }}>
              <i className="fa fa-linkedin text-white"></i>
            </a>
          </SocialMediaIcon>

          <SocialMediaIcon animDelay={'0.3s'}>
            <a
              href="https://github.com/clementesepulveda"
              className="socials-link bg-zinc-900 text-white dark:text-black dark:bg-zinc-100"
              style={{ animationDelay: '0.3s' }}>
              <i className="fa fa-github text-7xl"></i>
            </a>
          </SocialMediaIcon>


          <SocialMediaIcon animDelay={'0.5s'}>
            <a
              href="https://clementesepulveda.itch.io/"
              className="socials-link bg-itchio text-white">
              <FontAwesomeIcon icon={faItchIo} />
            </a>
          </SocialMediaIcon>

          <SocialMediaIcon animDelay={'0.7s'}>
            <a
              href="https://www.instagram.com/clemente_sepulveda/"
              className="socials-link bg-gradient-to-tr from-yellow-500 via-pink-400 to-purple-500"
              style={{ animationDelay: '0.5s' }}>
              <i className="fa fa-instagram text-white "></i>
            </a>
          </SocialMediaIcon>

          <SocialMediaIcon animDelay={'0.9s'}>
            <a
              href="https://steamcommunity.com/id/clegowi/"
              className="socials-link bg-zinc-900 text-white dark:text-black dark:bg-zinc-200"
            >
              <FontAwesomeIcon icon={faSteam} />
            </a>
          </SocialMediaIcon>

        </div>
      </div>
    </>
  );
}

export default Contact;
