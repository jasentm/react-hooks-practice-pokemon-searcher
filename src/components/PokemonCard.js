import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, HP, sprites}) {
  const [sprite, setSprite] = useState(true)

  const changeSprite = () => {
    setSprite(prev => !prev)
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" src={sprite ? sprites.front : sprites.back} onClick={changeSprite}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {HP}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
