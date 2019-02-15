import React from 'react';
// components
import Icon from '../Common/Icon';

const Footer = () => {
    return (
        <footer className="footer text-center bg-lightgray">
                <p>
                    <strong className="">
                        <Icon icon="music" />
                        &nbsp;Songoco
                      </strong> by
                      <a href="https://www.linkedin.com/in/maayan-savir-060b0712b/" target="_blank" rel="noopener noreferrer">
                        &nbsp;Maayan Savir
                      </a>.
                      <br /><br />
                    What Songs Really About
                  </p>

            <style jsx>{`
            .bg-lightgray
            {
              background-color:LightGray;
            }
            `}</style>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E=" crossOrigin="anonymous"></script>
        </footer>
    );
}
export default Footer;
