export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="max-w-4xl mx-auto w-full py-4 px-6">
      <span className="font-bold text-sm">©{year} Mason Turner</span>
    </footer>
  );
};
