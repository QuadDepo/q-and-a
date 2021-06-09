export const saveToLocalStorage = (state) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("qa_list", serialisedState);
  } catch (e) {
    console.warn(e);
  }
};

export const initialStoreFromLocalStorage = () => {
  try {
    const serialisedState = localStorage.getItem("qa_list");
    if (serialisedState === null) return undefined;

    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);

    return undefined;
  }
};
