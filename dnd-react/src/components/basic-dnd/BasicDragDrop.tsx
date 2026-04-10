import MyCard from "./MyCard";
import MyCardContainer from "./MyCardContainer";

const BasicDragDrop = () => {
  return (
    <div className="w-full h-dvh overflow-hidden relative">
      <MyCard className="absolute top-20 left-20 cursor-grab">ID 1</MyCard>
      <MyCardContainer className="absolute top-120 left-120"></MyCardContainer>
    </div>
  );
};

export default BasicDragDrop;
