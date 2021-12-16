import s from './About.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import AboutTextCard from './AbouTextCard/AboutTextCard';
import TechSkills from './TechSkills/TechSkills';

const About = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.about}>
          <div className={s.aboutDescription}>
            <h1 className={s.title}>
              How I got  <b className={s.pink}>HERE</b>
            </h1>
            <AboutTextCard />
          </div>

        </div>

        <h2 className={s.skills}>
          <b className={s.pink}>Skills</b>
        </h2>
        <TechSkills />


      </div>
    </BaseLayout>
  );
};

export default About;
