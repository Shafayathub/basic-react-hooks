// eslint-disable-next-line react/prop-types
const Card = ({ name, price, img, description }) => {
  return (
    <div className="w-80 border border-yellow-500 rounded-lg">
      <img className="w-full rounded-xl p-2" src={img} alt="" />

      <div className="p-2 md:p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <h3 className="text-lg font-semibold"> price:${price}</h3>
        <p className="my-2 text-justify">{description}</p>
        <button
          onClick={() => console.log("clicked service card")}
          className="w-full p-2 bg-yellow-500 rounded-md border-2 hover:bg-yellow-600 text-white font-medium"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default Card;
