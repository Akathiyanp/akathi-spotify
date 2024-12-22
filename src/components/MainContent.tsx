import { Play } from "lucide-react";

const playlists = [
  {
    title: "Today's Top Hits",
    description: "Jung Kook is on top of the Hottest 50!",
    imageUrl:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&q=80",
  },
  {
    title: "RapCaviar",
    description: "New music from Drake, Travis Scott and more.",
    imageUrl:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&q=80",
  },
  {
    title: "All Out 2010s",
    description: "The biggest songs of the 2010s.",
    imageUrl:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&q=80",
  },
  {
    title: "Rock Classics",
    description:
      "Rock legends & epic songs that continue to inspire generations.",
    imageUrl:
      "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&q=80",
  },
  {
    title: "Chill Hits",
    description: "Kick back to the best new and recent chill hits.",
    imageUrl:
      "https://images.unsplash.com/photo-1445985543470-41fba5c3144a?w=300&q=80",
  },
  {
    title: "Viva Latino",
    description: "Today's top Latin hits, elevando nuestra música.",
    imageUrl:
      "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=300&q=80",
  },
];

export default function MainContent() {
  return (
    <div className="flex-1 bg-gradient-to-b from-[#1f1f1f] to-[#121212] overflow-auto pb-36 md:pb-24">
      <div className="p-4 md:p-8">
        <h1 className="text-xl md:text-2xl font-bold text-white mb-6">
          Good afternoon
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {playlists.slice(0, 6).map((playlist, index) => (
            <div
              key={index}
              className="flex items-center bg-[#282828] hover:bg-[#3E3E3E] transition-colors group rounded overflow-hidden"
            >
              <img
                src={playlist.imageUrl}
                alt={playlist.title}
                className="h-16 w-16 md:h-20 md:w-20"
              />
              <div className="flex-1 p-4 min-w-0">
                <h3 className="text-white font-semibold truncate">
                  {playlist.title}
                </h3>
              </div>
              <button className="h-10 w-10 md:h-12 md:w-12 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 mr-2 md:mr-4 hover:scale-105 transition-all">
                <Play
                  className="h-5 w-5 md:h-6 md:w-6 text-black"
                  fill="black"
                />
              </button>
            </div>
          ))}
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
          Made for you
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {playlists.map((playlist, index) => (
            <div
              key={index}
              className="bg-[#181818] p-3 md:p-4 rounded-lg hover:bg-[#282828] transition-colors group"
            >
              <div className="relative mb-4">
                <img
                  src={playlist.imageUrl}
                  alt={playlist.title}
                  className="w-full aspect-square object-cover rounded-md"
                />
                <button className="h-10 w-10 md:h-12 md:w-12 bg-green-500 rounded-full flex items-center justify-center absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 hover:scale-105 transition-all">
                  <Play
                    className="h-5 w-5 md:h-6 md:w-6 text-black"
                    fill="black"
                  />
                </button>
              </div>
              <h3 className="text-white font-semibold mb-2 truncate">
                {playlist.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-2">
                {playlist.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
