export const NameTag = () => {
  return (
    <div className="rounded-xl bg-red-800 border-red-800 border-4 text-center min-w-80 -rotate-2 overflow-hidden shadow-2xl dark:shadow-dark hover:scale-105 transition-transform">
      <div className="text-white px-4 py-2">
        <div className="text-4xl uppercase font-bold">Hello</div>
        <div className="text-xl font-bold">my name is</div>
      </div>
      <div className="bg-white text-black uppercase px-2 py-8 text-3xl rounded font-bold font-[family-name:var(--font-playpen-sans)]">
        Mason Turner
      </div>
    </div>
  );
};
