const Logout = ({ setIsAuthorized }) => {
  return (
    <div>
      <button
        onClick={() => {
          localStorage.removeItem("user");
          setIsAuthorized(false);
          window.location.reload();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
