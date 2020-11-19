import React from "react";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
// import { newPost, altGetPostAsync, deleteAll } from "../actions";
import { useDispatch } from "react-redux";
import { createPost, deleteAllPosts, fetchRemotePosts } from "../store/features/postsSlice";

export default function InputComponent() {
	const [title, setTitle] = React.useState("");
	const [body, setBody] = React.useState("");

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createPost({ id: uuidv4(), title, body }));
		setTitle("");
		setBody("");
	};

	return (
		<Form style={{ width: "400px" }}>
			<Form.Group controlId="title">
				<Form.Label>Post Title</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</Form.Group>
			<Form.Group controlId="post">
				<Form.Label>Post</Form.Label>
				<Form.Control
					as="textarea"
					rows={3}
					value={body}
					onChange={(e) => setBody(e.target.value)}
				/>
			</Form.Group>
			<ButtonGroup>
				<Button variant="primary" type="submit" onClick={handleSubmit}>
					Submit
				</Button>
				<Button variant="success" onClick={() => dispatch(fetchRemotePosts())}>Get Outside Blog Posts</Button>
				<Button variant="danger" onClick={() => dispatch(deleteAllPosts())}>Delete All</Button>
			</ButtonGroup>
		</Form>
	);
}
