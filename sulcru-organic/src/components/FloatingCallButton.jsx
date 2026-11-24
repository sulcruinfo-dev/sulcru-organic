
import { useState } from 'react';

export default function FloatingCallButton() {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      name: 'Arrie Van Niekerk',
      number: '072 204 7800',
      tel: '0722047800',
    },
    {
      name: 'Ruaan Van Der Merwe',
      number: '061 514 1042',
      tel: '0615141042',
    },
  ];

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">

      {isOpen && (
        <div className="mb-3 w-72 overflow-hidden rounded-2xl border border-yellow-400/40 bg-zinc-950 shadow-2xl">

          <div className="bg-[#FFFF00] px-5 py-4 text-black">
            <h3 className="text-lg font-black">
              CALL SULCRU ORGANIC
            </h3>
            <p className="text-sm">
              Choose who you would like to speak to.
            </p>
          </div>

          <div className="p-3 space-y-2">
            {contacts.map((contact) => (
              <a
                key={contact.tel}
                href={`tel:${contact.tel}`}
                className="flex items-center justify-between gap-3 rounded-xl border border-zinc-700 p-4 text-white transition hover:border-yellow-400 hover:bg-zinc-900"
              >
                <div>
                  <p className="font-bold">
                    {contact.name}
                  </p>
                  <p className="text-sm text-zinc-400">
                    {contact.number}
                  </p>
                </div>

                <span className="text-xl text-yellow-400">
                  ☎
                </span>
              </a>
            ))}
          </div>

        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex items-center gap-2 rounded-full bg-[#FFFF00] px-5 py-3 font-extrabold text-black shadow-lg transition hover:bg-yellow-300"
      >
        <span className="text-xl">☎</span>
        {isOpen ? 'CLOSE' : 'CALL NOW'}
      </button>

    </div>
  );
}
