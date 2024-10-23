import SingleQuestion from "./SingleQuestion";

function Questions({ questions }) {
  return (
    <section className="container">
      <h1 className="questions">Question</h1>
      {questions.map((question) => {
        return <SingleQuestion key={question.id} {...question} />;
      })}
    </section>
  );
}

export default Questions;
