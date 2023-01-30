import { Link } from "react-router-dom";

const BlogList = ({blogs,title, handleDelete}) => {



	return ( 
		<div className="blog-list" >
			<h2>{title}</h2>
			{blogs.map((blog)=>(
				<div className="blog-preview" key={blog.id}>
				<Link to={`/blogs/${blog.id,blogs}`} >	
				<h2>{blog.superhero}</h2>
				<p>Character name {blog.name}</p>
				</Link>
			</div>

			))}

		</div>
	 );
}
 
export default BlogList;