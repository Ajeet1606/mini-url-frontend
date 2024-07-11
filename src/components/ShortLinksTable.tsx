
const ShortLinksTable = () => {
  return (
    <div
      id="trackUrl"
      className={`w-full bg-[#f5f5f5] ${"h-max"} flex justify-center items-center font-montserrat py-3`}
    >
      <div className="w-[90%] bg-white h-4/5 border rounded-2xl p-5 flex flex-col justify-around">
        <h3 className="text-base md:text-2xl font-extrabold mb-2">
          All Your Shorted Links
        </h3>    
      </div>
    </div>
  )
}

export default ShortLinksTable