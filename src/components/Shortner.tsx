const Shortner = () => {
  return (
    <>
      <div className="w-full bg-[#f5f5f5] h-[60vh] flex justify-center items-center font-montserrat">
        <div className="w-[90%] bg-white h-4/5 border rounded-2xl p-5 flex flex-col justify-around">
          <h3 className="text-2xl font-extrabold">Shorten A Long Link</h3>
          <div className="flex flex-col gap-2">
            <p className="text-lg">Enter the URL you want to shorten</p>
            <input
              className="w-full h-14 p-4 border rounded-lg focus-within:border-red-500 focus-visible:border-red-500"
              type="text"
              placeholder="https://example.com"
            />
          </div>

          <button className="bg-red-500 text-white font-bold py-4 px-4 rounded md:w-48">
            Get Your Link
          </button>
        </div>
      </div>
    </>
  );
};

export default Shortner;
