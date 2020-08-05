import React from 'react';

import logo from '../img/logo2.png';
import "../styles.scss";


const Players = (props) => {
    return (
        <div>
            <img src={logo} alt="Womens World Cup Logo " className="logo" />
            <div className="grid">
                {props.data.map((player, id) =>

                    <div key={id} className="playerCard">
                        <h2>#{id + 1} {player.name}</h2>
                        <h4>{player.country}</h4>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Players
