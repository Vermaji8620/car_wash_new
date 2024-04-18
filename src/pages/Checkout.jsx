import { useState, useRef, useEffect } from "react";
// import SeparateCartComponent from "../components/SeparateCartComponent";
import { useNavigate } from "react-router-dom";
import { TbCurrentLocation } from "react-icons/tb";
import { useSelector } from "react-redux";

const Checkout = () => {
  const navigate = useNavigate();
  const selector = useSelector((state) => state.counter);

  useEffect(() => {
    if (selector.items.length === 0) navigate("/services");
  }, [selector.items, navigate]);

  const formRef = useRef(null);
  const [currentState, setCurrentState] = useState({
    address: "",
    landmark: "",
    fname: "",
    lname: "",
  });
  const regex = /^(?=.*[a-zA-Z0-9].{3,})[a-zA-Z0-9 ,]+$/;
  const [buttonSetting, setButtonSetting] = useState({
    indxdate: null,
    valueinButtondate: "",
  });
  const monthArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [buttonSettings, setButtonSettings] = useState({
    indxtime: null,
    valueinButtontime: "",
  });

  useEffect(() => {
    setButtonSettings({
      indxtime: null,
      valueinButtontime: "",
    });
    setDisableIndex([]);
  }, [buttonSetting.indxdate]);

  const changeFunc = (e) => {
    if (
      (e.target.name === "fname" || e.target.name === "lname") &&
      !/^[a-zA-Z]*$/.test(e.target.value)
    )
      return;
    setCurrentState({
      ...currentState,
      [e.target.name]: e.target.value,
    });
  };

  const [errors, setErrors] = useState({
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    address: "",
    landmark: "",
  });

  const paymentHandler = async () => {
    console.log("handler defined again");
    const paymentOptions = {
      amount: 500,
      currency: "INR",
      receipt: "qwasqi1",
    };
    const data = await fetch("http://localhost:4000/payment/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentOptions),
    });
    const res = await data.json();
    let options = {
      key: import.meta.VITE_RAZORPAY_KEY_ID,
      amount: "50000",
      currency: "INR",
      name: "Wash Car",
      description: "Test Transaction",
      order_id: res.id,
      handler: async function (response) {
        const body = { ...response };
        const validateRes = await fetch("http://localhost:4000/payment/check", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        const ress = await validateRes.json();
        console.log(ress);
      },
      prefill: {
        name: "Car Wash",
        description: "Car Washing service",
        contact: "6564566515",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
  };

  // const submitForm = (event) => {
  //   event.preventDefault();
  //   let fromDatavariable = {
  //     address: currentState.address,
  //     fname: currentState.fname,
  //     lname: currentState.lname,
  //     landmark: currentState.landmark,
  //     day_and_date: buttonSetting.valueinButtondate,
  //     time: buttonSettings.valueinButtontime,
  //   };

  //   if (fromDatavariable.day_and_date === "") {
  //     setErrors({ ...errors, date: "Date field required" });
  //     return;
  //   }
  //   if (fromDatavariable.time === "") {
  //     setErrors({ ...errors, time: "Time field required" });
  //     return;
  //   }
  //   if (fromDatavariable.fname === "") {
  //     setErrors({ ...errors, firstName: "First Name required" });
  //     return;
  //   }
  //   if (fromDatavariable.lname === "") {
  //     setErrors({ ...errors, lastName: "Last Name required" });
  //     return;
  //   }
  //   if (fromDatavariable.address === "") {
  //     setErrors({ ...errors, address: "Address field required" });
  //     return;
  //   }
  //   if (fromDatavariable.landmark === "") {
  //     setErrors({ ...errors, landmark: "Landmark field required" });
  //     return;
  //   }

  //   if (!regex.test(currentState.address)) {
  //     setErrors({ ...errors, address: "Invalid Address" });
  //     return;
  //   }
  //   if (!regex.test(currentState.landmark)) {
  //     setErrors({ ...errors, landmark: "Invalid Lanmark" });
  //     return;
  //   }
  //   if (!regex.test(currentState.fname)) {
  //     setErrors({ ...errors, firstName: "Invalid First Name" });
  //     return;
  //   }
  //   if (!regex.test(currentState.lname)) {
  //     setErrors({ ...errors, lastName: "Invalid Last Name" });
  //     return;
  //   }
  //   const extract = fromDatavariable.day_and_date.split("\n");
  //   const extract_date = extract[0];
  //   const extract_month = monthArray.indexOf(extract[1]);
  //   fromDatavariable.day_and_date = `${extract_date}-${
  //     extract_month + 1
  //   }-${new Date().getFullYear()}`;

  //   console.log(fromDatavariable);
  //   paymentHandler();
  // };

  const fetchLocationFunc = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            // now fetch the actual addresss
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            const address = data.display_name;
            const spliting = address.split(",");
            setCurrentState({
              ...currentState,
              address: address,
              landmark: spliting[1],
            });
          } catch (err) {
            console.log("No location 1", err);
            return;
          }
        },
        (error) => {
          console.log("No location 2 ", error);
          return;
        }
      );
    } else {
      console.log("No location  3 ");
      return;
    }
  };

  // const handleFormSubmit = () => {
  //   if (formRef.current) {
  //     const formevent = new Event("submit", { cancelable: true });
  //     formRef.current.dispatchEvent(formevent);
  //     submitForm(formevent);
  //   }
  // };

  const [disableIndex, setDisableIndex] = useState([]);

  useEffect(() => {
    const errorKeys = Object.keys(errors);
    const timers = [];
    for (const key of errorKeys) {
      if (errors[key]) {
        const timer = setTimeout(() => {
          setErrors((prevErrors) => ({ ...prevErrors, [key]: "" }));
        }, 2500);
        timers.push(timer);
      }
    }

    // Cleanup function to clear the timeouts if the component unmounts
    return () => timers.forEach(clearTimeout);
  }, [errors]);
  return (
    <div className="bg-[#F6F6F6]">
      <div className="flex justify-between w-[95%] mx-auto pt-10">
        <div className="p-3 w-[70%] gap-10 flex flex-col">
          <div className="bg-white rounded-[20px] p-8 flex flex-col gap-3">
            <p className="font-semibold text-3xl">Logged In</p>
            <p className="text-gray-400">Customer | 8620032336</p>
          </div>

          <form
            ref={formRef}
            // onSubmit={submitForm}
            className="flex flex-col gap-6"
          >
            <div className=" bg-white rounded-[20px] p-8 flex flex-col gap-8">
              <div className="flex gap-16 items-center">
                <div className="text-xl font-bold">
                  Select Date and Time of Service :
                </div>
              </div>
              <div className="flex gap-3">
                {Array.from({ length: 12 }, (_, i) => {
                  const dateCalculation = (new Date().getDate() + i) % 32;
                  if (dateCalculation === 0) return null;
                  return (
                    <div key={i}>
                      <button
                        type="button"
                        onClick={(event) => {
                          setButtonSetting({
                            indxdate: i,
                            valueinButtondate: event.target.innerText,
                          });
                        }}
                        className={`border ${
                          i === buttonSetting.indxdate
                            ? "bg-[#60A5FA] text-white border-none"
                            : "bg-white"
                        } border-black selectedhover rounded-lg w-16 h-16 gap-10`}
                      >
                        {dateCalculation}
                        <br />
                        {
                          monthArray[
                            dateCalculation < new Date().getDate()
                              ? new Date().getMonth() + 1
                              : new Date().getMonth()
                          ]
                        }
                      </button>
                    </div>
                  );
                })}
              </div>
              <p className="text-red-700 font-bold font-['calibri']">
                {errors.date}
              </p>
              <p className="font-bold text-[15px]">Pick Time Slot</p>
              <div className="w-full flex justify-between gap-5 flex-wrap">
                {Array.from({ length: 8 }, (_, i) => {
                  const cal1 = (i + 11) % 12 === 0 ? 12 : (i + 11) % 12;
                  const cal2 = (i + 11 + 1) % 12 === 0 ? 12 : (i + 11 + 1) % 12;
                  const findDisableOrNot =
                    buttonSetting.valueinButtondate.split("\n")[0] ==
                    new Date().getDate()
                      ? cal1 === new Date().getHours() % 12 ||
                        (cal1 === 11 || cal1 === 12
                          ? cal1 < new Date().getHours()
                          : cal1 + 12 < new Date().getHours())
                      : false;
                  if (findDisableOrNot && !disableIndex.includes(i)) {
                    setDisableIndex((prev) => [...prev, i]);
                  }
                  return (
                    <div key={i}>
                      <button
                        type="button"
                        disabled={findDisableOrNot}
                        className={`w-[210px] ${
                          i === buttonSettings.indxtime
                            ? "bg-[#60A5FA] text-white border-none"
                            : ""
                        } border border-black selectedhover p-3 rounded-lg ${
                          disableIndex.includes(i)
                            ? "cursor-not-allowed bg-gray-400 hover:bg-gray-400 border-none text-white"
                            : ""
                        }`}
                        onClick={(event) => {
                          setButtonSettings({
                            indxtime: i,
                            valueinButtontime: event.target.innerText,
                          });
                        }}
                      >
                        {cal1}-{cal2}PM
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="text-red-700 font-bold font-['calibri']">
                {errors.time}
              </div>
            </div>

            <div className="p-8 flex gap-4 bg-white rounded-[20px]">
              <div className="flex w-[70%] flex-col gap-8">
                <div className="flex w-full">
                  <div className="flex w-full flex-col gap-4">
                    <label id="" className="font-bold text-xl">
                      Enter First Name
                    </label>
                    <div className="flex gap-2">
                      <div className="w-full flex flex-col gap-2">
                        <input
                          type="text"
                          name="fname"
                          id="fnameeee"
                          className="border h-12 w-full rounded-lg place_indent input_outline_css border-black"
                          placeholder="Enter your first name"
                          onChange={changeFunc}
                          value={currentState.fname}
                          autoComplete="new-password"
                        />
                        <div>
                          <p className="text-red-700 font-bold font-['calibri']">
                            {errors.firstName}{" "}
                          </p>
                        </div>
                      </div>
                      <div className="w-full flex flex-col gap-2">
                        <input
                          type="text"
                          name="lname"
                          id="lnameeee"
                          className="border h-12 w-full rounded-lg place_indent input_outline_css border-black"
                          placeholder="Enter your last name"
                          onChange={changeFunc}
                          autoComplete="new-password"
                          value={currentState.lname}
                        />
                        <div>
                          <p className="text-red-700 font-bold font-['calibri']">
                            {errors.lastName}{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label id="" className="font-bold text-xl">
                    Enter Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="textinputaddress"
                    className="border h-12 rounded-lg place_indent input_outline_css border-black"
                    placeholder="Enter your address"
                    autoComplete="new-password"
                    onChange={changeFunc}
                    value={currentState.address}
                  />
                  <p className="text-red-700 font-bold font-['calibri']">
                    {errors.address}{" "}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <label id="" className="font-bold text-xl">
                    Enter Landmark
                  </label>
                  <input
                    type="text"
                    name="landmark"
                    id="textinputlandmark"
                    className="border h-12 rounded-lg place_indent input_outline_css border-black"
                    placeholder="Enter your landmark"
                    onChange={changeFunc}
                    autoComplete="new-password"
                    value={currentState.landmark}
                  />
                  <p className="text-red-700 font-bold font-['calibri']">
                    {errors.landmark}{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center flex-col pt-10">
                <button
                  type="button"
                  onClick={fetchLocationFunc}
                  className="bg-[#60A5FA] text-white p-3 flex items-center gap-2 rounded-lg"
                >
                  <TbCurrentLocation />
                  Current Location
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* <div className="relative top-3 w-[27%]">
          <SeparateCartComponent onButtonClick={handleFormSubmit} />
        </div> */}
      </div>
    </div>
  );
};

export default Checkout;
