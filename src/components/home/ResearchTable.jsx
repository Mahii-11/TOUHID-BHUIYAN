import { useState } from "react";

export default function ResearchTable() {
  const [search, setSearch] = useState("");

  const data = [
    {
      id: 25,
      authors:
        "Md Ismail Jobullah, Sakera Begum, Ali Raza A Khan, Muhammad Ismaeel Khan, Aftab Arif, Touhid Bhuiyan",
      description: "A YouTube description box is a section below a video where creators provide additional information, links, credits, and context to enhance viewer engagement and improve search visibility.",  
      paper:
        "Next-Gen Cyber Defense: Integrating Deep Learning into Threat Detection Systems",
      conf: "Journal of Information Systems Engineering and Management",
      year: 2025,
    },
    {
      id: 24,
      authors:
        "Md Shohel Arman, Shakil Ahamed Riaz, Md Asaduzzaman, Touhid Bhuiyan",
      description: "A YouTube description box is a section below a video where creators provide additional information, links, credits, and context to enhance viewer engagement and improve search visibility.",  
      paper:
        "Protecting User Privacy in Mental Health NLP through Contextual LLMs",
      conf: "TEHI 2025 Conference",
      year: 2025,
    },
    {
      id: 23,
      authors:
        "Abu Zahid Md Jalal Uddin, Md Ashraful Islam Nayem, Kh Said Al Mamun, Touhid Bhuiyan",
      description: "A YouTube description box is a section below a video where creators provide additional information, links, credits, and context to enhance viewer engagement and improve search visibility.",  
      paper:
        "AI Safety in U.S. Critical Systems: Balancing Robustness and Accuracy",
      conf: "Applied Intelligence and Informatics 2025",
      year: 2025,
    },
    {
      id: 22,
      authors:
        "Tousif Al Mohaimin, Anzir Rahman Khan, Md Alamgir Kabir, Abu Zahid Md Jalal Uddin, Touhid Bhuiyan",
      description: "A YouTube description box is a section below a video where creators provide additional information, links, credits, and context to enhance viewer engagement and improve search visibility.",  
      paper:
        "DeRoXGB: A Hybrid Framework for Sentiment Analysis using Transformer + XGBoost",
      conf: "AI and Informatics 2025",
      year: 2025,
    },
  ];

  const filtered = data.filter(
    (item) =>
      item.paper.toLowerCase().includes(search.toLowerCase()) ||
      item.authors.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-[#071521] min-h-screen text-white px-4 md:px-10 py-10">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
          All Research Publications
        </h1>
        <div className="w-24 h-[2px] bg-gold mx-auto mt-3"></div>
      </div>

   

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-white/10 backdrop-blur-lg bg-white/5 shadow-lg">
        <table className="w-full text-sm text-left">
          <thead className="sticky top-0 bg-[#0b1d2a] text-yellow-400 uppercase tracking-wider text-xs">
            <tr>
              <th className="p-4">S.No</th>
              <th className="p-4">Author(s)</th>
              <th className="p-4">Description</th>
              <th className="p-4">Research Paper</th>
              <th className="p-4">Conference / Journal</th>
              <th className="p-4">Year</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((item, index) => (
              <tr
                key={item.id}
                className="border-t border-white/10 hover:bg-white/10 transition duration-300"
              >
                <td className="p-4 text-gray-300">{item.id}</td>

                <td className="p-4 text-gray-300 max-w-xs">
                  {item.authors}
                </td>

                 <td className="p-4 text-gray-300 max-w-xs">
                  {item.description}
                </td>

                <td className="p-4 text-white font-medium hover:text-yellow-400 transition">
                  {item.paper}
                </td>

                <td className="p-4 text-gray-300">{item.conf}</td>

                <td className="p-4">
                  <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs">
                    {item.year}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className="px-3 py-1 rounded-md border border-white/10 hover:bg-yellow-500/20 hover:text-yellow-300 transition"
          >
            {num}
          </button>
        ))}
      </div>
    </section>
  );
}