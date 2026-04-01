import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { getCards } from "../../services/api";
import { Link } from "react-router";


export default function Cards() {

   const [cards, setCards] = useState([]);

  useEffect(() => {
  const loadCards = async () => {
    try {
      const res = await getCards();  
      console.log("Fetched Cards:", res);

      // Directly set array, long_description ignore
      const formatted = res.map((card) => ({
        id: card.id,
        title: card.title,
        buttonText: card.buttonText,
        slug: card.slug,
        items: card.short_description
          .split("\n")
          .map((i) => i.trim())
          .filter(Boolean),
      }));

      setCards(formatted);
    } catch (error) {
      console.error(error);
    }
  };

  loadCards();
}, []);

  return (
     <section className="bg-gray-50 py-16">
             <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {/* Card 1 */}
                   {cards?.map((card) => (

                       <Card 
                       key={card.id}
                       className="border-none shadow-lg overflow-hidden bg-white rounded-sm flex flex-col">
                      <div className="bg-navy p-6 text-center relative">
                         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-6 h-6 bg-navy"></div>
                         <h4 className="text-white font-serif text-xl tracking-wide"> {card.title}</h4>
                      </div>
                      <CardContent className="pt-10 pb-8 grow">
                         <ul className="space-y-3 text-gray-600 text-sm">
                           {card.items?.map((item, i) => (


                                  <li key={i} className="flex items-start gap-2">
                               <span className="text-gold mt-1.5 text-[8px]">●</span>  {item}
                            </li>
                           ))}
                         </ul>
                      </CardContent>
                      <CardFooter className="pb-8 pt-0 flex justify-center">
                       <Link
                         to={`/capabilities/${card.slug}`} // dynamic URL
                       >
                      <Button className="bg-navy hover:bg-navy-light text-white w-full rounded-sm cursor-pointer">
                       {card.buttonText} &gt;
                     </Button>
                     </Link>
                      </CardFooter>
                   </Card>
                   ))}
                 </div>
             </div>
          </section>
  )
}
