import React from 'react';

function useForm(initialValue = {}) {
  const [formData, setFormData] = React.useState(initialValue);

  function setForm(updatedFormItem, updatedFormData) {
    setFormData({
      ...formData,
      [updatedFormItem]: updatedFormData,
    });
  }

  return [formData, setForm];
}

export default useForm;
