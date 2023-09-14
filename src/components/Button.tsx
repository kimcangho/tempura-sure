interface ButtonProps {
  name: string;
  imagePath: string;
  callbackFn: any;
}

const Button = ({ name, imagePath, callbackFn }: ButtonProps) => {
  return (
    <div
      onClick={callbackFn}
      className={`w-full rounded-lg shadow-md text-white text-center  cursor-pointer py-2 
      ${
        name === "Pause"
          ? "bg-red-light hover:bg-red-500"
          : name === "Play"
          ? "bg-green-light hover:bg-green-dark"
          : "bg-orange-light hover:bg-orange-dark"
      }`}
    >
      <p>{name}</p>
    </div>
  );
};

export default Button;
