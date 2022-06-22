import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Šviežias ir su meile pagamintas maistas!</h2>
      <p>Kiekvieną dieną vis skirtingas meniu! </p>
      <p>Rinkitės dienos pietus ir mėgaukitės maistu iškart!</p>
    </section>
  );
};

export default MealsSummary;
