import React, { useEffect, useState } from "react";
import "./MultiLevelForm.css";

function MultiLevelForm() {
  const [active, setActive] = useState(1);
  const [formData, setFormData] = useState([
    {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
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

//   const handleChange = (e) => {
//     // console.log(e.target.value);
//     // setFormData(e.target.value);
//     // console.log( formData)
//     // setFormData( formData)
//   };
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(temp);
  };

  return (
    <>
      <h1>Multi Level Form</h1>
      <form onSubmit={handleSubmit}>
        <div className={`group ${active === 1 ? "active" : ""}`}>
          <input
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
            type="email"
            placeholder="Enter Email"
            value={formData.email}
            name="email"
            onChange={(e) =>
              tempStorage({ ...temp, [e.target.name]: e.target.value })
            }
          />
          <br />
        </div>
        <div className={`group ${active === 2 ? "active" : ""}`}>
          <input
            type="radio"
            name="gender"
            value={formData.gender}
            onChange={(e) =>
              tempStorage({ ...temp, [e.target.name]: e.target.value })
            }
          />
          <span>Male</span>
          <input
            type="radio"
            name="gender"
            value={formData.gender}
            onChange={(e) =>
              tempStorage({ ...temp, [e.target.name]: e.target.value })
            }
          />
          <span>Female</span>
          <input
            type="radio"
            name="gender"
            value={formData.gender}
            onChange={(e) =>
              tempStorage({ ...temp, [e.target.name]: e.target.value })
            }
          />
          <span>Other</span>
          <br />
        </div>
        <div className={`group ${active === 3 ? "active" : ""}`}>
          <textarea
            placeholder="Address"
            cols="30"
            rows="10"
            value={formData.address}
            name="address"
            onChange={(e) =>
              tempStorage({ ...temp, [e.target.name]: e.target.value })
            }
          ></textarea>
          <br />
          <input
            type="number"
            placeholder="Enter pincode"
            value={formData.pincode}
            name="pincode"
            onChange={(e) =>
              tempStorage({ ...temp, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className={`group ${active === 4 ? "active" : ""}`}>
          <input
            type="radio"
            name="refer"
            value={formData.refer}
            onChange={(e) =>
              tempStorage({ ...temp, [e.target.name]: e.target.value })
            }
          />
          <span>Google</span>
          <input
            type="radio"
            name="refer"
            value={formData.refer}
            onChange={(e) =>
              tempStorage({ ...temp, [e.target.name]: e.target.value })
            }
          />
          <span>Facebook</span>
          <input
            type="radio"
            name="refer"
            value={formData.refer}
            onChange={(e) =>
              tempStorage({ ...temp, [e.target.name]: e.target.value })
            }
          />
          <span>TPO</span>
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
        <div className="buttons">
          {active < 4 && <button onClick={handleNext}>Next</button>}
          {active === 4 && <button type="submit">Submit</button>}
        </div>
      </form>
    </>
  );
}

export default MultiLevelForm;
