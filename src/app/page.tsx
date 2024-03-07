"use client"; 


import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://private-anon-415f920582-pizzaapp.apiary-mock.com/restaurants/')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  console.log(data);

  return (
    <div>
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        {data ? (
          <div>{/* Render your data here */}</div>
        ) : (
          <div>Loading...</div>
        )}

        {/* Rest of your code */}
      </main>
    </div>
  );
}