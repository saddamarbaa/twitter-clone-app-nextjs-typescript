export interface RandomUserT {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: Record<string, unknown>;
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

export interface RandomUserApiResponse {
  results: RandomUser[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}
