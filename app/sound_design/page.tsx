import YouTubeEmbed from "@/components/YouTubeEmbed";

export default function SoundDesign() {
  return (
    <>
      <h3 className="flex justify-around uppercase text-3xl p-8 mt-4 mb-4">
        Sound Design
      </h3>
      <div className="flex flex-col max-w-5xl m-auto h-screen text-lg">
        <div className="leading-relaxed text-lg">
          <YouTubeEmbed
            width="100%"
            height="100%"
            src={"https://www.youtube.com/embed/0sHtHnsIk2w"}
            title={"YouTube video player"}
          />
          <p className="mb-8 mt-4">
            The Murder of Hi Good is a true-crime revisionist western shot on
            35mm, Super 16mm, Super 8mm and digital video. Set in Northern
            California in 1870, the film details the eventual murder of
            California’s most notorious Indian hunter, Hiram Good. Created over
            a seven year period by filmmaker Lee Lynch and co-written by art
            critic Doug Harvey, the film features a diverse set of performers
            including Los Angeles based artists, western re-enactors, and
            regional American Indians.
          </p>
          <p className="mb-8">Watch on Amazon</p>
          <p className="mb-8">The Murder of Hi Good on IMDB.</p>
        </div>
      </div>
    </>
  );
}
