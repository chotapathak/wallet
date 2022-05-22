import React from "react";

export default function Card() {
  return (
    <div>
      <div class="flex flex-col md:lg:xl:flex-row">
        {/* <!-- light --> */}
        <div class="h-screen w-screen md:lg:xl:w-1/2 bg-gray-33 flex flex-wrap justify-center content-center ">
          {/* <!-- card a --> */}

          <div class=" p-8 rounded-xl shadow-lg shadow-neutral-200 w-96">
            {/* <!-- header --> */}
            <div class="flex justify-between mb-4">
              <div>
                <p class="text-lg font-semibold text-neutral-700">Devon Lane</p>
                <p class="mt-0.5  text-neutral-400 text-sm">WooCommerce</p>
              </div>
              <div class="text-right">
                <p class="text-lg font-semibold text-neutral-700">$1,848.00</p>
                <p class="mt-0.5  text-neutral-400 text-sm">#940590</p>
              </div>
            </div>
            {/* <!-- bedge --> */}
            <span class="text-lg text-neutral-600 hover:text-blue-600 duration-150">
              Missing Info
            </span>

            <div class="flex items-center justify-between mt-5">
              <div class="flex items-center">
                <svg
                  class="h-5 w-5 stroke-gray-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="gray-400"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span class="text-neutral-400 text-sm">Added Today</span>
              </div>
              <div class="flex items-center">
                <span class="text-neutral-400 text-sm">0</span>
              </div>
            </div>

            {/* <!-- body --> */}
            <div class="mt-5 border-t border-dashed space-y-4 py-4">
              {/* <!-- item 1 --> */}
              <div class="flex justify-between group duration-150 cursor-pointer">
                <div>
                  <p class="text-lg text-neutral-600 group-hover:text-red-600 duration-150">
                    iPhone 13 Pro
                  </p>
                  <p class="text-sm text-neutral-400">512GB, Sierra Blue</p>
                </div>
                <span class="text-lg text-neutral-600">1</span>
              </div>

              {/* <!-- item 2 --> */}
              <div class="flex justify-between group duration-150 cursor-pointer">
                <div>
                  <p class="text-lg text-neutral-600 group-hover:text-red-600 duration-150">
                    Apple Watch Series 7
                  </p>
                  <p class="text-sm text-neutral-400">
                    44mm, cellular, space gray
                  </p>
                </div>
                <span class="text-lg text-neutral-600">1</span>
              </div>
            </div>
            <div class="text-center cursor-pointer duration-150 hover:bg-neutral-200 py-0.5 bg-neutral-100 text-neutral-400 font-semibold rounded-lg mt-3">
              +1 more
            </div>
          </div>
        </div>

        {/* <!-- dark --> */}
        <div class="h-screen  md:lg:xl:w-1/2 bg-neutral-800 flex flex-wrap justify-center content-center ">
          {/* <!-- card a --> */}

          <div class="bg-black p-8 rounded-xl shadow-xl shadow-neutral-900  w-96">
            {/* <!-- header --> */}
            <form>
              <main>
                <h1 className="text-xl font-semibold text-gray-700 text-center">
                  Read from smart contract
                </h1>
                <div className="flex justify-center mt-4">
                <input
                    type="text"
                    name="addr"
                    className="input input-bordered block w-full focus:ring focus:outline-none"
                    placeholder="Wallet contract address"
                  />
                </div>
                <footer  className="p-4">
              <button
                type="submit"
                className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
              >
                Get token info
              </button>
              <h1 class="text-lg font-semibold text-white">Devon Lane</h1>
            </footer>

            <div  className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Symbol</th>
                      <th>Total supply</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>{"contractInfo .tokenName"}</th>
                      <td>{"contractInfo .tokenSymbol"}</td>
                      <td>{String("contractInfo.totalSupply")}</td>
                      <td>{"contractInfo.deployedAt"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </main>
            </form>
            <form class="flex justify-between mb-4">
              <main>
                <h1 class="text-lg font-semibold text-white">Devon Lane</h1>
                <p class="mt-0.5  text-neutral-500 text-sm">WooCommerce</p>
              </main>
              <div class="text-right">
                <p class="text-lg font-semibold text-white">$1,848.00</p>
                <p class="mt-0.5  text-neutral-500 text-sm">#940590</p>
              </div>
            </form>
            {/* <!-- bedge --> */}
            <span class="text-orange-300   px-3 text-sm py-1.5 bg-red-900 rounded-lg font-semibold">
              Missing Info
            </span>

            <div class="flex items-center justify-between mt-5">
              <div class="flex items-center">
                <svg
                  class="h-5 w-5 stroke-gray-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="gray-400"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span class="text-neutral-500 text-sm">Added Today</span>
              </div>
              <div class="flex items-center">
                <span class="text-neutral-500 text-sm">0</span>
              </div>
            </div>

            {/* <!-- body --> */}
            <div class="mt-5 border-t border-dashed border-neutral-700 space-y-4 py-4">
              {/* <!-- item 1 --> */}
              <div class="flex justify-between  group cursor-pointer">
                <div>
                  <p class="text-lg text-neutral-400 group-hover:text-red-500 duration-150 ">
                    iPhone 13 Pro
                  </p>
                  <p class="text-sm text-neutral-600">512GB, Sierra Blue</p>
                </div>
                <span class="text-lg text-neutral-400">1</span>
              </div>

              {/* <!-- item 2 --> */}
              <div class="flex justify-between group  cursor-pointer">
                <div>
                  <p class="text-lg text-neutral-400 group-hover:text-red-500 duration-150">
                    Apple Watch Series 7
                  </p>
                  <p class="text-sm text-neutral-600">
                    44mm, cellular, space gray
                  </p>
                </div>
                <span class="text-lg text-neutral-400">1</span>
              </div>
            </div>
            <div class="cursor-pointer hover:bg-neutral-900 duration-150 text-center py-0.5 bg-neutral-800 text-neutral-500 font-semibold rounded-lg mt-3">
              +1 more
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
