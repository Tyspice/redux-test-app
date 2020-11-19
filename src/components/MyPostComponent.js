import React from "react";
import { Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
// import { deletePost } from '../actions'
import { deletePost } from "../features/posts/postsSlice";

const MyPostComponent = () => {
	const posts = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	return (
		<React.Fragment>
			{posts.map((post) => {
				return (
					<Card style={{ width: "300px", height: "auto", marginTop: "50px" }} key={post.id}>
						<Card.Header>Blog Post</Card.Header>
						<Card.Body>
							<Card.Title>{post.title}</Card.Title>
							<Card.Text>{post.body}</Card.Text>
							<button
								className="btn btn-danger"
								onClick={(e) => dispatch(deletePost(e.target.value))}
								value={post.id}
							>
								Delete
							</button>
						</Card.Body>
					</Card>
				);
			})}
		</React.Fragment>
	);
};

export default MyPostComponent;
