import Button from "./components/Button/button";



export default function Home() {

   

  return (
    <div className="p-8 bg-slate-900 text-slate-100 h-screen">
      <h1 className="text-4xl text-center flex items-center gap-5 before:w-0.5 before:h-7 before:bg-sky-500 before:flex">
        Hello World
      </h1>
      <h1 className="text-4xl font-bold">Hello World Tailwind</h1>
      <h1 className="text-4xl text-center">Hello World Tailwind</h1>

      <button
        className="disabled:hover:shadow-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed
      "
        disabled
      >
        Sign in
      </button>

      <Button  className="bg-sky-500 px-4 py-2 rounded font-medium my-2"  
      
      >
        Sign in
      </Button>
    </div>
  );
}
