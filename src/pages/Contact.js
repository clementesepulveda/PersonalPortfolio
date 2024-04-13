import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 place-items-center">
      <div className="text-center size-32 bg-blue-500 inline-block align-middle	text-5xl">

        <Link
          to='#'
          onClick={(e) => {
            window.location.href = 'mailto:clemente.sepulveda@uc.cl';
            e.preventDefault();
          }}
        >
          <div class="fa fa-envelope"></div>
        </Link>
      </div>
      <div className="text-center size-32 bg-blue-500 inline-block align-middle	text-5xl">
        <a href="https://www.linkedin.com/in/clemente-sepulveda/" class="fa fa-linkedin"></a>
      </div>
      <div className="text-center size-32 bg-blue-500 inline-block align-middle	text-5xl">
        <a href="https://github.com/clementesepulveda" class="fa fa-github"></a>
      </div>
      <div className="text-center size-32 bg-blue-500 inline-block align-middle	text-5xl">
        <a href="https://www.instagram.com/clemente_sepulveda/" class="fa fa-instagram"></a>
      </div>
    </div>
  );
}

export default Contact;
