import { useState } from "react";

export const useCheckbox = (initialValue) => {
  const [checked, setChecked] = useState(initialValue);

  return {
    checked,
    setChecked,
    reset: () => setChecked(""),
    bind: {
      checked,
      onChange: (e) => {},
      onClick: (e) => {
        setChecked(e.target.checked);
      },
    },
  };
};
