
import { useState } from "react";
import Header from "@/components/Header";
import SongInput from "@/components/SongInput";
import StoryBook from "@/components/StoryBook";
import MusicNotes from "@/components/MusicNotes";
import { generateStoryFromSong, StoryData } from "@/services/storyService";

const Index = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [story, setStory] = useState<StoryData | null>(null);

  const handleSongSubmit = async (songData: { type: string; content: string; title?: string }) => {
    try {
      setIsLoading(true);
      const generatedStory = await generateStoryFromSong(songData);
      setStory(generatedStory);
    } catch (error) {
      console.error("Error generating story:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetStory = () => {
    setStory(null);
  };

  return (
    <div className="min-h-screen relative overflow-hidden lyrical-gradient text-white">
      <MusicNotes />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <Header />
        
        <div className="my-12 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Transform Songs into Magical Stories
          </h1>
          <p className="text-xl opacity-90">
            Enter your favorite lyrics, and watch as AI weaves a beautiful illustrated storybook inspired by the music.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto my-12">
          {story ? (
            <StoryBook 
              title={story.title} 
              pages={story.pages} 
              onClose={resetStory} 
            />
          ) : (
            <SongInput onSubmit={handleSongSubmit} isLoading={isLoading} />
          )}
        </div>
        
        <footer className="mt-16 text-center opacity-80 text-sm">
          <p>© 2025 Lyrical Tale Weaver • AI-Powered Story Generation from Songs</p>
        </footer>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-lyrical-midnight/50 to-transparent"></div>
    </div>
  );
};

export default Index;
