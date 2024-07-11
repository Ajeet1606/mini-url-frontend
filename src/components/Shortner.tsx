import {  useContext, useEffect, useState } from "react";
import { URL } from "../routes/IPConfig";
import { ShortLinksContext, ShortedLinksObjectType } from "../context/ShortLinksContext";
interface props {
  inputRef?: React.RefObject<HTMLDivElement> | null;
}


const Shortner: React.FC<props> = ({ inputRef }) => {
  const [link, setLink] = useState<string>("");
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [uniqueId, setUniqueId] = useState<string>("");
  const [shortLinks, setShortLinks] = useState<ShortedLinksObjectType[]>([])
  const shortLinkContext = useContext(ShortLinksContext)
  
  useEffect(() => {
    if (shortLinkContext) {
      const {shortLinks} = shortLinkContext

      setShortLinks(shortLinks);
    }
  }, [])
  

  const handleLinkInput = (e: any) => {
    setLink(e?.target.value);
    setShowErrorMessage(false);
    setUniqueId("");
  };

  const handleGetShortLink = async () => {
    if (link.length == 0) {
      setShowErrorMessage(true);
      return;
    }

    // setUniqueId(link)

    try {
      const response = await fetch(`${URL}/shortUrl`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: link }),
      });

      // Check if the response is OK (status in the range 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the response data
      const data = await response.json();

      setUniqueId(data.uniqueID);
      setShortLinks([...shortLinks, {originalUrl: link, uniqueId: data.uniqueID}]);
      const updatedArray = [...shortLinks, {originalUrl: link, uniqueId: data.uniqueID}];
      localStorage.setItem("shortLinks", JSON.stringify(updatedArray));
      shortLinkContext?.addToShortLinks({originalUrl: link, uniqueId: data.uniqueID})

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        id="shortUrl"
        ref={inputRef}
        className="w-full bg-[#f5f5f5] h-[40vh] sm:h-[50vh] md:h-[60vh] flex justify-center items-center font-montserrat"
      >
        <div className="w-[90%] bg-white h-4/5 border rounded-2xl p-5 flex flex-col justify-around">
          <h3 className="text-base md:text-2xl font-extrabold">
            Shorten A Long Link
          </h3>
          <div className="flex flex-col gap-2">
            <p className="text-sm md:text-lg">
              Enter the URL you want to shorten
            </p>
            <input
              className="w-full h-10 md:h-14 p-4 border rounded-lg focus-within:border-red-500 focus-visible:border-red-500"
              type="text"
              placeholder="https://example.com"
              onChange={(e) => handleLinkInput(e)}
            />
            <span
              className={`text-red-500 ${
                link.trim().length == 0 && showErrorMessage ? "block" : "hidden"
              }`}
            >
              Please provide a valid link
            </span>
          </div>

          <button
            className="bg-red-500 text-white font-bold py-3 md:py-4 px-4 rounded md:w-48"
            onClick={handleGetShortLink}
          >
           Get Your Link
          </button>

          <p
            className={
              uniqueId === ""
                ? "hidden"
                : "text-center text-sm md:text-lg block"
            }
          >
            Your Shortened Link:{" "}
            <span className="text-red-500">
              <a href={`${URL}/${uniqueId}`} target="_blank">
                {`${URL}/${uniqueId}`}
              </a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Shortner;
