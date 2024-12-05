import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "Grâce à MonCouple, j'ai enfin trouvé le courage de prendre une décision difficile mais nécessaire. Les quiz et les conseils m'ont aidée à voir clair dans ma situation. Aujourd'hui, mes enfants et moi vivons une vie plus sereine, et je suis reconnaissante d'avoir eu cet accompagnement pendant cette période cruciale.",
    author: "Sophie",
    details: "39 ans, mère de 2 enfants",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    content: "J'étais au bord de la rupture avec ma femme. Ce site m'a permis de comprendre mes erreurs et de travailler sur moi-même. Les outils de communication proposés ont transformé nos échanges. Nous sommes toujours ensemble aujourd'hui et plus unis que jamais.",
    author: "Thomas",
    details: "45 ans, marié",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    content: "Après mon divorce, je me sentais perdue et j'avais du mal à me reconstruire. Les ressources sur la confiance en soi et l'acceptation m'ont aidée à retrouver mon équilibre. Aujourd'hui, j'assume pleinement qui je suis et ma nouvelle vie amoureuse est épanouie.",
    author: "Marie",
    details: "42 ans",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

export default function Testimonials() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ils nous font confiance
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Découvrez comment MonCouple a aidé d'autres personnes dans leur parcours
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <Quote className="h-8 w-8 text-[#85C196] mb-4" />
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.author}
                />
                <div className="ml-4">
                  <div className="font-medium text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.details}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}