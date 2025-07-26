import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

// GET all blog posts
export async function GET() {
  try {
    const posts = await sql`SELECT id, slug, title, created_at FROM posts ORDER BY created_at DESC`;
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

// POST a new blog post
export async function POST(request: NextRequest) {
  try {
    const { title, content } = await request.json();

    if (!title || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create a URL-friendly slug from the title
    const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

    const result = await sql`
      INSERT INTO posts (title, content, slug)
      VALUES (${title}, ${content}, ${slug})
      RETURNING id, slug;
    `;

    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    // Check for unique constraint violation (duplicate slug)
    if (error instanceof Error && error.message.includes('duplicate key value violates unique constraint')) {
        return NextResponse.json({ error: 'A post with this title already exists.' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
