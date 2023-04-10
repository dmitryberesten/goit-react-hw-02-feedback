import PropTypes from 'prop-types'; // типізація компонента
import css from './FeedbackOptions.module.css'; // стилізація

// Компонент який рендерить кнопки для кожного з можливих типів відгуків
export const FeedbackOptions = ({ onLeavefeedback, options }) => {
  return (
    <div className={css.wrap}>
      {/* Генеруємо список кнопок на основі масиву options */}
      {options.map((name, i) => {
        return (
          <button
            key={i + 1}
            className={css[name]}
            // При кліку на кнопку викликаєтсья функція яка передає назву відгуку як аргумент
            onClick={() => {
              onLeavefeedback(name);
            }}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeavefeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
};

// PropTypes.arrayOf() визначає, що options є масивом, а PropTypes.oneOf() визначає, що кожен елемент масиву options повинен відповідати одному зі списку відповідних значень - 'good', 'neutral', 'bad'.

// Діма Берестень
