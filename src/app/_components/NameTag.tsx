export const NameTag = () => {
  return (
    <div className="rounded-xl bg-red-800 border-red-800 border-4 text-center -rotate-2 overflow-hidden shadow-2xl transition-transform sm:min-w-80 dark:shadow-dark hover:scale-105">
      <div className="text-white px-4 py-2 font-plain">
        <div className="text-4xl uppercase font-bold">Hello</div>
        <div className="text-xl font-bold">my name is</div>
      </div>
      <div className="bg-white text-black uppercase px-2 py-8 text-5xl rounded font-bold font-[family-name:var(--font-gaegu)]">
        Mason
      </div>
    </div>
  );
};
