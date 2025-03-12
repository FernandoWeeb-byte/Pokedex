import { getImageConfigFromType } from "../helpers";

type Props = {
  type: string;
};

function BadgeType({ type }: Props) {
  const typeImageConfig = getImageConfigFromType(type);
  return (
    <div
      className={`flex gap-[8px] items-center py-1 pl-1 pr-2 rounded-[67px]`}
      style={{ backgroundColor: typeImageConfig.color }}
      key={type}
    >
      <img className="w-[18px] h-[18px]" src={typeImageConfig.pngSrc} />{" "}
      <span className="text-xs leading-[12px] font-bold">{type}</span>
    </div>
  );
}

export default BadgeType;
