interface Props {
  width: string;
  height: string;
  src: string;
  title: string;
}

export default function YouTubeEmbed({
  width = '100%', height = '100%', src, title,
}: Props) {
  return (
    <div className="aspect-video">
      <iframe
        width={width}
        height={height}
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
