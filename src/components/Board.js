import React from 'react';
import Square from './Square';

const styles = {
  border: '5px solid darkblue',
  borderRadius: '10px',
  width: '500px',
  height: '500px',
  margin: '0 auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}

const Board = ({ squares, onClick }) => (
    <div style={styles}>
        {
            squares.map((square, i) => (
                <Square key={i} value={square} onClick={() => onClick(i)} />
            ))
        }
    </div>
);

export default Board;