import React from "react";

function page() {
  return (
    <div>
      <div className="md:px-12 px-2 py-20">
        <div>
          <h2 className="text-3xl text-[#096FC2] border-b-2 pb-3 border-[#EA6E71] w-fit uppercase">
            Get A Quote
          </h2>
          <p className="text-slate-700 max-w-md py-7">
            Contact us today to get started and discover why we are the
            preferred choice for countless individuals and businesses.
          </p>
        </div>
        <form>
          <div className="flex flex-wrap justify-center gap-9">
            <div>
              <h3 className="text-slate-600 font-medium text-xl">
                Contact Information
              </h3>
              <div>
                <div className="flex flex-wrap gap-3 my-4">
                  <div className="flex-1">
                    <label className="text-slate-600" htmlFor="holder">
                      First Name:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="email"
                      required
                      className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-slate-600" htmlFor="bank">
                      Last Name:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="bank"
                      required
                      className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 my-4">
                  <div className="flex-1">
                    <label className="text-slate-600" htmlFor="holder">
                      Email:
                    </label>
                    <br />
                    <input
                      type="email"
                      name="email"
                      required
                      className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-slate-600" htmlFor="bank">
                      Phone Number:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="bank"
                      required
                      className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 my-4">
                  <div className="flex-1">
                    <label className="text-slate-600" htmlFor="holder">
                      Country Name:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="email"
                      required
                      className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-slate-600" htmlFor="bank">
                      District Name:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="bank"
                      required
                      className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="text-slate-600" htmlFor="bank">
                    Address:
                  </label>
                  <br />
                  <input
                    type="text"
                    name="bank"
                    required
                    className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-slate-600 font-medium text-xl">
                Move Details
              </h3>
              <div>
                <div className="flex-1 my-4">
                  <label className="text-slate-600" htmlFor="holder">
                    Requested Move Date
                  </label>
                  <br />
                  <input
                    type="date"
                    name="email"
                    required
                    className="border outline-none border-gray-300 py-[7px] rounded mb-1 w-full"
                  />
                </div>
                <div className="flex flex-wrap gap-3 my-4">
                  <div className="flex-1">
                    <label className="text-slate-600" htmlFor="holder">
                      From Area:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="email"
                      required
                      className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-slate-600" htmlFor="bank">
                      Describe Location:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="bank"
                      required
                      className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 my-4">
                  <div className="flex-1">
                    <label className="text-slate-600" htmlFor="holder">
                      To Area:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="email"
                      required
                      className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-slate-600" htmlFor="bank">
                      Describe Location:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="bank"
                      required
                      className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="text-slate-600" htmlFor="bank">
                    Type Movement:
                  </label>
                  <br />
                  <select required className="outline-none rounded mb-1 w-full py-[10px] bg-white border">
                    <option>Residential moving</option>
                    <option>Commercial moving</option>
                    <option>Local Moving</option>
                    <option>Long Distance Moving</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-9">

          <button type="submit" className="border text-slate-600 py-2 px-2 hover:bg-blue-500 hover:text-white rounded hover:border-none">
            Get A Quote
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
