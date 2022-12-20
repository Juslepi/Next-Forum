export interface Post {
  id: string,
  title: string,
  content?: string,
  poster: string,
  timestamp: Date,
  comments?: Array<Post>
}