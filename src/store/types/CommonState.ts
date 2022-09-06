export interface CommonState {
  loading: boolean;
  dark: boolean;
  route: CurrentRoute | null;
}

interface CurrentRoute {
  route: string;
  path: string;
  options: object;
}
