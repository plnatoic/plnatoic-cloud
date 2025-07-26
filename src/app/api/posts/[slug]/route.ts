import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

// GET a single post by slug
export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const { slug } = params;
        const result = await sql`SELECT id, slug, title, content, created_at, updated_at, image_url FROM posts WHERE slug = ${slug}`;
    if (result.length === 0) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    return NextResponse.json(result[0]);
  } catch (error) {
    console.error(`Error fetching post ${params.slug}:`, error);
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
  }
}

// PUT (update) a post by slug
export async function PUT(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const { slug } = params;
        const { title, content, imageUrl } = await request.json();
    if (!title || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Note: We don't update the slug to maintain URL stability
    const result = await sql`
      UPDATE posts
      SET title = ${title}, content = ${content}, image_url = ${imageUrl}, updated_at = CURRENT_TIMESTAMP
      WHERE slug = ${slug}
      RETURNING id, slug, title, content, image_url, updated_at;
    `;

    if (result.length === 0) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error(`Error updating post ${params.slug}:`, error);
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

// DELETE a post by slug
export async function DELETE(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const { slug } = params;
    const result = await sql`DELETE FROM posts WHERE slug = ${slug} RETURNING id`;

    if (result.length === 0) {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return new NextResponse(null, { status: 204 }); // No Content
  } catch (error) {
    console.error(`Error deleting post ${params.slug}:`, error);
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
