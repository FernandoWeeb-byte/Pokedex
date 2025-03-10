import { useState } from "react";
import { NamedAPIResource } from "pokenode-ts";

import mockAllPokemon from "../assets/mockAllPokemon";
import mockDetailPidgeotto from "../assets/mockDetailPidgeotto";
import mockSpeciesPidgeotto from "../assets/mockSpeciesPidgeotto";
import {
  AppPkmnDetail,
  getAppPkmnDetailFromApi,
  getImageConfigFromType,
} from "../helpers";
// import AbilitySvg from "../assets/information-icons/ability.svg";
// import HeightSvg from "../assets/information-icons/height.svg";
// import WeightSvg from "../assets/information-icons/weight.svg";
// import SpeciesSvg from "../assets/information-icons/species.svg";

function App() {
  // TODO: fetch list of pokemon from api #1 to #151, inclusive
  const [pokemonCollection] = useState<NamedAPIResource[]>(mockAllPokemon);

  const [selectedPkmn, setSelectedPkmn] = useState<AppPkmnDetail | undefined>(
    undefined
  );

  function handlePokemonSelect() {
    // TODO: fetch selected pokemon from api
    const apiPokemon = mockDetailPidgeotto;
    const apiSpecies = mockSpeciesPidgeotto;
    const appDetail = getAppPkmnDetailFromApi(apiPokemon, apiSpecies);
    setSelectedPkmn(appDetail);
  }

  const pkmnFirstType =
    !!selectedPkmn && (selectedPkmn.types.length ?? 0) > 0
      ? selectedPkmn.types[0]
      : "normal";

  const firstTypeImageConfig = getImageConfigFromType(pkmnFirstType);

  return (
    <>
      <div>Pokemon App</div>
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        <div style={{ width: "30%" }}>
          {pokemonCollection?.map((pokemonRow) => {
            return (
              <div key={pokemonRow.url}>
                <div onClick={() => handlePokemonSelect()}>
                  {pokemonRow.name}
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ width: "70%" }}>
          {selectedPkmn ? (
            <div>
              <div>
                <div
                  style={{ backgroundColor: firstTypeImageConfig.color }}
                ></div>
                <img src={firstTypeImageConfig.vectorSrc} />
                <div className="w-[150px] h-[150px]">{selectedPkmn?.name}</div>
              </div>
              <div>
                {selectedPkmn?.types.map((type) => {
                  const typeImageConfig = getImageConfigFromType(type);

                  return (
                    <div key={type}>
                      <img src={typeImageConfig.pngSrc} />
                    </div>
                  );
                })}
              </div>
              <div>
                <div>Weight</div>
                <div>{selectedPkmn.weight} kg</div>
              </div>
              <div>
                <div>Height</div>
                <div>{selectedPkmn.height} m</div>
              </div>
              <div>
                <div>Species</div>
                <div>{selectedPkmn.species}</div>
              </div>
              <div>
                <div>Ability</div>
                <div>{selectedPkmn.ability}</div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
