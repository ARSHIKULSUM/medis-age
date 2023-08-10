import React from 'react';
import Seat from './Seat';

const SeatRow = ({ seatCount, isFirstRow, isGreenBorder }) => {
  const seats = [];
  for (let i = 1; i <= seatCount; i++) {
    seats.push(
      <Seat
        key={i}
        number={i}
        isGreenBorder={isGreenBorder && (!isFirstRow || (isFirstRow && i > 2))}
        isGreyBorder={isFirstRow && (i === 1 || i === 2)}
      />
    );
  }

  return <div className="row">{seats}</div>;
};

export default SeatRow;

// import React from 'react';
// import Seat from './Seat';

// const SeatRow = ({ seatCount, isGreenBorder, isGreyBorder }) => {
//   const seats = [];
//   for (let i = 1; i <= seatCount; i++) {
//     seats.push(
//       <Seat
//         key={i}
//         number={i}
//         isGreenBorder={isGreenBorder}
//         isGreyBorder={isGreyBorder && (i === 1 || i === 2)}
//       />
//     );
//   }

//   return <div className="row">{seats}</div>;
// };

// export default SeatRow;


// import React from 'react';
// import Seat from './Seat';

// const SeatRow = ({ seatCount, isGreenBorder, isGreyBorder }) => {
//   const seats = [];
//   for (let i = 1; i <= seatCount; i++) {
//     seats.push(<Seat key={i} number={i} isGreenBorder={isGreenBorder} isGreyBorder={isGreyBorder} />);
//   }

//   return <div className="row">{seats}</div>;
// };

// export default SeatRow;
