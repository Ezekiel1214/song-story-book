
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Download, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StoryPage {
  text: string;
  imageUrl: string;
}

interface StoryBookProps {
  title: string;
  pages: StoryPage[];
  onClose: () => void;
}

const StoryBook = ({ title, pages, onClose }: StoryBookProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = pages.length;

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleShare = () => {
    // In a future version, implement sharing functionality
    console.log("Share functionality not implemented yet");
  };

  const handleDownload = () => {
    // In a future version, implement download functionality
    console.log("Download functionality not implemented yet");
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-lyrical-deepPurple">{title}</h1>
        <p className="text-lyrical-purple mt-2">A musical story</p>
      </div>

      <Card className="story-card bg-white/80 backdrop-blur-md p-0 overflow-hidden">
        <div className="flex flex-col md:flex-row min-h-[500px]">
          <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
            <img 
              src={pages[currentPage].imageUrl} 
              alt={`Illustration for page ${currentPage + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
            <div className="story-text text-lg md:text-xl mb-6">
              {pages[currentPage].text}
            </div>
            
            <div className="flex justify-between items-center mt-auto">
              <div className="text-sm text-lyrical-purple">
                Page {currentPage + 1} of {totalPages}
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  className={cn(
                    "border-lyrical-purple text-lyrical-purple hover:bg-lyrical-purple/10",
                    currentPage === 0 && "opacity-50 cursor-not-allowed"
                  )}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={nextPage}
                  disabled={currentPage === totalPages - 1}
                  className={cn(
                    "border-lyrical-purple text-lyrical-purple hover:bg-lyrical-purple/10",
                    currentPage === totalPages - 1 && "opacity-50 cursor-not-allowed"
                  )}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="flex justify-between mt-6">
        <Button variant="outline" onClick={onClose}>
          Create New Story
        </Button>
        
        <div className="flex gap-2">
          <Button 
            variant="secondary" 
            onClick={handleShare}
            className="flex items-center gap-2"
          >
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </Button>
          <Button 
            variant="default" 
            onClick={handleDownload}
            className="flex items-center gap-2 bg-lyrical-deepPurple hover:bg-lyrical-purple"
          >
            <Download className="h-4 w-4" />
            <span>Download</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoryBook;
