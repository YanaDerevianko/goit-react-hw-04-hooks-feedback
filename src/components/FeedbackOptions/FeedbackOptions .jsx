import propTypes from "prop-types";
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
     {options.map((option) => {
        return (
          <button key={option} name={option} onClick={(e)=> {onLeaveFeedback(e)}}>
            {option}
          </button>
        );
      })}
    </>
  );
};
FeedbackOptions.propTypes = {
  options: propTypes.array.isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
