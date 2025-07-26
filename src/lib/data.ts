import { sql } from '@/lib/db';

const POSTS_PER_PAGE = 6;

export async function fetchPaginatedPosts(currentPage: number) {
  const offset = (currentPage - 1) * POSTS_PER_PAGE;

  try {
    // Fetch the total number of posts
    const countResult = await sql`SELECT COUNT(*) FROM posts`;
    // The result from a COUNT query is an array with one object, e.g., [{ count: '12' }]
    const totalPosts = parseInt(countResult[0].count, 10);
    const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

    // Fetch the posts for the current page
    const posts = await sql`
      SELECT id, slug, title, created_at
      FROM posts
      ORDER BY created_at DESC
      LIMIT ${POSTS_PER_PAGE}
      OFFSET ${offset}
    `;

    return { posts, totalPages };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch posts.');
  }
}
