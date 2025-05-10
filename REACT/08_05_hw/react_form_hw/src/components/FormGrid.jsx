const FormGrid = ({ children, formName, border=false }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 py-6 gap-6 grid-rows-1  
    ${border
        ? 'border-b border-b-neutral-200 py-6'
        : ''
    }` }>
      <div>
        <h2 className="text-neutral-900 text-xl font-medium">{formName}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default FormGrid;
