import Catering from './components/Catering';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Wine from './components/Wine';

export default function Home() {
  return (
    <div className="w-full h-full">
      <Hero />
      <Menu />
      <Wine />
      <Catering />
    </div>
  );
}
