import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";

const App = () => {
  // tạo ra mảng các màu sắc với các sắc thái sáng hơn và tối hơn của mã màu
  //  được tạo all(10) vào bảng điều khiển của trình duyệt
  const [colors, setColors] = useState(new Values("#f15025").all(10));
  return (
    <main>
      <Form />
      <ColorList />
    </main>
  );
};
export default App;
