import Number from "../ui/Number";

export default function Sidebar() {
  return (
    <div className="w-80 shrink-0 border-r-2 px-8 py-28">
      <div className="grid grid-cols-5 gap-4">
        <Number number={1} />
        <Number number={2} />
        <Number number={3} />
        <Number number={4} />
        <Number number={5} />
        <Number number={5} />
        <Number number={5} />
        <Number number={5} />
        <Number number={5} />
        <Number number={5} />
        <Number number={5} />
        <Number number={5} />
      </div>
    </div>
  );
}
