import { routes } from '../../routes/BaseRoutes';
import { Link } from 'react-router-dom';



const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link to={routes.HOME} >
      PORTFOLIO 
      </Link>

    </div>
  );
};

export default Logo;
