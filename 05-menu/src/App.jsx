import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

// const tempCategories = menu.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// const tempItems = ["all", ...tempSet];
// console.log(tempItems);

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
// console.log(allCategories);

const App = () => {
  const [menuItems, setMenuItems] = useState(menu); // dùng để lấy dữ liệu từ data
  const [categories, setCategories] = useState(allCategories); // Dùng để lọc sản phẩm vd "all - breakfast - Lunch - Shakes"

  // lấy category khi click vào button và sau đó lọc category phù hợp
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category); // giữ lại những sản phẩm trùng với category khi click vào
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
