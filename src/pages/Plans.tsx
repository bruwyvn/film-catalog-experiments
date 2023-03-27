import React from "react";

const Plans = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-6 sm:py-12">
      <div className="relative py-3 sm:mx-auto sm:max-w-xl">
        <div className="absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl"></div>
        <div className="relative bg-white px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="mx-auto max-w-md">
            <div>
              <h2 className="text-center text-3xl font-extrabold text-gray-900">
                Choose a Plan
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                id velit id ante ultrices sagittis vel ac lectus.
              </p>
            </div>
            <form className="mt-10">
              <div className="relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="0.00"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <label htmlFor="currency" className="sr-only">
                    Currency
                  </label>
                  <select
                    id="currency"
                    name="currency"
                    className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>USD</option>
                    <option>CAD</option>
                    <option>EUR</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.022 5.756a1 1 0 011.413-.038l.035.038L10 12.486l6.53-6.53a1 1 0 011.414 1.415l-.038.035-7 7a1 1 0 01-1.414 0"
                      />
                    </svg>
                  </span>
                  Subscribe
                </button>
              </div>
            </form>
            <div className="mt-10 text-center">
              <p className="text-sm text-gray-500">
                Get access to all premium features with our subscription plans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
