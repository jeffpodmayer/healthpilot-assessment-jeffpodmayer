import checkmark from "../assets/checkmark.png";

interface SellingPointProps {
  readonly text: string;
}

export function SellingPoint({ text }: SellingPointProps) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2">
        <img src={checkmark} alt="checkmark" className="h-4 w-4" />
        <h3 className="text-lg font-semibold text-white">{text}</h3>
      </div>
    </div>
  );
}
