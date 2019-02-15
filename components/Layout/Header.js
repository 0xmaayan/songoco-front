// components
import { Container } from '../Common/Grid';
import { config } from '../../common/config';

const Header = () => {

  return (
    <header>
      <Container fluid={true}>
        <div className="navbar-header">
          <a className="navbar-brand" href={config.APP_URL}>
            Songoco
          </a>
        </div>
      </Container>
    </header>
  )
}

export default Header;