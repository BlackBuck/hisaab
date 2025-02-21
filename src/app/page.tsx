import { Button } from "~/components/ui/button"
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function HisaabKitaab() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-900 text-white justify-between">
      <header className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold">HISAAB KITAAB</h1>
      </header>

      <main className="justify-center align-middle">
        <section className="bg-neutral-900 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Expense manager for everyone
            </h2>
            <p className="mb-8 text-xl text-neutral-300">
              Track and manage expenses with ease.
            </p>
            <form action={async()=> {
              "use server";
              const session = await auth();
              if(!session.userId) {
                return redirect('/sign-in')
              } 

              return redirect("/dashboard")
            }}>

            <Button
              type="submit"
              size="lg"
              className="bg-white text-black hover:bg-neutral-200"
            >
              Get Started
            </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-neutral-900 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-neutral-400">
          © 2025 Hisaab Kitaab. All rights reserved.
        </div>
      </footer>
    </div>
  );
}