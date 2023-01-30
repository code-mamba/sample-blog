import { useState, useEffect } from "react";
import BlogList from "./blogList";


const Home = () => {
	const[blogs, setBlogs] = useState(null)
	const[isPending,setisPending] = useState(true)
	const[error, setError] = useState('')

	const title = 'All Blogs!'

	const handleDelete = (id)=>{
		const newBlogs = blogs.filter((blog)=>blog.id !== id)
		setBlogs(newBlogs)
		
	}

	useEffect(()=>{
		setTimeout(()=>{
			fetch('http://localhost:8000/blogs')
			.then(res=>{
				
				if(!res.ok){
					throw Error('Could not fetch the data for that resource')
					
				}
				
				return res.json()
			})
			.then((data)=>{
				setBlogs(data)
				setisPending(false)
				setError(null)

			}).catch(err=>{
				setisPending(false)
				setError(err.message)})

		},1000)
	},[])
	
	return ( 
		<div className="home">
		{error && <div>{error}</div>}	
		{isPending &&  <div>Loading...</div>}	
		{blogs &&<BlogList blogs={blogs} title = {title} handleDelete = {handleDelete}></BlogList>}
		{blogs &&<BlogList blogs={blogs.filter((blog)=>blog.company==='Detective Comics')} title = {"Dc"} handleDelete = {handleDelete} ></BlogList>}
		{blogs &&<BlogList blogs={blogs.filter((blog)=>blog.company==='marvel')} title = {"Marvel"} handleDelete = {handleDelete} ></BlogList>}
		</div>
	 );
}
 
export default Home;