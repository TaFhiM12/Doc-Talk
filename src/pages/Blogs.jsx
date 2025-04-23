import { useLoaderData } from 'react-router-dom';
import Blog from '../components/blog';

const Blogs = () => {
    const blogs = useLoaderData();
    
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center text-shadow-sm">Blogs</h1>
            
            <div className="flex flex-col gap-8">
                {Array.isArray(blogs) ? (blogs.map(blog => (
                    <Blog key={blog.id} blog={blog} />
                ))
            ):(
                <p className="text-center col-span-full text-red-500">Failed to load blogs.</p>
            )
            }
            </div>
        </div>
    );
};

export default Blogs;