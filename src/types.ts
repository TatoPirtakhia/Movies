export type Inputs = {
  email: string;
  name: string;
  password: string;
  repeatPassword: string;
};
export type login = {
  nameOrEmail: string;
  password: string;
};

export type forgotPassword = {
  email: string;
};

export type Recovery = {
  password: string;
  repeatPassword: string;
};


export type avatar = {
  name: string
  avatar: string;
  moviestitle: string[]
  token:string
};

export type  MovieObj = {
  title: string;
  thumbnail: {
    trending: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}


export type BokkmarkSend ={
  name:string
  token: string
  clickedSvg:string
}

export type SendRecoveryPassword = {
  password:string
  repeatPassword:string
  hash:string
}
export type SendInstructions = {
  email: string
  redirectLink:string
}

export type loginName = {
  name: string
  password: string
}
export type loginEmail = {
  email: string
  password: string
}

export interface TrendingMovies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
