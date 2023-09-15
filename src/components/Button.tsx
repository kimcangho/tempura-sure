import Image from "next/image";

interface ButtonProps {
  name: string;
  imagePath: string;
  callbackFn: any;
}

const Button = ({ name, imagePath, callbackFn }: ButtonProps) => {
  return (
    <div
      onClick={callbackFn}
      className={`w-full flex justify-center items-center rounded-lg space-x-2 shadow-md text-white font-semibold text-center  cursor-pointer py-2 
      ${
        name === "Pause"
          ? "bg-red-light hover:bg-red-500"
          : name === "Play"
          ? "bg-green-light hover:bg-green-dark"
          : "bg-orange-light hover:bg-orange-dark"
      }`}
    >
      <p>{name}</p>
      <Image
        src={imagePath}
        alt={name}
        width={24}
        height={24}
      />
    </div>
  );
};

export default Button;
