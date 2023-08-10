import React from 'react';
import './App.css';
import SeatRow from './SeatRow';

function App() {
  return (
    <div className="App">
      <SeatRow seatCount={5} isFirstRow={true} isGreenBorder={true} />
      <SeatRow seatCount={2} isGreenBorder={true} />
      <SeatRow seatCount={5} isGreenBorder={true} />
    </div>
  );
}

export default App;


// import React from 'react';
// import './App.css';
// import SeatRow from './SeatRow';

// function App() {
//   return (
//     <div className="App">
//       <SeatRow seatCount={5} isGreenBorder={true} isGreyBorder={false} />
//       <SeatRow seatCount={2} isGreenBorder={true} isGreyBorder={false} />
//       <SeatRow seatCount={5} isGreenBorder={true} isGreyBorder={false} />
//     </div>
//   );
// }

// export default App;