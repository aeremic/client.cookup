const FindRecipesComponent = () => {
  return (
    <div className="container min-h-screen w-auto sm:w-1/2">
      <div className="grid grid-cols-1 gap-6">
        <div className="p-4 sm:p-4 prose lg:prose-lg text-center sm:text-left">
          <h3>These are the recipe picks that we recommend for you.</h3>
        </div>
        <div className="card sm:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-96 h-full"
              src="https://hips.hearstapps.com/hmg-prod/images/delish-bolognese-horizontal-1-1540572556.jpg"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Spaghetti Bolognese</h2>
            <div>
              <p>
                Classic Italian pasta dish featuring spaghetti noodles topped
                with a rich, savory sauce.
              </p>
              <div className="badge badge-accent m-1">Ground beef</div>
              <div className="badge badge-accent m-1">Onion</div>
              <div className="badge badge-accent m-1">Garlic</div>
              <div className="badge badge-ghost m-1">& more</div>
            </div>
            <div className="rating gap-1">
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400"
                readOnly
                checked
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400"
              />
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Let's cook!</button>
            </div>
          </div>
        </div>
        <div className="card sm:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-96 h-full"
              src="https://hips.hearstapps.com/hmg-prod/images/delish-bolognese-horizontal-1-1540572556.jpg"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Spaghetti Bolognese</h2>
            <div>
              <p>
                Classic Italian pasta dish featuring spaghetti noodles topped
                with a rich, savory sauce.
              </p>
              <div className="badge badge-accent m-1">Ground beef</div>
              <div className="badge badge-accent m-1">Onion</div>
              <div className="badge badge-accent m-1">Garlic</div>
              <div className="badge badge-ghost m-1">& more</div>
            </div>
            <div className="rating gap-1">
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400"
                readOnly
                checked
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400"
              />
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Let's cook!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindRecipesComponent;
