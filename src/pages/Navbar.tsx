const Navbar = () => {

  function handleScroll(id: string) {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  return (
    <>
      <div className="w-full md:h-8 flex justify-between items-center px-5 md:px-10 py-3 md:py-8 border border-b">
        <h3 className="text-xl md:text-3xl font-playwrite font-extrabold text-red-500">
          Mini URL
        </h3>
        {/* <p className='hidden md:block text-sm md:text-xl font-montserrat font-semibold'>The URL Shortner, You Always Needed</p> */}
        <div className="w-36 md:w-52 flex justify-between">
          <p className="text-xs md:text-base font-montserrat font-semibold cursor-pointer"
          onClick={() => handleScroll('#shortUrl')}>
            Short URL
          </p>

          <p className="text-xs md:text-base font-montserrat font-semibold cursor-pointer">
            Track Visits
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
