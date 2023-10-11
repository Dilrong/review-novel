import { DiscussionEmbed } from "disqus-react";

interface Props {
  url?: string;
  identifier: string;
  title: string;
}

const Discussions = ({ url, identifier, title }: Props) => {
  return (
    <div className="flex flex-col grow w-full bg-white">
      <DiscussionEmbed
        shortname="novelduck"
        config={{
          url: url,
          identifier: identifier,
          title: title,
        }}
      />
    </div>
  );
};

export default Discussions;
