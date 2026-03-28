import { useEffect, useState } from "react";
import { getPublication } from "../services/api";
import TableSkeleton from "../loaders/TableSkeleton";

export default function ResearchTable() {
   const [data, setData] = useState([]);
   const [meta, setMeta] = useState({});
   const [loading, setLoading] = useState(true);

   useEffect(() => {
    const loadData = async (page = 1) => {
      try {
        setLoading(true);
        const res = await getPublication(page);
        setData(res.data);
        setMeta(res.meta);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
   }, []);
 

  return (
    <section className="bg-[#071521] min-h-screen text-white px-2 md:px-10 py-8">
      
      {/* Title (unchanged lg, smaller mobile) */}
      <div className="text-center mb-6">
        <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold">
          All Research Publications
        </h1>
        <div className="w-16 md:w-24 h-[2px] bg-yellow-400 mx-auto mt-2"></div>
      </div>

      {/* Table */}
      {loading ? (
        <TableSkeleton rows={5} columns={5} />
      ) : (
        <>

          <div className="overflow-x-auto rounded-2xl border border-white/10 backdrop-blur-lg bg-white/5 shadow-lg">
        <table className="w-full text-left lg:text-sm text-[8px] sm:text-[9px] md:text-xs table-fixed">
          
          {/* HEADER */}
          <thead className="sticky top-0 bg-[#0b1d2a] text-yellow-400 uppercase tracking-wider 
                            text-[8px] sm:text-[9px] md:text-xs lg:text-xs">
            <tr>
                  <th className="p-[4px] sm:p-[6px] md:p-3 lg:p-4 w-[40px]">ID</th>
                  <th className="p-[4px] sm:p-[6px] md:p-3 lg:p-4">Topic</th>
                  <th className="p-[4px] sm:p-[6px] md:p-3 lg:p-4">Description</th>
                  <th className="p-[4px] sm:p-[6px] md:p-3 lg:p-4">Journal</th>
                  <th className="p-[4px] sm:p-[6px] md:p-3 lg:p-4 w-[60px]">Year</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-t border-white/10 hover:bg-white/10 transition"
              >
                <td className="p-[4px] sm:p-[6px] md:p-3 lg:p-4 text-gray-300">
                  {item.id}
                </td>

                <td className="p-[4px] sm:p-[6px] md:p-3 lg:p-4 text-gray-300 break-words leading-tight">
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-yellow-400 underline transition"
                      >
                        {item.topic}
                      </a>
                </td>

                <td className="p-[4px] sm:p-[6px] md:p-3 lg:p-4 text-gray-300 break-words leading-tight">
                   {item.short_description}
                </td>

                <td className="p-[4px] sm:p-[6px] md:p-3 lg:p-4 text-white font-medium break-words leading-tight hover:text-yellow-400">
                   {item.journal}
                </td>

                <td className="p-[4px] sm:p-[6px] md:p-3 lg:p-4">
                  <span className="px-[4px] py-[1px] sm:px-2 sm:py-[2px] rounded bg-yellow-500/10 text-yellow-400 
                                   text-[8px] sm:text-[9px] md:text-xs">
                    {item.year}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

         <div className="flex justify-center mt-6 gap-2 flex-wrap">
            {meta?.links?.map((link, index) => {
              const page = link.url
                ? new URL(link.url).searchParams.get("page")
                : null;

              return (
                <button
                  key={index}
                  disabled={!link.url}
                  onClick={() => page && loadData(page)}
                  className={`px-2 py-[2px] text-[8px] sm:text-[10px] md:text-sm rounded border 
                    ${link.active ? "bg-yellow-500/20 text-yellow-300" : "border-white/10"}
                    ${!link.url && "opacity-40 cursor-not-allowed"}
                  `}
                  dangerouslySetInnerHTML={{ __html: link.label }}
                />
              );
            })}
          </div>
        </>
      )}
    </section>
  );
}