import Cards from "@/components/Cards";
import Charts from "@/components/Charts";

export default function Home() {
    return (
      <main className="sm:ml-14 p-4">
        <section className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <Cards/>
        </section>

        <section className="mt-4 flex flex-col md:flex-row gap-4">
            <Charts/>
        </section>
      </main>
    );
  }
  