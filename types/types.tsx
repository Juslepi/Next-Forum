export interface Post {
  id: string,
  title: string,
  content?: string,
  poster: string,
  timestamp: Date,
  comments?: Array<Post>
}

export interface Comment {
  id?: string,
  title: string,
  content?: string,
  poster: string,
  timestamp: Date,
}