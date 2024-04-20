import { FaRupeeSign } from "react-icons/fa";
import PropTypes from "prop-types";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { removeEntry, removetotal } from "../../redux/ReduxSlice";
import { useLocation } from "react-router-dom";

// import { useSelector } from "react-redux";

const EachCartSection = ({ title, price, strikePrice, index }) => {
  // const selector = useSelector((state) => state.counter);
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const lastSegments = pathSegments.pop() || pathSegments.pop();
  const dispatch = useDispatch();
  const removeItemFunc = () => {
    console.log("going from here--->>", index);
    dispatch(removeEntry({ index }));
    dispatch(removetotal(price));
  };

  return (
    <div className="flex justify-between w-full border p-3 border-gray-300">
      <p>{title}</p>
      <div className="flex items-center w-[40%] justify-between">
        <strike className="flex items-center text-gray-400">
          <FaRupeeSign /> {strikePrice}
        </strike>
        <p className="flex items-center">
          <FaRupeeSign /> {price}
        </p>
        {lastSegments === "services" && (
          <div>
            <RxCross2
              className="bg-gray-200 rounded-lg"
              onClick={removeItemFunc}
            />
          </div>
        )}
      </div>
    </div>
  );
};

EachCartSection.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  strikePrice: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default EachCartSection;
