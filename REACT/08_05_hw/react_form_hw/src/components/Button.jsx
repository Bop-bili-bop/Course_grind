const Button = ({ children, onClick, disabled = false, variant ='primary' }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-lg px-8 py-2  focus:ring-2 outline-none ring-indigo-700/30
      ${disabled 
        ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
        : variant === 'primary'
            ? 'bg-indigo-500 text-white hover:bg-indigo-700'
            : 'bg-white shadow-lg text-black hover:bg-neutral-50 border border-neutral-200'

      }`}
    >
      {children}
    </button>
  );
};

export default Button;
