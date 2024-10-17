import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({cars: {data, searchTerm}}) => {
      const filteredCars =  data.filter((car) => {
        return car.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      const cost = filteredCars.reduce((acc, car ) => acc + car.cost, 0)
      console.log(cost)
      return cost;
      // .reduce((acc, car ) => acc + car.cost)
  });
  // const totalCost = 0;
  console.log(totalCost);
  return <div className="car-value">
    Total Cost: ${totalCost}
  </div>
}

export default CarValue;