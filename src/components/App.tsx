import { useEffect, useMemo, useState } from "react";
import { NamedAPIResource } from "pokenode-ts";

import {
  AppPkmnDetail,
  getAppPkmnDetailFromApi,
  getImageConfigFromType,
} from "../helpers";
import ListItem from "./ListItem";
import api from "../service/api";
import Stats from "./Stats";
import BadgeType from "./BadgeType";
import AbilitySvg from "../assets/information-icons/ability.svg";
import HeightSvg from "../assets/information-icons/height.svg";
import WeightSvg from "../assets/information-icons/weight.svg";
import SpeciesSvg from "../assets/information-icons/species.svg";

function App() {
  // TODO: fetch list of pokemon from api #1 to #151, inclusive
  const [pokemonCollection, setPokemonCollection] = useState<
    NamedAPIResource[]
  >([]);

  const [selectedPkmn, setSelectedPkmn] = useState<AppPkmnDetail | undefined>(
    undefined
  );
  const firstTypeImageConfig = useMemo(() => {
    const pkmnFirstType =
      !!selectedPkmn && (selectedPkmn.types.length ?? 0) > 0
        ? selectedPkmn.types[0]
        : "normal";

    return getImageConfigFromType(pkmnFirstType);
  }, [selectedPkmn]);

  function handlePokemonSelect(name: string) {
    const apiPokemonPromise = api.getPokemonByName(name);
    const apiSpeciesPromise = api.getPokemonSpeciesByName(name);
    Promise.all([apiPokemonPromise, apiSpeciesPromise]).then((results) => {
      const appDetail = getAppPkmnDetailFromApi(results[0], results[1]);
      setSelectedPkmn(appDetail);
    });
  }

  function hexToRGBA(hex: string, alpha: number) {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  useEffect(() => {
    api
      .listPokemons(0, 151)
      .then((value) => setPokemonCollection(value.results));
  }, []);

  return (
    <div className="flex gap-x-[25px] max-h-[682px]">
      <div
        className="bg-[#F9FAFB] p-[15px] overflow-auto flex flex-col gap-y-[10px] min-w-[220px]"
        style={{ width: "20%" }}
      >
        {pokemonCollection?.map((pokemonRow) => {
          return (
            <ListItem
              name={pokemonRow.name}
              handleClick={() => handlePokemonSelect(pokemonRow.name)}
              key={pokemonRow.url}
            />
          );
        })}
      </div>
      <div
        className="bg-[#F9FAFB] overflow-y-auto overflow-x-hidden"
        style={{ width: "80%" }}
      >
        {selectedPkmn ? (
          <div className="flex flex-col gap-y-[10px]">
            <div
              className={`h-[307px] relative`}
              style={{
                background: `linear-gradient(70deg, ${
                  firstTypeImageConfig.color
                }, ${hexToRGBA(firstTypeImageConfig.color, 0.5)})`,
              }}
            >
              <img
                className="*:h-[204px] w-[204px] *:w-full absolute opacity-50 scale-[2] left-[24px] top-[24px]"
                src={firstTypeImageConfig.vectorSrc}
              />
              <img
                className="h-[288px] w-[288px] absolute left-[71px] top-[84px]"
                src={selectedPkmn.image}
              />
            </div>
            <div className="flex flex-col px-[24px] py-[5px] gap-y-[20px]">
              <div className="flex flex-col">
                <span className="text-2xl">{selectedPkmn.name}</span>
                <span className="text-xs font-inter text-black/70">
                  #{String(selectedPkmn.id).padStart(3, "0")}
                </span>
              </div>

              <div className="flex gap-[7px]">
                {selectedPkmn?.types.map((type) => (
                  <BadgeType type={type} />
                ))}
              </div>
              <div className="flex gap-[20px] flex-wrap">
                <Stats
                  title={"WEIGHT"}
                  description={`${selectedPkmn.weight} kg`}
                  icon={WeightSvg}
                />
                <Stats
                  title="HEIGHT"
                  description={`${selectedPkmn.height} m`}
                  icon={HeightSvg}
                />
                <Stats
                  title="SPECIES"
                  description={selectedPkmn.species}
                  icon={SpeciesSvg}
                />
                <Stats
                  title="ABILITY"
                  description={selectedPkmn.ability}
                  icon={AbilitySvg}
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
