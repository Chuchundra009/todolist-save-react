const MyMealsAndIngredients = ({ selectedDay, updateDay }) => {
  function edutMyMeal(myInput, value) {
    updateDay({ ...selectedDay, [myInput]: value });
  }

  if (!selectedDay) return <p>Plan your week ahead of time!</p>;
  return (
    <div className="whole-plan">
      <div className="meal-editing">
        <input
          type="text"
          className="myInput"
          placeholder="Today is..."
          id="title"
          value={selectedDay.title}
          onChange={(e) => edutMyMeal("title", e.target.value)}
        />
        <textarea
          placeholder="Write your meal plan here"
          id="mealForDay"
          value={selectedDay.mealForDay}
          onChange={(e) => edutMyMeal("mealForDay", e.target.value)}
        />
        <textarea
          placeholder="List of ingredients"
          id="mealForDay"
          value={selectedDay.ingredients}
          onChange={(e) => edutMyMeal("ingredients", e.target.value)}
        />
      </div>
    </div>
  );
};

export default MyMealsAndIngredients;
