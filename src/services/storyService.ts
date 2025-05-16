
import { StoryPage } from "@/components/StoryBook";

// Mock data for development purposes
const MOCK_IMAGES = [
  'https://images.unsplash.com/photo-1472396961693-142e6e269027',
  'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1',
  'https://images.unsplash.com/photo-1518877593221-1f28583780b4',
  'https://images.unsplash.com/photo-1439886183900-e79ec0057170'
];

export interface StoryData {
  title: string;
  pages: StoryPage[];
}

export const generateStoryFromSong = async (songData: { type: string; content: string; title?: string }): Promise<StoryData> => {
  // In a real implementation, this would call an AI API to generate story content
  // For now, we're using mock data
  console.log("Generating story from:", songData);
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Mock data based on song input type
  let mockTitle = "";
  if (songData.title) {
    mockTitle = songData.title;
  } else if (songData.type === "title") {
    mockTitle = `The Tale of ${songData.content}`;
  } else {
    // Extract a title from the first few words of lyrics
    const words = songData.content.split(' ').slice(0, 3).join(' ');
    mockTitle = `${words}...`;
  }
  
  // Generate 4-5 random pages
  const pageCount = Math.floor(Math.random() * 2) + 4; // 4 to 5 pages
  
  const mockPages = Array(pageCount).fill(0).map((_, i) => {
    return {
      text: i === 0 
        ? `Once upon a time, in a world where music came alive, there was a song that told a special story. ${songData.title || (songData.type === "title" ? songData.content : "This melody")} was about to take us on an adventure...`
        : `Page ${i + 1}: The music ${i % 2 === 0 ? "swelled" : "whispered"} as the journey continued. The ${i % 2 === 0 ? "rhythm" : "harmony"} guided our hero through ${i % 3 === 0 ? "mysterious forests" : i % 3 === 1 ? "towering mountains" : "endless oceans"} of sound.`,
      imageUrl: MOCK_IMAGES[i % MOCK_IMAGES.length],
    };
  });
  
  return {
    title: mockTitle,
    pages: mockPages
  };
};
