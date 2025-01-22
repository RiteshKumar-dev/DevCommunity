'use client';

import React from 'react';
import Link from 'next/link';
import { Models } from 'appwrite';
import slugify from '@/utils/slugify';
import { avatars } from '@/models/client/config';
import convertDateToRelativeTime from '@/utils/relativeTime';
import { BorderBeam } from './magicui/border-beam';

const QuestionCard = ({ ques }: { ques: Models.Document }) => {
  const [height, setHeight] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
    }
  }, [ref]);

  return (
    <div
      ref={ref}
      className="relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-white/30 bg-white/10 p-6 duration-200 hover:bg-white/20 sm:flex-row"
    >
      <BorderBeam size={height} duration={12} delay={9} />

      <div className="relative flex-shrink-0 text-sm sm:text-right text-white">
        <p className="font-semibold">{ques.totalVotes} votes</p>
        <p className="font-semibold">{ques.totalAnswers} answers</p>
      </div>

      <div className="relative w-full flex flex-col gap-3">
        <Link
          href={`/questions/${ques.$id}/${slugify(ques.title)}`}
          className="text-2xl font-semibold text-orange-500 duration-200 hover:text-orange-600"
        >
          {ques.title}
        </Link>

        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-white">
          {ques.tags.map((tag: string) => (
            <Link
              key={tag}
              href={`/questions?tag=${tag}`}
              className="inline-block rounded-lg bg-white/15 px-3 py-1 text-sm font-medium duration-200 hover:bg-white/20"
            >
              #{tag}
            </Link>
          ))}

          <div className="ml-auto flex items-center gap-3">
            <picture>
              <img
                src={avatars.getInitials(ques.author.name, 24, 24)}
                alt={ques.author.name}
                className="rounded-full"
              />
            </picture>
            <Link
              href={`/users/${ques.author.$id}/${slugify(ques.author.name)}`}
              className="text-orange-500 hover:text-orange-600"
            >
              {ques.author.name}
            </Link>
            <strong className="text-orange-400">
              &#x0022;{ques.author.reputation}&#x0022;
            </strong>
          </div>

          <span className="text-white opacity-70">
            asked {convertDateToRelativeTime(new Date(ques.$createdAt))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
