const HomeComponent = () => {
  return (
    <>
      <div className="container w-auto">
        <div className="grid grid-cols-2 gap-10">
          <div className="col-span-2 w-auto h-48">
            <div className="p-4 prose lg:prose-lg">
              <h2 className="">
                <b>Unleash</b> your culinary creativity by discovering delicious
                recipes.
                <br />
              </h2>
              <h3>
                <i>Choose</i> what you have in fridge and craft your next
                culinary <b>masterpiece</b>!
              </h3>
            </div>
          </div>
          <div>
            <div className="card w-96 h-96 bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Pick items that you already have</h2>
                <div className="form-control mt-3">
                  <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered input-sm w-full max-w-xs"
                  />
                  <div className="mt-3">
                    <label className="label cursor-pointer">
                      <span className="label-text">Item 1</span>
                      <input type="checkbox" className="checkbox" />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text">Item 2</span>
                      <input type="checkbox" className="checkbox" />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text">Item 3</span>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-96 h-96 bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Picked items</h2>
                <div className="form-control mt-10">
                  <div className="mt-3">
                    <label className="label cursor-pointer">
                      <span className="label-text">Item 1</span>
                      <input type="checkbox" className="checkbox" />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text">Item 2</span>
                      <input type="checkbox" className="checkbox" />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text">Item 3</span>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
