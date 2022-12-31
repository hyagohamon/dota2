import React from 'react';
import PropTypes from 'prop-types'

const Header = ({title, message, primaryAttr}) => {


    return (
        <div style={{textAlign: "center", marginTop: '50px'}}>
            <img alt={title}
                 src={'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_horiz.png'}/>
            <h4>{message}</h4>


        </div>
    );
};


Header.propTypes = {
    title: PropTypes.string.isRequired
}

Header.defaultProps = {
    title: "Heroes of Dota 2"

}

export default Header;