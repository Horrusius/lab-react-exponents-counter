  const Exponent = ({ num, exponent }) => {

    const result = num**exponent

  
    const exponentSymbol = exponent === 2 ? '²' :
                           exponent === 3 ? '³' :
                           exponent === 4 ? '⁴' :
                           exponent === 5 ? '⁵' : '⁶';
  
    const multiplicationSequence = Array(exponent).fill(num).join(' * ');
  
    return (
      <div className="exponent-counter-container">
        <p className="exponent-label">{num}{exponentSymbol}</p>
        <p className="exponent-result">{multiplicationSequence} = {result}</p>
      </div>
    );
  };
  
  export default Exponent;