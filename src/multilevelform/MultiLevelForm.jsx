import React, { useEffect, useState } from "react";
import "./MultiLevelForm.css";

function MultiLevelForm() {
  const [active, setActive] = useState(1);
  const [formData, setFormData] = useState([
    {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      address: "",
      pincode: "",
      refer: "",
    },
  ]);

  const [temp, tempStorage] = useState({});

  const handleNext = (e) => {
    e.preventDefault();

    setActive((prev) => prev + 1);
  };

  // useEffect(() => {
  //   const savedFormData = localStorage.getItem("formData");
  //   if (savedFormData) {
  //     setFormData(JSON.parse(savedFormData));
  //   }
  // }, []);

  useEffect(() => {
    // localStorage.setItem("formData", JSON.stringify(formData));
    console.log(formData);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(temp);
    const newFormData = { ...temp };
    const prevData = JSON.parse(localStorage.getItem("formSubmissions")) || [];
    const updatedData = [...prevData, newFormData];
    localStorage.setItem("formSubmissions", JSON.stringify(updatedData));
  };

  return (
    <>
      <div className="flex items-center justify-center flex-col h-screen ">
        <div className="w-auto h-auto rounded-lg text-center bg-gradient-to-r from-emerald-300 to-rose-300 px-10 py-5 text-white">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl text-gray-800 py-4 px-10 bg-gradient-to-r from-orange-300 to-fuchsia-500 rounded-xl">
            Multi Level Form
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="">
              <div className={`group ${active === 1 ? "active" : ""}`}>
                <div className="flex my-6 flex-col items-center">
                  <input
                    className="px-2 py-1 rounded text-black focus:outline-none"
                    type="text"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    name="fname"
                    onChange={(e) =>
                      tempStorage({ ...temp, [e.target.name]: e.target.value })
                    }
                    // onChange={handleChange}
                  />
                  <br />
                  <input
                    className="px-2 py-1 rounded text-black focus:outline-none"
                    type="text"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    name="lname"
                    onChange={(e) =>
                      tempStorage({ ...temp, [e.target.name]: e.target.value })
                    }
                  />
                  <br />
                  <input
                    className="px-2 py-1 rounded text-black focus:outline-none"
                    type="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    name="email"
                    onChange={(e) =>
                      tempStorage({ ...temp, [e.target.name]: e.target.value })
                    }
                  />
                  {/* <br /> */}
                </div>
              </div>
            </div>
            <div className={`group ${active === 2 ? "active" : ""}`}>
              <div className="flex flex-wrap gap-10 my-5 justify-center items-center text-black">
                <div className="flex gap-1">
                  <input
                    className="text-black focus:outline-none"
                    type="radio"
                    name="gender"
                    value={formData.gender}
                    onChange={(e) =>
                      tempStorage({ ...temp, [e.target.name]: e.target.value })
                    }
                  />
                  <span>Male</span>
                </div>
                <div className="flex gap-1">
                  <input
                    className="text-black focus:outline-none"
                    type="radio"
                    name="gender"
                    value={formData.gender}
                    onChange={(e) =>
                      tempStorage({ ...temp, [e.target.name]: e.target.value })
                    }
                  />
                  <span>Female</span>
                </div>
                <div className="flex gap-1">
                  <input
                    className="text-black focus:outline-none"
                    type="radio"
                    name="gender"
                    value={formData.gender}
                    onChange={(e) =>
                      tempStorage({ ...temp, [e.target.name]: e.target.value })
                    }
                  />
                  <span>Other</span>
                </div>
              </div>

              {/* <br /> */}
            </div>
            <div className={`group ${active === 3 ? "active" : ""}`}>
              <div className="my-5 flex flex-col items-center">
                <textarea
                  className="px-2 py-1 rounded text-black focus:outline-none"
                  placeholder="Address"
                  cols="23"
                  rows="3"
                  value={formData.address}
                  name="address"
                  onChange={(e) =>
                    tempStorage({ ...temp, [e.target.name]: e.target.value })
                  }
                ></textarea>
                <br />
                <input
                  className="px-2 py-1 rounded text-black focus:outline-none"
                  type="number"
                  placeholder="Enter pincode"
                  value={formData.pincode}
                  name="pincode"
                  onChange={(e) =>
                    tempStorage({ ...temp, [e.target.name]: e.target.value })
                  }
                />
              </div>
            </div>
            <div className={`group ${active === 4 ? "active" : ""}`}>
              <div className="my-5 flex flex-wrap gap-5 items-center justify-center text-black ">
                <div className="flex gap-1">
                  <input
                    type="radio"
                    name="refer"
                    value={formData.refer}
                    onChange={(e) =>
                      tempStorage({ ...temp, [e.target.name]: e.target.value })
                    }
                  />
                  <span>Google</span>
                </div>
                <div className="flex gap-1">
                  <input
                    type="radio"
                    name="refer"
                    value={formData.refer}
                    onChange={(e) =>
                      tempStorage({ ...temp, [e.target.name]: e.target.value })
                    }
                  />
                  <span>Facebook</span>
                </div>
                <div className="flex gap-1 ">
                  <input
                    type="radio"
                    name="refer"
                    value={formData.refer}
                    onChange={(e) =>
                      tempStorage({ ...temp, [e.target.name]: e.target.value })
                    }
                  />
                  <span>TPO</span>
                </div>
                <div className="flex gap-1">
                  <input
                    type="radio"
                    name="refer"
                    value={formData.refer}
                    onChange={(e) =>
                      tempStorage({ ...temp, [e.target.name]: e.target.value })
                    }
                  />
                  <span>Friend</span>
                </div>
              </div>
            </div>

            <div className="buttons">
              {active < 4 ? (
                <button
                  className=" text-white font-medium bg-gradient-to-r from-red-400 to-orange-700 py-2 px-6 rounded-3xl shadow-lg hover:shadow-xl focus:outline-none hover:text-black transition duration-300 ease-in-out "
                  onClick={handleNext}
                  style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 4px 6px 0px" }}
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-fuchsia-500  py-2 px-6 rounded-3xl text-white shadow-lg hover:shadow-xl focus:outline-none  transition duration-300 ease-in-out hover:text-black font-medium"
                  onClick={handleSubmit}
                  style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 4px 6px 0px" }}
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default MultiLevelForm;
