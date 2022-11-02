function triple(value: number | string): number | string {
  if (typeof value === 'number') {
    return value * 3;
  }

  return value.repeat(3);
}

interface I_Movie {
  title: string;
  duration: number;
}

interface I_TvShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getDuration(media: I_Movie | I_TvShow) {
  if ('numEpisodes' in media) {
    return media.numEpisodes * media.episodeDuration;
  }

  media.duration;
}
