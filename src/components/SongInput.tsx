
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Search } from "lucide-react";
import LyricSearch from "./LyricSearch";

interface SongInputProps {
  onSubmit: (songData: { type: string; content: string }) => void;
  isLoading: boolean;
}

const SongInput = ({ onSubmit, isLoading }: SongInputProps) => {
  const [songLyrics, setSongLyrics] = useState<string>("");
  const [showLyricSearch, setShowLyricSearch] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (songLyrics) {
      onSubmit({ type: "lyrics", content: songLyrics });
    }
  };

  const handleLyricSelect = (lyrics: string) => {
    setSongLyrics(lyrics);
    setShowLyricSearch(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-serif font-bold text-lyrical-deepPurple mb-6 text-center">
        Transform Song into Story
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {showLyricSearch ? (
          <>
            <LyricSearch onLyricSelect={handleLyricSelect} />
            
            <div className="flex justify-center">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowLyricSearch(false)}
                className="text-sm"
              >
                Cancel Search
              </Button>
            </div>
          </>
        ) : (
          <>
            <Textarea
              placeholder="Paste song lyrics here..."
              className="min-h-[200px] text-lyrical-deepPurple"
              value={songLyrics}
              onChange={(e) => setSongLyrics(e.target.value)}
              required
            />
            
            <div className="flex justify-center">
              <Button 
                type="button" 
                onClick={() => setShowLyricSearch(true)}
                variant="outline"
                className="flex items-center gap-2 text-sm"
              >
                <Search className="h-3 w-3" />
                Search for Lyrics Online
              </Button>
            </div>
          </>
        )}
        
        <Button 
          type="submit" 
          className="w-full mt-6 bg-lyrical-purple hover:bg-lyrical-deepPurple text-white font-medium py-2"
          disabled={isLoading || !songLyrics}
        >
          {isLoading ? "Creating Your Story..." : "Generate Storybook"}
        </Button>
      </form>
    </div>
  );
};

export default SongInput;
