import "./Input_select_button.css";

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
    defaultValue,
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
        defaultValue={defaultValue}
      />
      {content}
      <div className="div_err_input">{formikErr}</div>
    </div>
  );
};

export const Button = (props) => {
  const { title, padding, onClick, borderRadius, type } = props;

  return (
    <button
      className="btn_component"
      style={{ padding: padding, borderRadius: borderRadius }}
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
};

export const Checkbox = (props) => {
  const { name, onChange, label, checked, formikErr } = props;

  return (
    <div>
      <div className="checkbox">
        <input
          type="checkbox"
          name={name}
          onChange={onChange}
          checked={checked}
        />
        <label>{label}</label>
      </div>
      <div className="div_err_input">{formikErr}</div>
    </div>
  );
};

export const Select = (props) => {
  const {
    label,
    name,
    onChange,
    options,
    formikErr,
    width,
    defaultValue,
    disabledSelect,
    value,
  } = props;

  return (
    <div className="div_input" style={{ width: width }}>
      <label
        className="label_input"
        id={disabledSelect ? "disabledSelect" : ""}
      >
        {label}
      </label>

      <select
        disabled={disabledSelect}
        className="input"
        id="width-select"
        name={name}
        onChange={onChange}
        defaultValue={defaultValue}
        value={value}
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

export const TextArea = (props) => {
  const { label, onInput, placeholder, formikErr, width, height, content } =
    props;

  return (
    <div className="div_input" style={{ width: width }}>
      <label className="label_input">{label}</label>

      <div
        className="input"
        id="textarea"
        style={{ height: height }}
        onInput={onInput}
        contentEditable
        placeholder={placeholder}
      >
        {content}
      </div>
      <div className="div_err_input">{formikErr}</div>
    </div>
  );
};
