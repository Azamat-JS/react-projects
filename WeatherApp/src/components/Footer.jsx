
const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 px-4 mt-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">Azamat Abdullayev</h2>
        <p className="text-lg text-gray-300">Full Stack Developer</p>
        <div className="mt-4 space-y-1">
        </div>
        <p className="text-sm text-gray-500 mt-6">&copy; {new Date().getFullYear()} Azamat Abdullaev. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
