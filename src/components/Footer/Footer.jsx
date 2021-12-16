import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import { FaTwitterSquare, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  // let date = new Date();
  // let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h3>By Kerlin Lopes</h3>
        </div>

        {/* <div className={s.copyright}>
          <h3>Copyright © {year} </h3>
        </div> */}

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/kerlinlopes"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/kerlinlopes/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com/kerlinbaby"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitterSquare />
              </a>
            </li>


          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;