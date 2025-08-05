declare module 'navigation/header' {
  const Header: React.ComponentType;
  export default Header;
}

declare module 'content/landing' {
  const Landing: React.ComponentType;
  export default Landing;
}

declare module 'content/profile' {
  const Profile: React.ComponentType;
  export default Profile;
}

declare module 'market1/market' {
  const Market1: React.ComponentType;
  export default Market1;
}

declare module 'market2/market' {
  const Market2: React.ComponentType;
  export default Market2;
}

declare global {
  interface Window {
    location: Location;
    history: History;
    addEventListener(type: string, listener: EventListener): void;
  }
  
  var window: Window;
  var navigator: Navigator;
}

export {};
