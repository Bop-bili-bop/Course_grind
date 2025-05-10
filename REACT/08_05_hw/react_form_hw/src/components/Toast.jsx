const Toast = ({ error, children }) => {
  return (
    <div
      className={`flex justify-center rounded-4xl p-1 w-fit mb-8 font-medium ${
        error ? "bg-red-600/10 text-red-700" : "bg-green-600/10 text-green-700"
      }`}
    >
      <div className="bg-white rounded-xl shadow-md w-fit px-2">
        {error ? "Error" : "Success"}
      </div>
      <div className="px-2">{children}</div>
    </div>
  );
};

export default Toast;
