const CookingComponent = () => {
  return (
    <div className="container min-h-screen w-auto sm:w-1/2">
      <div className="grid grid-cols-1 gap-6">
        <div className="text-center">
          <div className="w-64 carousel rounded-box shadow-xl">
            <div className="carousel-item w-full">
              <img
                src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full ">
              <img
                src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
          </div>
        </div>
        <div className="card sm:card-side bg-base-100 shadow-xl">
          <div className="card-body container mx-auto">
            <h2 className="card-title">Spaghetti Bolognese</h2>
            <div>
              <div className="badge badge-ghost mr-1">15 min</div>
              <div className="badge badge-ghost mr-1">Medium</div>
              <div className="badge badge-ghost mr-1">325 kcal</div>
            </div>
            <div className="divider"></div>
            <div>
              <div>Ingredients</div>
              <div className="m-1 border-2 rounded-2xl overflow-x-auto">
                <table className="table table-zebra">
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>1</th>
                      <td>Sweet Onion</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <th>2</th>
                      <td>Eggs</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th>3</th>
                      <td>Baking powder</td>
                    </tr>
                    <tr>
                      <th>4</th>
                      <td>Salt</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="divider"></div>
            <div>Procedure</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookingComponent;
