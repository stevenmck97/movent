const Logout = () => {
  return (
    <div>
      <button
        onClick={() => {
          localStorage.removeItem("user");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
