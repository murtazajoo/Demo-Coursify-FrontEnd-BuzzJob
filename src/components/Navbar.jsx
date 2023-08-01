import logo from "../assets/images/logo.jpg";
export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between items-center">
        <img src={logo} alt="buzzJob" />
        <a
          href="/"
          className="border border-slate-500 block p-3 rounded-full font-bold bg-slate-100 hover:bg-slate-300 duration-500 uppercase opacity-80"
        >
          Hire Talent
        </a>
      </div>
    </nav>
  );
}
