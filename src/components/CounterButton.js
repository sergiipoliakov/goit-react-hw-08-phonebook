import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment } from 'redux/counterButton/button-action';

function CounterButton({ clicks, onClick }) {
  return (
    <div className="counterButtonBachground">
      <h2>кнопка мемоизации</h2>
      <button type="button" onClick={onClick}>
        Кликнули {clicks} раз
      </button>
    </div>
  );
}
CounterButton.propTypes = {
  clicks: PropTypes.number,
  onClick: PropTypes.func,
};

const mapStateToProps = state => ({
  clicks: state.counterButton.value,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(increment()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterButton);
