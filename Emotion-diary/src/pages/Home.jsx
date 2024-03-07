import { useSearchParams } from "react-router-dom";
<<<<<<< HEAD
import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

const Home = () => {
  const [params, setParams] = useSearchParams();

  return (
    <div>
      <Header
        title={"2024년 2월"}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      />
      <DiaryList />
    </div>
  );
=======

const Home = () => {
  const [params, setParams] = useSearchParams();
  //console.log(params.get("value"));
  return <div>Home</div>;
>>>>>>> 932a1ae6d87a6fefa8a7c2122c558f8c18d010da
};

export default Home;
