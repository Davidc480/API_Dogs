const FiltradoTemperaments = async (state, temperaments) => {
  return state.filter((dog) => {
    const dogTemperaments = dog.temperament?.split(", ") || [];
    return temperaments.some((temp) => dogTemperaments.includes(temp));
  });
};

export default FiltradoTemperaments;

// const temp = [
//   {
//     id: 1,
//     name: "Affenpinscher",
//     life_span: "10 - 12 years",
//     temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
//     weight: "6 - 13",
//     height: "9 - 11.5",
//     image: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
//   },
//   {
//     id: 2,
//     name: "Afghan Hound",
//     life_span: "10 - 13 years",
//     temperament: "Aloof, Clownish, Dignified, Independent, Happy",
//     weight: "50 - 60",
//     height: "25 - 27",
//     image: "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg",
//   },
//   {
//     id: 3,
//     name: "African Hunting Dog",
//     life_span: "11 years",
//     temperament: "Wild, Hardworking, Dutiful",
//     weight: "44 - 66",
//     height: "30",
//     image: "https://cdn2.thedogapi.com/images/rkiByec47.jpg",
//   },
// ];

// const tempe = ["Stubborn"];
