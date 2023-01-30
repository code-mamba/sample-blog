import { useParams } from "react-router-dom";

const BlogDetails = ({blogs,title}) => {
	const{id} = useParams()
	const{blogs} = useParams()

	console.log(blogs)

	return ( 
		<div className="blog-details">
			<h2>Blog Details {id}</h2>

		</div>
	 );
}
 
export default BlogDetails;