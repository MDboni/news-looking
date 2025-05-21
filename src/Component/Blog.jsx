import { Link } from "react-router-dom"

const Blog = (props) => {
  return (
    <div>
      <div className="container mx-auto my-16 p-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {
            props.bloge?.map((item, i) => (
              <Link key={i} className="card w-full object-cover glass" to={`/Details/${item.id}`}>
                <figure>
                  <img src={item.img} alt="Blog Image" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <p>{item.short}</p>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Blog
