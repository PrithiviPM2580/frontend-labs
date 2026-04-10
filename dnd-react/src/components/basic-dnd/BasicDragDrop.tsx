import MyCard from "./MyCard";
import MyCardContainer from "./MyCardContainer";

const BasicDragDrop = () => {
  return (
    <div className="w-full h-full overflow-hidden relative">
      <MyCard />
      <MyCardContainer />
    </div>
  );
};

export default BasicDragDrop;
