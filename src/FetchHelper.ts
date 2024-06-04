import API_POSTS from "./api";
import type Post from "./models";

export default class FetchHelper {
    static async getPosts() {
        try {
            const res = await fetch(API_POSTS);

            if(!res.ok) {
                throw new Error('Invalid')
            }

            const posts: Post[] = await res.json();
            return posts
        } catch (error) {
            return null
        }
    }
    static async getSinglePost(id: number) {
        try {
            const res = await fetch(`${API_POSTS}/${id}`);

            if(!res.ok) {
                throw new Error('Invalid')
            }

            const post: Post = await res.json();
            
            return post;
        } catch (error) {
            return null
        }
    }
}