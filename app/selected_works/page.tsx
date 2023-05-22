export default function SelectedWorks() {
  const ulClass = 'mb-4';
  const aClass = 'hover:border-b';
  return (
    <>
      <h3 className="flex justify-around uppercase text-3xl p-8 mt-4">Selected Works</h3>
      <div className="flex flex-col max-w-5xl m-auto h-screen">
        <div className="leading-relaxed text-lg">
          <ul className={ulClass}>
            <a className={aClass} href="https://youtu.be/J451WMaAms8"><em>Glimmer/Glow</em></a> for piano and percussion quartet (2021)
          </ul>
          <ul className={ulClass}>
            <a className={aClass} href="https://youtu.be/1y72j58PL-Y"><em>Passover</em></a> for flute (2020)
          </ul>
          <ul className={ulClass}>
            <a className={aClass} href="https://youtu.be/HyKHnJb5nfI"><em>In Response</em></a> for flute and fixed media (2019)
          </ul>
          <ul className={ulClass}>
            <a className={aClass} href="https://youtu.be/CbMFIUBiRjg"><em>Paraphrase</em></a> for bass clarinet, viola, and piano (2019)
          </ul>
          <ul className={ulClass}>
            <a className={aClass} href="https://youtu.be/S7T-7jmADfA"><em>Keepsake (for Rishi)</em></a> for amplified contrabass flute and contraforte (2018)
          </ul>
          <ul className={ulClass}>
            <a className={aClass} href="https://youtu.be/ym51ZzgkxN0"><em>La Musique</em></a> for flute and alto flute (2017)
          </ul>
          <ul className={ulClass}>
            <a className={aClass} href="https://youtu.be/qX9J_GU7hwI"><em>MISMA</em></a> for violin, clarinet, cello, and piano (2017)
          </ul>
          <ul className={ulClass}>
            <a className={aClass} href="https://soundcloud.com/brett-austin-eastman-1/mainframe-movements-4-5-6-7"><em>MAINFRAME</em></a> for string quartet (2016)
          </ul>
        </div>
      </div>
    </>
  )
}
