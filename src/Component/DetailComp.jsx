const DetailComp = ({ list }) => {
  const details = list?.postDetails;

  return (
    <div className="container mx-auto my-16 p-9">
      <div className="max-w-3xl mx-auto card glass p-5">
        <figure className="mb-5">
          <img src={details?.img} alt="Blog Detail" className="w-full object-cover rounded" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold mb-4">{details?.title}</h2>
          <p className="text-gray-700 leading-relaxed">{details?.content}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
