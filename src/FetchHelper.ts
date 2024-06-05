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
    static async searchPosts(params: URLSearchParams) {
        try {
            const res = await fetch(`${API_POSTS}?${params.toString()}`);

            if(!res.ok) {
                throw new Error('Invalid')
            }

            const filtredPosts: Post[] = await res.json();

            return filtredPosts
        } catch(error) {
            return null
        }
    }
    static async createPost(post: Post) {
        try {
            const res = await fetch(API_POSTS, {
                method: 'POST',
                body: JSON.stringify({ post }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
            })

            if(!res.ok) {
                throw new Error('Invalid');
            } 
            
            const resJson = await res.json();
            return resJson

        } catch(error) {
            return null
        }
    }
}