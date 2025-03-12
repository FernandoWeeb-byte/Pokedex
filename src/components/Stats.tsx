type Props = {
  description: string;
  title: string;
  icon: string;
};

function Stats({ description, title, icon }: Props) {
  return (
    <div className="w-[154px] gap-[4px] flex flex-col">
      <div className="flex gap-[6px] items-center">
        <img src={icon} />
        <span className="text-xs text-black/60 tracking-[5%] font-['Helvetica']">
          {title}
        </span>
      </div>
      <div className="p-2 border border-black/10 rounded-[15px] flex justify-center items-center">
        <span className="text-lg text-black/90 leading-[18px]">
          {description}
        </span>
      </div>
    </div>
  );
}

export default Stats;
