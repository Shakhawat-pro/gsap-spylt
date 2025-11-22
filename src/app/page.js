import Navbar from "@/components/Navbar/Navbar";
import HomePage from "@/components/pages/HomePage/HomePage";


export default function Home() {
  return (
    <div className="">
      <main className="">
        <Navbar />
        <div className="smooth-wrapper">
          <div className="smooth-content">
            <HomePage />
            <div className="border border-red-500 h-dvh"></div>
          </div>
        </div>

      </main>
    </div>
  );
}
