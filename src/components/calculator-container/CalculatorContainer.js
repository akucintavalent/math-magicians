import styles from './CalculatorContainer.module.css';
import Calculator from '../calculator/Calculator';

const CalculatorContainer = () => (
  <div className={styles.calculatorContainer}>
    <h2>Let&apos;s do some math!</h2>
    <Calculator />
  </div>
);

export default CalculatorContainer;
