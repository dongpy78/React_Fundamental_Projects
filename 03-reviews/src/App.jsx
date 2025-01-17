import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  // Đặt trạng thái đối tượng đầu tiên là 0
  const [index, setIndex] = useState(0);
  // Trong mảng dữ liệu people lấy ra đối tượng đầu tiên trong mảng
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex((currentIndex) => {
      // đang ở slide 2 sẽ sang slide 3
      const newIndex = (currentIndex + 1) % people.length;
      return newIndex;
    });
  };
  const prevPerson = () => {
    setIndex((currentIndex) => {
      // Ví dụ đang ở slide số 3 thì sẽ về slide số 2
      const newIndex = (currentIndex - 1 + people.length) % people.length;
      return newIndex;
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    const newIndex = randomNumber % people.length;
    setIndex(newIndex);
  };

  console.log(name);
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={() => prevPerson()}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={() => nextPerson()}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={() => randomPerson()}>
          suprise me
        </button>
      </article>
    </main>
  );
};
export default App;
