import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiNodejs,
  DiReact,
  DiSass,
  DiMongodb,
  DiGit,
  DiHeroku
} from 'react-icons/di';
import {
  SiHtml5,
  SiPython,
  SiPostgresql,
  SiTypescript
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <DiNodejs />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <DiSass />
      </li>
      <li className={s.techIcon}>
        <DiMongodb />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
      <li className={s.techIcon}>
        <DiHeroku />
      </li>
      <li className={s.techIcon}>
        <SiHtml5 />
      </li>
      <li className={s.techIcon}>
        <SiPostgresql />
      </li>
      <li className={s.techIcon}>
        <SiPython />
      </li>
      <li className={s.techIcon}>
        <SiTypescript />
      </li>

    </ul>
  );
};

export default TechSkills;
