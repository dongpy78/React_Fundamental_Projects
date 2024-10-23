import SingleQuestion from "./SingleQuestion";

function Questions({ questions, activeId, toggleQuestion }) {
  return (
    <section className="container">
      <h1 className="questions">Question</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
}

export default Questions;
