const Header = (): JSX.Element => {
  return (
    <div className="my-4 w-full text-center">
      <h1 className="font-bold text-3xl">TempuraSure</h1>
      <button
        type="button"
        onClick={() => {
          throw new Error("Sentry Frontend Error - Main page prod");
        }}
      >
        Throw error
      </button>
    </div>
  );
};

export default Header;
