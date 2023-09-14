interface ButtonProps {
  name: string;
  imagePath: string;
  callbackFn: any;
}

const Button = ({ name, imagePath, callbackFn }: ButtonProps) => {
  return (
    <div
      onClick={callbackFn}
      className={`w-full text-white text-center bg-green-light hover:bg-green-dark cursor-pointer py-2`}
    >
      <p>{name}</p>
    </div>
  );
};

export default Button;
