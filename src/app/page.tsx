"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'





export default function App() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /sections/home when the root URL ("/") is accessed
    router.push('/sections/home');
  }, []);

  return null; // You can return null or any other content you want here
}
