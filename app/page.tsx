import About from './about/page';
import SelectedWorks from './selected_works/page';
import Production from './production/page';
import SoundDesign from './sound_design/page';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <h1>Brett Austin Eastman</h1>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <About />
        <SelectedWorks />
        <Production />
        <SoundDesign />
      </div>
    </main>
  )
}
