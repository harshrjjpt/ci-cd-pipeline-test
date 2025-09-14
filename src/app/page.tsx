import Greeting from "@/components/Greeting";
import Navbar from "@/components/Navbar";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar brandName="MyApp" />
      <main>
        <div className="flex justify-center items-center py-8">
          <Greeting name="Harsh rajput" />
        </div>
        <Dashboard title="Welcome to Your Dashboard" />
      </main>
    </div>
  );
}
