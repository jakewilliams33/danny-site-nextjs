export const enableBackButton = () => {
  window.onpopstate = undefined;
  window.history.back();
};

export const useBackClose = (closeModal) => {
  window.history.pushState(null, "", window.location.href);
  window.onpopstate = () => {
    window.history.pushState(null, "", window.location.href);
    closeModal();
  };
};
