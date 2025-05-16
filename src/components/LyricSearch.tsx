
import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { searchLyrics } from "@/services/lyricsService";
import { toast } from "@/hooks/use-toast";

interface LyricSearchProps {
  onLyricSelect: (lyrics: string) => void;
}

const LyricSearch = ({ onLyricSelect }: LyricSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Array<{ title: string; artist: string; lyrics: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    try {
      setIsLoading(true);
      const results = await searchLyrics(searchQuery);
      setSearchResults(results);
      if (results.length === 0) {
        toast({
          title: "No lyrics found",
          description: "Try a different search term or artist name",
        });
      }
    } catch (error) {
      toast({
        title: "Error searching lyrics",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectLyrics = (lyrics: string) => {
    onLyricSelect(lyrics);
    setSearchResults([]);
    setSearchQuery("");
  };

  return (
    <div className="w-full space-y-4">
      <form onSubmit={handleSearch} className="flex gap-2">
        <Input
          placeholder="Search song title or artist..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="text-lyrical-deepPurple"
        />
        <Button 
          type="submit" 
          variant="outline" 
          size="icon" 
          disabled={isLoading}
          className="bg-lyrical-purple/20 hover:bg-lyrical-purple/40 border-lyrical-purple/30"
        >
          <Search className="h-4 w-4 text-lyrical-purple" />
        </Button>
      </form>

      {isLoading && <p className="text-center text-sm text-lyrical-deepPurple">Searching for lyrics...</p>}

      {searchResults.length > 0 && (
        <div className="max-h-60 overflow-y-auto rounded-md border border-lyrical-purple/20 bg-white/80">
          <ul className="divide-y divide-lyrical-purple/10">
            {searchResults.map((result, index) => (
              <li
                key={index}
                className="p-3 hover:bg-lyrical-purple/10 cursor-pointer transition-colors"
                onClick={() => handleSelectLyrics(result.lyrics)}
              >
                <h3 className="font-medium text-lyrical-deepPurple">{result.title}</h3>
                <p className="text-sm text-lyrical-deepPurple/70">{result.artist}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LyricSearch;
