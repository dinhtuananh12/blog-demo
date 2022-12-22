import { Server } from 'miragejs';

export function makeServer () {
  return new Server({
    seeds(server) {
      server.db.loadData({
        blogs: [
        { id: 11, title: "Blog 11", content: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", thumbnail: "https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg", author: "", category: [] }
      ]
      })
    },
    routes() {
      this.get('api/blogs', (schema, request) => {
        if (request && request.sendArguments && request.sendArguments[0] !== null) {
          const searchParam = request.sendArguments[0]
          var response = schema.db.blogs.findBy({ title: searchParam});
          if (response) {
            return [response];
          } else {
            return response;
          }
        } else {
          return schema.db.blogs
        }
      })
      this.post('api/blogs', (schema, request) => {
        const blog = JSON.parse(request.requestBody).data
        schema.db.blogs.insert({
          'id': blog.id,
          'title': blog.title,
          'content': blog.content
        })
        return schema.db.blogs
      })
      this.delete('api/blogs/:id', (schema, request) => {
        schema.db.blogs.remove(request.params.id)
        return schema.db.blogs
      })
      this.get('api/blogs/:id', (schema, request) => {
        return schema.db.blogs.find(request.params.id)
      })
    }
  })
}