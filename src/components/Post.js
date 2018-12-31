import React from 'react';

// Post.js component is responsible for rendering out our all the Posts.
const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  padding: '15px',
  marginBottom: '15px',
  maxWidth: '500px'
};

export default ({ post: { title, startDate, firstName, body, _id }, onDelete }) => {
  return (
    <div style={styles}>
        <h2>{title}</h2>
        <p><strong>{startDate}</strong></p>
        <p>{firstName}</p>
        <p>{body}</p>
        <button className="btn btn-danger" 
                type="button" 
                onClick={() => onDelete(_id)}
        >
        Remove
        </button>
    </div>
  );
};