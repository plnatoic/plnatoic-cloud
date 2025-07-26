'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

// Interface matches the data structure from the database
interface Post {
  id: number;
  slug: string;
  title: string;
  created_at: string;
  content?: string; // Content is optional
}

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [currentPost, setCurrentPost] = useState<Partial<Post> | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  // Fetch all posts
  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/posts');
      if (!res.ok) throw new Error('Failed to fetch posts');
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleEdit = (post: Post) => {
    setCurrentPost(post);
    setTitle(post.title);
    // Fetch full content for the selected post by its slug
    fetch(`/api/posts/${post.slug}`)
      .then(res => res.json())
      .then(data => setContent(data.content || ''))
      .catch(() => setContent('Error loading content.'));
  };

  const handleDelete = async (slug: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        const res = await fetch(`/api/posts/${slug}`, { method: 'DELETE' });
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error || 'Failed to delete post');
        }
        fetchPosts(); // Refresh list
      } catch (err) {
        alert(err instanceof Error ? err.message : 'An unknown error occurred');
      }
    }
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const method = currentPost ? 'PUT' : 'POST';
    const url = currentPost ? `/api/posts/${currentPost.slug}` : '/api/posts';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to save post');
      }
      
      // Reset form and refresh list
      setCurrentPost(null);
      setTitle('');
      setContent('');
      fetchPosts();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'An unknown error occurred');
    }
  };
  
  const handleCancelEdit = () => {
    setCurrentPost(null);
    setTitle('');
    setContent('');
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST' });
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Failed to log out.');
    }
  };

  if (isLoading) return <div className="container mx-auto p-4">Loading...</div>;
  if (error) return <div className="container mx-auto p-4">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900">Blog Admin</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Logout
        </button>
      </div>

      {/* Form for creating/editing posts */}
      <div className="mb-8 p-4 border rounded-lg bg-gray-900">
        <h2 className="text-xl font-semibold mb-2">{currentPost ? 'Edit Post' : 'Create New Post'}</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-1 font-medium">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded bg-gray-800 text-white border-gray-600 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block mb-1 font-medium">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border rounded h-64 bg-gray-800 text-white border-gray-600 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            {currentPost ? 'Update Post' : 'Create Post'}
          </button>
          {currentPost && (
            <button type="button" onClick={handleCancelEdit} className="ml-2 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors">
              Cancel Edit
            </button>
          )}
        </form>
      </div>

      {/* List of posts */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Existing Posts</h2>
        <ul className="border rounded-lg bg-gray-900 border-gray-700">
          {posts.map((post, index) => (
            <li key={post.id} className={`flex justify-between items-center p-3 ${index < posts.length - 1 ? 'border-b border-gray-700' : ''}`}>
              <div>
                <span className="font-semibold">{post.title}</span>
                <span className="text-sm text-gray-400 ml-2">({new Date(post.created_at).toLocaleDateString()})</span>
              </div>
              <div>
                <button onClick={() => handleEdit(post)} className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600 transition-colors">Edit</button>
                <button onClick={() => handleDelete(post.slug)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

