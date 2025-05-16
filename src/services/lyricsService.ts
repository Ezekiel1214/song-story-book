
// Mock data for development purposes
// In a real application, this would connect to a lyrics API
const MOCK_LYRICS_DATABASE = [
  {
    title: "Bohemian Rhapsody",
    artist: "Queen",
    lyrics: `Is this the real life? Is this just fantasy?
Caught in a landslide, no escape from reality
Open your eyes, look up to the skies and see
I'm just a poor boy, I need no sympathy
Because I'm easy come, easy go, little high, little low
Any way the wind blows doesn't really matter to me, to me`
  },
  {
    title: "Imagine",
    artist: "John Lennon",
    lyrics: `Imagine there's no heaven
It's easy if you try
No hell below us
Above us only sky
Imagine all the people
Living for today...`
  },
  {
    title: "Yesterday",
    artist: "The Beatles",
    lyrics: `Yesterday, all my troubles seemed so far away
Now it looks as though they're here to stay
Oh, I believe in yesterday
Suddenly, I'm not half the man I used to be
There's a shadow hanging over me
Oh, yesterday came suddenly`
  },
  {
    title: "Hallelujah",
    artist: "Leonard Cohen",
    lyrics: `I've heard there was a secret chord
That David played, and it pleased the Lord
But you don't really care for music, do you?
It goes like this, the fourth, the fifth
The minor fall, the major lift
The baffled king composing Hallelujah`
  },
  {
    title: "Somewhere Over the Rainbow",
    artist: "Israel Kamakawiwo'ole",
    lyrics: `Somewhere over the rainbow, way up high
And the dreams that you dream of once in a lullaby
Somewhere over the rainbow, blue birds fly
And the dreams that you dream of, dreams really do come true`
  }
];

export const searchLyrics = async (query: string): Promise<Array<{ title: string; artist: string; lyrics: string }>> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Case insensitive search
  const lowercaseQuery = query.toLowerCase();
  
  // Search through mock database
  return MOCK_LYRICS_DATABASE.filter(song => 
    song.title.toLowerCase().includes(lowercaseQuery) || 
    song.artist.toLowerCase().includes(lowercaseQuery)
  );
  
  // In a real implementation, this would be an API call to a lyrics service
  // return fetch(`https://api.lyrics.com/search?q=${encodeURIComponent(query)}`)
  //   .then(res => res.json())
  //   .then(data => data.results);
};
