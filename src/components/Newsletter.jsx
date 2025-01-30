const Newsletter = () => {
    return (
      <div className="bg-black mx-4 my-4 text-white p-4 rounded-2xl">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-2xl lg:text-3xl font-bold leading-tight">
              STAY UP TO DATE ABOUT
              <br />
              OUR LATEST OFFERS
            </h1>
          </div>
          <div className="flex flex-col space-y-2">
            <div>
              <input
                type="email"
                aria-label="Enter your email address"
                className="w-full lg:w-80 p-2 bg-white rounded-2xl placeholder-gray-500 text-black"
                placeholder="✉️ Enter your email address"
              />
            </div>
            <div>
              <button
                type="button"
                aria-label="Subscribe to Newsletter"
                className="w-full lg:w-80 p-2 bg-white rounded-2xl text-black font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default Newsletter;
