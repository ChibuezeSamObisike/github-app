export const getStorageTheme = (): string => {
  let theme: string = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme") || "dark-theme";
  }
  return theme;
};
