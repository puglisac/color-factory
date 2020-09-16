import React, { useState } from "react";
import { useHistory } from "react-router-dom";

/** Form for creating a new box.
 *
 * Has state for the name/quantity of the item; on submission,
 * sends {name, qty} to fn rec'd from parent.
 *
 */

const NewColorForm = ({ addColor }) => {
  const INITIAL_STATE = { name: "", color: "#000000"};
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history=useHistory()
  const handleSubmit = evt => {
    evt.preventDefault();
    addColor(formData);
    return history.push("/colors")
  };

  /** Update local state w/curr state of input elem */

  const handleChange = evt => {
    const { name, value }= evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  /** render form */

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />


      <label htmlFor="color">Color:</label>
      <input
      type="color"
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />

      <button>Add Color</button>
    </form>
  );
};

export default NewColorForm;