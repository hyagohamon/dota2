import React, {useEffect, useState} from 'react';
import HeroCard from "./HeroCard.jsx";
import Header from "./Header.jsx";
import axios from "axios";
import Footer from "./Footer.jsx";
import {func} from "prop-types";

const DotaApp = () => {

    const [heroes, setHeroes] = useState([]);
    const [heroesFiltered, setHeroesFiltered] = useState([]);

    const [searching, setSearching] = useState(0);

    const urlImg = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/';
    useEffect(() => {

        axios.get('https://api.opendota.com/api/heroes').then(response => {
            setHeroes(response.data);
        }).catch(error => {
            console.log(`Erro ao obter dados da api do dota 2, ${error}`)
        })


    }, [])


    function searchHero(name) {
        if (name === '') {
            setSearching(0);
        }
        if (name.length >= 2) {
            const meuNovoArray = heroes.filter((item) => {
                return item.localized_name.toLowerCase().includes(name.toLowerCase());
            })

            if (meuNovoArray.length > 0) {
                setSearching(1);
                setHeroesFiltered(meuNovoArray);
            }
            console.log(meuNovoArray);

        }


    }


    return (
        <>
            <div className=" ui fluid-container  ">
                <div className={"ui fluid container"}>
                    <Header/>

                    <div className='search-hero'>
                        <div className="ui input" style={{width:'386px'}}>
                            <input type="text" onChange={(e) => searchHero(e.target.value)}
                                   placeholder="Buscar herói..."/>
                        </div>
                    </div>


                    <div className="ui  link cards"
                         style={{justifyContent: 'center', marginTop: '105px', marginLeft: '10%', marginRight: '10%'}}>

                        {searching === 0 ?
                            heroes.map((hero) => {
                                return <HeroCard key={hero.name}
                                                 name={hero.localized_name}
                                                 roles={hero.roles.toString()}
                                                 attack={hero.attack_type}
                                                 primaryAtrr={hero.primary_attr}
                                                 avatar={urlImg + hero.name.substring(14) + '.png'}
                                />
                            })

                            : (
                                heroesFiltered.map((hero) => {
                                    return <HeroCard key={hero.name}
                                                     name={hero.localized_name}
                                                     roles={hero.roles.toString()}
                                                     attack={hero.attack_type}
                                                     primaryAtrr={hero.primary_attr}
                                                     avatar={urlImg + hero.name.substring(14) + '.png'}
                                    />
                                })

                            )}

                    </div>
                </div>
            </div>
            <Footer/>


        </>
    );
};

export default DotaApp;
