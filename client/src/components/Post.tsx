import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const mockComments = [
	{
		userId: "chuantse_kao",
		comment: "😀 Awsome!",
	},
	{
		userId: "andykao1213",
		comment: "❤️ I love it!",
	},
];

export const Post: React.FC = () => {
	const [comments, setComments] = useState(mockComments);
	return (
		<div className="border bg-white w-6/12 my-10 rounded">
			<header className="flex flex-row items-center">
				<div className="border rounded-full h-12 w-12 m-2"></div>
				<a>user id</a>
			</header>
			<img
				className="object-contain"
				src="https://www.yourtrainingedge.com/wp-content/uploads/2019/05/background-calm-clouds-747964.jpg"
			></img>
			<section>
				<button className="w-10 h-10 text-2xl">
					<FontAwesomeIcon icon="heart" />
				</button>
				<button className="w-10 h-10 text-2xl">
					<FontAwesomeIcon icon="comment" />
				</button>
			</section>
			<ul>
				{comments.map((e) => (
					<li className="px-4 py-1">
						<a className="px-1 font-bold">{e.userId}</a>
						<span>{e.comment}</span>
					</li>
				))}
			</ul>
			<form className="flex flex-row items-stretch">
				<input
					className="p-4 flex-grow focus:border-transparent outline-none"
					type="text"
					placeholder="Add a comment..."
				></input>
				<button className="p-4 text-blue-500 outline-none">Post</button>
			</form>
		</div>
	);
};
