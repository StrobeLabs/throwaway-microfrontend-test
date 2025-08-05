declare module 'navigation/header' {
  const Header: React.ComponentType;
  export default Header;
}

declare module 'navigation/footer' {
  const Footer: React.ComponentType;
  export default Footer;
}

declare module 'content/landing' {
  const Landing: React.ComponentType;
  export default Landing;
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
