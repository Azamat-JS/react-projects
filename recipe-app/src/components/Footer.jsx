
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 mt-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">Azamat Abdullayev</h2>
        <p className="text-lg text-gray-300">Full Stack Developer</p>
        <div className="mt-4 space-y-1">
          <p>Email: <a href="mailto:azamat.abdullaev.d@gmail.com" className="underline hover:text-blue-400">azamat.abdullaev.d@gmail.com</a></p>
          <p>Phone: <a href="tel:+998910928353" className="underline hover:text-blue-400">+998 91 092 83 53</a></p>
        </div>
        <p className="text-sm text-gray-500 mt-6">&copy; {new Date().getFullYear()} Azamat Abdullaev. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
