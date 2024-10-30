import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";

// lấy dữ liệu từ localStorage. Nếu có dữ liệu (danh sách),
// nó sẽ chuyển đổi dữ liệu từ chuỗi JSON thành mảng. Nếu không có dữ liệu, nó sẽ trả về một mảng rỗng.
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    list = JSON.parse(localStorage.getItem("list"));
  } else {
    list = [];
  }
  return list;
};

// Lưu trữ dữ liệu vào localStorage.
// Dữ liệu được chuyển đổi từ mảng thành chuỗi JSON trước khi lưu.
const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

// chứa danh sách mặc định khi ứng dụng khởi động.
// Nó sử dụng hàm getLocalStorage để lấy dữ liệu từ localStorage hoặc trả về mảng rỗng nếu không có dữ liệu.
const defaultList = JSON.parse(localStorage.getItem("list") || "[]");

const App = () => {
  const [items, setItems] = useState(defaultList);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
};

export default App;
