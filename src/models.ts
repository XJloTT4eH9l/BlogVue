 type Post = {
    id: number;
    userId: number;
    title: string;
    body: string;
}

type ShortPost = Omit<Post, 'id' | 'userId'>;

export type { Post, ShortPost }