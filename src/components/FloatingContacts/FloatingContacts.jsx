import { Phone, Send } from 'lucide-react';

function FloatingContacts() {
  return (
    <div className="fixed bottom-6 right-4 flex flex-col gap-3 z-50 md:hidden">
      <a
        href="tel:+380978303655"
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
      >
        <Phone size={22} color="var(--white)" />
      </a>

      <a
        href="mailto:element@gmail.com"
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
      >
        <Send size={22} color="var(--white)" />
      </a>
    </div>
  );
}

export default FloatingContacts;
