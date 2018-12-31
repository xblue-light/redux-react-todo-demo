import React from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import { deletePost } from '../actions';
import Loader from 'react-loader-spinner'

function PostList({ posts, onDelete }) {
    if (!posts.length) {
        return (
            <div className="text-center">
                <br/>
                <br/>
                <Loader 
                    type="Puff"
                    color="#00BFFF"
                    height="100"	
                    width="100"
                />   
            </div>
        )
    }
    return (
        <div>
            {
                posts.map(post => {
                    return ( <Post post={ post } onDelete={ onDelete } key={ post._id } /> );
                })
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDelete: id => {
            dispatch(deletePost(id));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList);