const HeroCard = ({name, avatar, roles,attack,primaryAtrr}) => {

    switch (primaryAtrr) {
        case "agi":
            primaryAtrr = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png'
            break;
        case "int":
            primaryAtrr = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png'
            break;
        case "str":
            primaryAtrr = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png'
            break;

    }
    return (


        <div className="ui card " style={{justifyContent: 'center'}}>
            <div className="image">
                <img src={avatar}  alt={name} />
            </div>
            <div className="content">
                <div className="header" style={{color:'rgb(117 132 180)'}}>{name}</div>
                <div className="meta">
                    <a>{attack}</a>
                </div>

            </div>
            <div className="extra content">
                <p>
                    < img src={primaryAtrr} alt={primaryAtrr} data-title="Matt" data-content="Matt has been a member since July 2014" style={{width:'24px', height:'24px'}}/>

                </p>
                <p className={"meta"} style={{fontSize: '1rem', overflowWrap: 'break-word'}}>
                    {roles}

                </p>


            </div>
        </div>


    );
};

export default HeroCard;
