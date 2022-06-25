import "./Input.css";

export const Input = (props) => {
  const {
    label,
    placeholder,
    type,
    name,
    onChange,
    formikErr,
    width,
    content,
    value,
  } = props;

  return (
    <div className="div_input" style={{ width: width }}>
      <label className="label_input">{label}</label>
      <input
        className="input"
        placeholder={placeholder}
        type={type ? type : "text"}
        name={name}
        onChange={onChange}
        value={value}
      />
      {content}
      <div className="div_err_input">{formikErr}</div>
    </div>
  );
};

export const Select = (props) => {
  const { label, name, onChange, options, formikErr, width } = props;

  return (
    <div className="div_input" style={{ width: width }}>
      <label className="label_input">{label}</label>

      <select
        className="input"
        id="width-select"
        name={name}
        onChange={onChange}
      >
        <option value={""} disabled selected></option>
        {options.map((item) => (
          <option value={item.value}>{item.title}</option>
        ))}
      </select>
      <div className="div_err_input">{formikErr}</div>
    </div>
  );
};
