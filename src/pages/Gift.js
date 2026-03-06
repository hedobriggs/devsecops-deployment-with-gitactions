import React from 'react';

// Optional: move this to src/data.js if you prefer centralised data
const Gifts = [
  {
    id: 'gift-10',
    title: '£10 eGift',
    desc: 'Send a quick thank-you.',
    img: '/img/gift-10.jpg',   // put file in public/img/gift-10.jpg
    cta: 'Buy now'
  },
  {
    id: 'gift-25',
    title: '£25 eGift',
    desc: 'Perfect for celebrations.',
    img: '/img/gift-25.jpg',
    cta: 'Buy now'
  },
  {
    id: 'gift-50',
    title: '£50 eGift',
    desc: 'For something extra special.',
    img: '/img/gift-50.jpg',
    cta: 'Buy now'
  }
];

const Gift = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-semibold mb-6">Starbucks® eGifts</h1>

      <p className="text-gray-700 mb-6">
        Choose an eGift amount and make someone’s day.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Gifts.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              <button className="mt-3 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800">
                {item.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Gift;








