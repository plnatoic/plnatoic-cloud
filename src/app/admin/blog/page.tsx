'use client';

import { useState, useEffect, FormEvent } from 'react';
import ClientFormattedDate from '@/components/ClientFormattedDate';
import { useRouter } from 'next/navigation';

interface Post {
  slug: string;
  title: string;
  created_at: string;
  content?: string; 
  image_url?: string; 
}

const initialPostData = {
  title: '',
  content: '',
  imageUrl: '',
};

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  // State for the form
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [postData, setPostData] = useState(initialPostData);

  const router = useRouter();

  const fetchPosts = () => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data.posts))
      .catch(() => setError('Failed to fetch posts.'));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // When Edit is clicked, populate the form with the post's data
  const handleEdit = (post: Post) => {
    setEditingPost(post);
    // Also fetch the full content
     fetch(`/api/posts/${post.slug}`)
      .then(res => res.json())
      .then(fullPost => {
        setPostData({
          title: fullPost.title || '',
          content: fullPost.content || '',
          imageUrl: fullPost.image_url || '',
        });
      })
      .catch(() => setError('Failed to fetch post content.'));
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
    const method = editingPost ? 'PUT' : 'POST';
    const url = editingPost ? `/api/posts/${editingPost.slug}` : '/api/posts';
    const body = JSON.stringify({ 
      title: postData.title, 
      content: postData.content, 
      imageUrl: postData.imageUrl 
    });

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body,
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to save post');
      }
      
      handleCancelEdit(); // Reset form
      fetchPosts(); // Refresh list
    } catch (err) {
      alert(err instanceof Error ? err.message : 'An unknown error occurred');
    }
  };

  // Reset form to its initial state
  const handleCancelEdit = () => {
    setEditingPost(null);
    setPostData(initialPostData);
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST' });
      router.push('/admin/login');
    } catch (err) {
      alert('Logout failed.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin - Blog Posts</h1>
          <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        </div>

        {error && <p className="text-red-500 bg-red-900 p-3 rounded-md">{error}</p>}

        <div className="mb-8 p-4 border rounded-lg bg-gray-900">
          <h2 className="text-xl font-semibold mb-2">{editingPost ? 'Edit Post' : 'Create New Post'}</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block mb-1 font-medium">Title</label>
              <input
                id="title"
                type="text"
                value={postData.title}
                onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                className="w-full p-2 border rounded bg-gray-800 text-white border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="imageUrl" className="block mb-1 font-medium">Image URL</label>
              <input
                id="imageUrl"
                type="text"
                placeholder="https://example.com/image.png"
                value={postData.imageUrl}
                onChange={(e) => setPostData({ ...postData, imageUrl: e.target.value })}
                className="w-full p-2 border rounded bg-gray-800 text-white border-gray-600 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="content" className="block mb-1 font-medium">Content (Markdown)</label>
              <textarea
                id="content"
                value={postData.content}
                onChange={(e) => setPostData({ ...postData, content: e.target.value })}
                className="w-full p-2 border rounded h-64 bg-gray-800 text-white border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="flex justify-end space-x-4">
              {editingPost && (
                <button type="button" onClick={handleCancelEdit} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                  Cancel
                </button>
              )}
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {editingPost ? 'Update Post' : 'Create Post'}
              </button>
            </div>
          </form>
        </div>

        <div className="space-y-4">
          {posts.map(post => (
            <div key={post.slug} className="p-4 border rounded-lg bg-gray-800 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-400"><ClientFormattedDate dateString={post.created_at} /></p>
              </div>
              <div className="space-x-2">
                <button onClick={() => handleEdit(post)} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded">
                  Edit
                </button>
                <button onClick={() => handleDelete(post.slug)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
