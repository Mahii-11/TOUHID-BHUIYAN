// /components/TableSkeleton.jsx

export default function TableSkeleton({ rows = 5, columns = 5 }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10 backdrop-blur-lg bg-white/5 shadow-lg animate-pulse">
      <table className="w-full text-left table-fixed">
        <thead className="bg-[#0b1d2a] text-yellow-400 uppercase text-[8px] sm:text-[9px] md:text-xs lg:text-xs">
          <tr>
            {Array.from({ length: columns }).map((_, idx) => (
              <th
                key={idx}
                className="p-[4px] sm:p-[6px] md:p-3 lg:p-4"
              >
                <div className="h-3 bg-white/20 rounded w-full"></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, rIdx) => (
            <tr key={rIdx} className="border-t border-white/10">
              {Array.from({ length: columns }).map((_, cIdx) => (
                <td
                  key={cIdx}
                  className="p-[4px] sm:p-[6px] md:p-3 lg:p-4"
                >
                  <div className="h-3 bg-white/20 rounded w-full"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}