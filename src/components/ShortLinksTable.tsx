import { useContext, useEffect, useState } from "react";
import {
  ShortedLinksObjectType,
  ShortLinksContext,
} from "../context/ShortLinksContext";
import { URL } from "../routes/IPConfig";

const ShortLinksTable = () => {
  const [shortedLinks, setShortedLinks] = useState<ShortedLinksObjectType[]>(
    []
  );
  const shortLinkContext = useContext(ShortLinksContext);

  useEffect(() => {
    if (shortLinkContext) {
      const { shortLinks } = shortLinkContext;
      setShortedLinks(shortLinks);
    }
  }, [shortLinkContext]);

  return (
    <div
      id="trackUrl"
      className={`w-full bg-[#f5f5f5] ${"h-max"} flex justify-center items-center font-montserrat py-3`}
    >
      <div className="w-[90%] bg-white h-4/5 border rounded-2xl p-5 flex flex-col justify-around">
        <h3 className="text-base md:text-2xl font-extrabold mb-2">
          All Your Shorted Links
        </h3>

        <div>
          <div className=" max-h-[50vh] overflow-auto">
            <table className="min-w-full shadow-md border">
              <thead className="bg-white shadow-md sticky top-0">
                <tr>
                  <th className="py-2 px-4 border-b-2 border-gray-300 text-red-500 text-left">
                    Serial No.
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-300 text-red-500 text-left">
                    Original URL
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-300 text-red-500 text-left">
                    Shorted URL
                  </th>
                </tr>
              </thead>
              <tbody className="mt-3">
                {shortedLinks.map((item, index: number) => (
                  <tr className={`${index % 2 ? "bg-slate-100" : ""}`}>
                    <td className="py-2 px-4 border-b border-gray-300 w-1/5">
                      {index + 1}.
                    </td>
                    <td className="py-2 px-4 border-b border-gray-300 w-2/5">
                    <a href={item.originalUrl} target="_blank">
                        {item.originalUrl}
                      </a>
                    </td>
                    <td className="py-2 px-4 border-b border-gray-300 w-2/5">
                      <a href={`${URL}/${item.uniqueId}`} target="_blank">
                        {`${URL}/${item.uniqueId}`}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortLinksTable;
