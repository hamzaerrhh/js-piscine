export const  getArchitects=()=> {
  const architects = Array.from(document.querySelectorAll("a"));
  const nonArchitects = Array.from(document.querySelectorAll("body *:not(a)"));

  return [architects, nonArchitects];
}
export const getClassical = () => {
  const architects = Array.from(document.querySelectorAll("a"));

  const classical = architects.filter(el => el.classList.contains("classical"));
  const nonClassical = architects.filter(el => !el.classList.contains("classical"));

  return [classical, nonClassical];
};


export const getActive = () => {
  const classical = Array.from(document.querySelectorAll(".classical"));

  const active = classical.filter(el => el.classList.contains("active"));
  const nonActive = classical.filter(el => !el.classList.contains("active"));

  return [active, nonActive];
};

export const getBonannoPisano = () => {
  const bonannoPisano = document.querySelector("#BonannoPisano");

  const activeClassical = Array.from(document.querySelectorAll(".classical.active"));

  const remainingActiveClassical = activeClassical.filter(
    el => el.id !== "BonannoPisano"
  );

  return [bonannoPisano, remainingActiveClassical];
};