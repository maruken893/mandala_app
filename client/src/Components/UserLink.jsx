const UserLink = ({ className, label, value }) => {
  return (
    <div className={className}>
      <button>
        {value} <br /> {label}
      </button>
    </div>
  );
};
export default UserLink;
