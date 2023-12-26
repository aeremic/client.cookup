const CookingComponent = () => {
  return (
    <div className="container min-h-screen w-auto sm:w-1/2">
      <div className="grid grid-cols-1 gap-6">
        <div className="card sm:card-side bg-base-100 shadow-xl">
          <div className="card-body container mx-auto flex items-center sm:max-w-md">
            <div className="w-64 carousel rounded-box">
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
        </div>
      </div>
    </div>
  );
};

export default CookingComponent;
