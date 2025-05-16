
import { Music } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-4">
      <div className="container flex justify-center items-center">
        <div className="flex items-center gap-2">
          <Music className="h-6 w-6 text-lyrical-gold" />
          <h1 className="text-2xl md:text-3xl font-serif font-bold bg-gradient-to-r from-lyrical-purple to-lyrical-gold text-transparent bg-clip-text">
            Lyrical Tale Weaver
          </h1>
        </div>
      </div>
      <div className="container text-center mt-1">
        <p className="text-sm md:text-base text-white/80 italic">
          Create stories from songs • Search lyrics • Weave tales
        </p>
      </div>
    </header>
  );
};

export default Header;
