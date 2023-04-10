import PropTypes from 'prop-types'; // типізація компонента
import css from './Notification.module.css'; // стилізація

export const Notification = ({ message }) => {
  return <p className={css.notif}>{message}</p>;
};

// типізація
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

// Діма Берестень
