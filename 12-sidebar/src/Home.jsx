import { useGlobalContext } from "./context";

function Home() {
  const { openSidebar, openModal } = useGlobalContext();
  console.log(openSidebar, openModal);
  return <div>huhu</div>;
}

export default Home;
