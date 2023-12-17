const FindRecipesComponent = () => {
  return (
    <div className="container min-h-screen w-auto sm:w-1/2">
      <div className="grid grid-cols-1 gap-6 mb-2 ">
        <div className="p-4 sm:p-4 prose lg:prose-lg text-center sm:text-left">
          <h3>These are the recipe picks that we recommend for you.</h3>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Spaghetti Bolognese</h2>
            <div>
              <p>
                Classic Italian pasta dish featuring spaghetti noodles topped
                with a rich, savory sauce.
              </p>
              <p>Ingredients: Ground beef, Tomatoes, Onion ...</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">See more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindRecipesComponent;
