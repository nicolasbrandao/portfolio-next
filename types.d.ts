type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

type Project = {
  id: string;
  image: StaticImageData;
  repoURL: string;
  deployURL: string;
  title: string;
  description: string;
  technologies: string;
}