import { convertDate } from '$lib/utils';

export async function load({ params }){
  const post = await import(`../${params.slug}.md`)
  const { title, date, author } = post.metadata
  const content = post.default

  let published = convertDate(date)

  return {
    content,
    title,
    published,
    author
  }
}