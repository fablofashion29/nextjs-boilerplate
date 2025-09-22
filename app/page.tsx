import Storefront from "../components/Storefront";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        <Storefront />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-gray-500">
         FabloFashion.com © 2025 
         email your query to fablofashion@outlook.com 
      </footer>
    </div>
  );
}
