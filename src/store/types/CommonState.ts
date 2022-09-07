export interface CommonState {
  loading: boolean;
  dark: boolean;
  route: CurrentRoute | null;
  locale: string;
}

interface CurrentRoute {
  route: string;
  path: string;
  options: object;
}
