import Card from "../Card/Card";

const Cards = ({ theme }) => {
  const CardsData = [
    {
      Name: "BBB TRACKER",
      Text: "A Crawler that gets the numbers of follows from Instagram accounts",
    },
    {
      Name: "COSINE MATCHER",
      Text: "A program that uses cosine similarity to detects pipes and beat Flappy Bird",
    },
    {
      Name: "GITHUB viewer",
      Text: "A page where you can search for a github profile and visualize it in a nicer way",
    },
  ];
  return (
    <div className="flex h-1/2 w-full justify-center  bg-gray-100 px-64 dark:bg-zinc-800">
      <div className="flex h-full w-2/3 flex-col   py-10">
        <div className="mb-5 flex w-full flex-col items-center">
          <h1 className="mb-5 font-Inter text-4xl font-bold text-zinc-900 dark:text-gray-100">
            MY PORTFOLIO
          </h1>
          <div className="flex flex-col items-center gap-3 ">
            <div className="h-0.5 w-24 rounded bg-zinc-900 dark:bg-gray-100" />
            <div className="h-0.5 w-48 rounded bg-zinc-900 dark:bg-gray-100" />
          </div>
        </div>
        <div className="  flex h-full w-full justify-evenly ">
          {CardsData.map((item, index) => (
            <Card key={item.Name} data={{ ...item, index }} theme={theme} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
