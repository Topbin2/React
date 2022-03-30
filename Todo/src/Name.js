import React from 'react';

const Name = ({ name, onDelete, id }) => {
    
    return (
        <div>
          <span>{name}</span>  
          <button onClick={() => {
              onDelete(id);
          }}>삭제</button>
        </div>
    );
};

export default Name;