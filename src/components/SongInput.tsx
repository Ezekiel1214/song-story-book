
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Music, BookText } from "lucide-react";

interface SongInputProps {
  onSubmit: (songData: { type: string; content: string }) => void;
  isLoading: boolean;
}

const SongInput = ({ onSubmit, isLoading }: SongInputProps) => {
  const [inputType, setInputType] = useState<string>("lyrics");
  const [songTitle, setSongTitle] = useState<string>("");
  const [songLyrics, setSongLyrics] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputType === "title" && songTitle) {
      onSubmit({ type: "title", content: songTitle });
    } else if (inputType === "lyrics" && songLyrics) {
      onSubmit({ type: "lyrics", content: songLyrics });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-serif font-bold text-lyrical-deepPurple mb-6 text-center">
        Transform Song into Story
      </h2>
      
      <Tabs defaultValue="lyrics" onValueChange={setInputType} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="lyrics" className="flex gap-2 items-center">
            <Music className="h-4 w-4" />
            <span>Enter Lyrics</span>
          </TabsTrigger>
          <TabsTrigger value="title" className="flex gap-2 items-center">
            <BookText className="h-4 w-4" />
            <span>Enter Song Title</span>
          </TabsTrigger>
        </TabsList>
        
        <form onSubmit={handleSubmit}>
          <TabsContent value="lyrics" className="space-y-4">
            <Textarea
              placeholder="Paste song lyrics here..."
              className="min-h-[200px] text-lyrical-deepPurple"
              value={songLyrics}
              onChange={(e) => setSongLyrics(e.target.value)}
              required
            />
          </TabsContent>
          
          <TabsContent value="title" className="space-y-4">
            <Input
              placeholder="Enter song title and artist (e.g. Bohemian Rhapsody by Queen)"
              className="text-lyrical-deepPurple"
              value={songTitle}
              onChange={(e) => setSongTitle(e.target.value)}
              required
            />
          </TabsContent>
          
          <Button 
            type="submit" 
            className="w-full mt-6 bg-lyrical-purple hover:bg-lyrical-deepPurple text-white font-medium py-2"
            disabled={isLoading}
          >
            {isLoading ? "Creating Your Story..." : "Generate Storybook"}
          </Button>
        </form>
      </Tabs>
    </div>
  );
};

export default SongInput;
