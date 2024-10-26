import { useState } from "react";
import { shortList, list, longList } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

function Carousel() {
  const [people, setPeople] = useState(list); // Trạng thái để lưu danh sách người. Bắt đầu với list.
  // Trạng thái để lưu chỉ số của người hiện tại đang được hiển thị. Bắt đầu với 0, nghĩa là người đầu tiên.
  const [currentPerson, setCurrentPerson] = useState(0);

  // Hàm này sẽ giảm chỉ số currentPerson để hiển thị người trước đó.
  const prevSlide = () => {
    // Nếu oldPerson là 0, khi giảm xuống sẽ là -1. Để tránh âm,
    //  ta cộng people.length rồi lấy phần dư với people.length để quay về cuối danh sách.
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  };

  // Hàm này sẽ tăng chỉ số currentPerson để hiển thị người tiếp theo.
  const nextSlide = () => {
    // Nếu oldPerson là người cuối cùng, nó sẽ trở về 0 khi tăng chỉ số.
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };

  return (
    <section className="slider-container">
      {/* Mỗi person trong people được duyệt qua và tạo thành một article chứa thông tin của họ. */}
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? "visible" : "hidden",
            }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={() => prevSlide()}>
        <FiChevronsLeft />
      </button>

      <button type="button" className="next" onClick={() => nextSlide()}>
        <FiChevronsRight />
      </button>
    </section>
  );
}

export default Carousel;
