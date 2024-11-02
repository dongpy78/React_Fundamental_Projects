import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";

function Home() {
  const { openSidebar, openModal } = useGlobalContext();
  console.log(openSidebar, openModal);
  return (
    <main>
      <div>
        <button onClick={openSidebar} className="sidebar-toggle">
          <FaBars />
        </button>
        <button onClick={openModal} className="btn">
          show modal
        </button>
      </div>
    </main>
  );
}

export default Home;
