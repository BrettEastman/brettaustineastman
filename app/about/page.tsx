import Image from "next/image";
import Headshot from "../../public/images/BrettFull.jpg";

export default function About() {
  return (
    <>
      <h3 className="flex justify-around uppercase text-3xl p-8 mt-4">About</h3>
      <div className="flex flex-col max-w-5xl m-auto">
        <div className="leading-relaxed">
          <p className="mb-4">
            Brett Austin Eastman is a composer, producer, teacher, and
            performing musician, whose music has been performed by Yarn/Wire and
            Del Sol String Quartet. He has recently been commissioned by
            Tingyuan Luo, Slow Wave, Keyed Kontraptions and Siroko Duo. He was a
            semifinalist in the NYC Contemporary Music Symposium competition of
            2021.
          </p>
          <p className="mb-4">
            As concert curator, he is currently co-producing a concert series
            with Jessie Nucho featuring music for flute and electronics
            literally and conceptually inspired by different forms of feedback.
            The first concert “In Response” was presented January 2020 and
            focused on the physical and emotional effects of feedback in dialog.
            In July 2021, they presented the second concert “Self vs. Other”
            which explored anxiety and feelings of isolation in the
            shelter-in-place life. In 2019, Brett composed for a concert he
            co-curated with the ensemble Slow Wave, featuring new music for
            viola, clarinet, and piano. In 2018, he curated and produced a
            concert titled “Punk in Times of War” which featured Messiaen’s
            Quatuor pour la fin du Temps, Nick Vasallo’s When the War Began, and
            Eastman’s MISMA, composed for the concert. He did sound design for
            and co-wrote (with Jon Raskin) the score for the feature-length
            film, “The Murder of Hi Good,” by filmmaker Lee Lorenzo Lynch.
          </p>
          <p className="mb-4">
            Brett Eastman has been an active teacher working in the San
            Francisco Bay Area since 2008, teaching private lessons to students
            of all ages in drums, guitar, and piano. He has taught many students
            over the years, of all different skill levels and ages, some of whom
            have been accepted to Ruth Asawa School of the Arts, and some have
            gone on to study music at university. He is an alumnus of the Walden
            School’s Teacher Training institute for music teachers. To learn
            more about Brett as music teacher, click here.
          </p>
          <p className="mb-4">
            As a performing rock musician, he cofounded, coproduced and played
            bass in sci-fi punk band Andy Human and the Reptoids. He has worked
            as a session musician in studios in the Bay Area, New York, and Los
            Angeles, and he has toured throughout the United States and Europe
            in various groups. As a recording engineer, he has produced records
            by Bay Area underground bands including Preening, The World, Pang,
            Lenz, Baus, Penny Machine, Dancer, and Brian Glaze.
          </p>
          <div className="flex justify-around">
            <Image
              src={Headshot}
              width={500}
              height={500}
              alt="Picture of Brett Austin Eastman"
            />
          </div>
          <p className="flex justify-around text-sm mb-4">
            Photo by Travis Woodland
          </p>
          <p className="mb-4">
            Brett was born in Redmond, WA on April 13, 1980. He grew up in
            Redding, CA before moving to San Francisco to study at San Francisco
            State University. He studied classical percussion with David
            Rosenthal, piano with Inara Morgenstern, and composition with
            Richard Festinger, Josh Levine, and Carlos Sánchez-Gutiérrez.
          </p>
        </div>
      </div>
    </>
  );
}
