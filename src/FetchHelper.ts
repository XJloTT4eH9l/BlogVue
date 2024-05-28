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
            return posts.slice(0, 10);
        } catch (error) {
            console.log(error);
        }
    }
}