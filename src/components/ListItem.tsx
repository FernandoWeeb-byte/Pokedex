type Props = {
  name: string;
  handleClick: () => void;
};

function ListItem({ name, handleClick }: Props) {
  return (
    <div
      onClick={handleClick}
      className="px-[8px] cursor-pointer py-[4px] bg-[#E2E2E2] border border-solid border-black  rounded-sm shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
    >
      <span className="text-xs">{name}</span>
    </div>
  );
}

export default ListItem;
