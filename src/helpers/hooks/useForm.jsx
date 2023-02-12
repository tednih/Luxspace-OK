import { useState } from "react";

function useForm(initialState) {
  const [state, setstate] = useState(initialState);
  function fnUpdateState(event) {
    setstate((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
  return { state, fnUpdateState };
}

export default useForm;
