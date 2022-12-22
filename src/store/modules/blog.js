import axios from 'axios' 
const state= {
    blogs: [],
    blogDetail: {
        title: null,
        content: null,
        thumbnail: null,
    }
}
const getters= {
    blogs: state => state.blogs,
    blogDetail: state => state.blogDetail
}
const actions= {
    async getBlogs({commit}, searchParam) {
        try {
                const response = await axios.get("/api/blogs", {data: searchParam} )
                commit('SET_BLOG', response.data)
        } catch (error) {
            console.error();
        }
    },
    async addBlog( {commit}, newBlog) {
        try {
            const response = await axios.post('/api/blogs', {data: newBlog})
            commit('SET_BLOG', response.data)
        } catch (error) {
            console.error();
        }
    },
    async deleteBlog( {commit}, blogId) {
        try {
            const response = await axios.delete(`/api/blogs/${blogId}`)
            commit('SET_BLOG', response.data)
        } catch (error) {
            console.error();
        }
    },
    async getBlogDetail( {commit}, blogId) {
        try {
            const response = await axios.get(`/api/blogs/${blogId}`)
            commit('SET_BLOG_DETAIL', response.data)
        } catch (error) {
            console.error();
        }
    }
}
const mutations= {
    SET_BLOG(state, blogs) {
        state.blogs = blogs
    },
    SET_BLOG_DETAIL(state, blogDetail) {
        state.blogDetail = blogDetail
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}