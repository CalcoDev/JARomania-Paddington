import Image from "next/image";

/*
  {
    title: ``,
    description: ``,
    website: ``,
    facebook: ``,
    instagram: ``,
    year: ``,
    icon: ``,
  },
*/

const clubs = [
  {
    title: `MUN`,
    description: ``,
    website: `https://www.munob.ro/`,
    facebook: `https://www.facebook.com/MUNOB`,
    instagram: `https://www.instagram.com/therealmunob/`,
    year: `2014`,
    icon: `munob.png`,
  },
  {
    title: `Qube`,
    description: ``,
    website: `https://www.quberobotics.ro/`,
    facebook: `https://www.facebook.com/qube14277/?locale=ro_RO`,
    instagram: `https://www.instagram.com/therealqube/`,
    year: `2016`,
    icon: `qube.png`,
  },
  {
    title: `Ignite`,
    description: ``,
    website: `http://www.igniterobotics.ro/`,
    facebook: `https://www.facebook.com/igniteRO114/`,
    instagram: `https://www.instagram.com/ignite_robotics/`,
    year: `2018`,
    icon: `ignite.png`,
  },
  {
    title: `Neurobotix`,
    description: ``,
    website: ``,
    facebook: "https://www.facebook.com/neurobotix",
    instagram: "https://www.instagram.com/ftc_neurobotix/",
    year: `2019`,
    icon: `neurobotix.png`,
  },
  {
    title: "Pache Debate",
    description: ``,
    website: `https://www.pachedebate.ro/cgi-sys/suspendedpage.cgi`,
    facebook: `https://www.facebook.com/PacheDebate/?locale=ro_RO`,
    instagram: `https://www.instagram.com/pachedebate/`,
    year: `< 2014`,
    icon: `pache_debate.png`,
  },
  {
    title: "Interact",
    description: ``,
    website: ``,
    facebook: `https://www.facebook.com/itcmihaiviteazul`,
    instagram: `https://www.instagram.com/itc_mihaiviteazul/`,
    year: `< 2014`,
    icon: `interact.png`,
  },
  {
    title: `Floare de Colț`,
    description: ``,
    website: `https://fundatiaecologicafloaredecolt.ro/`,
    facebook: `https://www.facebook.com/FEFDC/?locale=ro_RO`,
    instagram: ``,
    year: `1994`,
    icon: `floare_de_colt.png`,
  },
  {
    title: "Cafeneaua Literara",
    description: ``,
    website: ``,
    facebook: ``,
    instagram: `https://www.instagram.com/cafeneaualiterara/`,
    year: `< 2014`,
    icon: `cafeneaua_literara-2.png`,
  },
  {
    title: `Accents Francophones`,
    description: ``,
    website: `https://www.cnmv.ro/activitati/revista-accents-francophones/`,
    facebook: ``,
    instagram: ``,
    year: ``,
    icon: `acc_franc.png`,
  },
  {
    title: `Mishu Med`,
    description: ``,
    website: ``,
    facebook: ``,
    instagram: `https://www.instagram.com/mishu_med/`,
    year: `2022`,
    icon: `med_club.png`,
  },
  {
    title: `Physics`,
    description: ``,
    website: ``,
    facebook: ``,
    instagram: ``,
    year: ``,
    icon: `physics.png`,
  },
  {
    title: `Mishu Spacelab`,
    description: ``,
    website: ``,
    facebook: ``,
    instagram: `https://www.instagram.com/mishus.spacelab/`,
    year: `2022`,
    icon: `spacelab.png`,
  },
  {
    title: `CNMV Arts`,
    description: ``,
    website: ``,
    facebook: ``,
    instagram: `https://www.instagram.com/club_arta_cnmv/`,
    year: `2021`,
    icon: `arts_club.png`,
  },
  {
    title: `Revista Viteazu`,
    description: ``,
    website: `https://sites.google.com/view/revista-viteazu`,
    facebook: ``,
    instagram: `https://www.instagram.com/rvs_viteazu/`,
    year: `2020`,
    icon: `revista.png`,
  },
  {
    title: `La Nouvelle Vague`,
    description: ``,
    website: ``,
    facebook: ``,
    instagram: `https://www.instagram.com/clubuldefilm_cnmv/`,
    year: `2022`,
    icon: `film_club.png`,
  },
  {
    title: `Shakespeare English Club`,
    description: ``,
    website: ``,
    facebook: ``,
    instagram: `https://www.instagram.com/shakespeare_englishclub/`,
    year: `2022`,
    icon: `shakespeare.png`,
  },
  {
    title: "Capture It",
    description: ``,
    website: ``,
    facebook: ``,
    instagram: `https://www.instagram.com/capture_it_club`,
    year: `2022`,
    icon: `photography.png`,
  },
  {
    title: `Genki`,
    description: ``,
    website: ``,
    facebook: ``,
    instagram: `https://www.instagram.com/clubul_de_japoneza_cnmv/`,
    year: `2022`,
    icon: `genki.png`,
  },
  {
    title: `BelaRRia`,
    description: ``,
    website: `https://www.youtube.com/@belarria3083`,
    facebook: ``,
    instagram: `https://www.instagram.com/belarria.ro/`,
    year: `2020`,
    icon: `belarria.png`,
  },
  {
    title: `Erasmus+`,
    description: ``,
    website: `https://www.erasmusplus.ro/`,
    facebook: `https://www.facebook.com/profile.php?id=100075950330445&paipv=0&eav=Afa8PCxPDdUbgSPji4BWOgYDe_fAYEsqha_9V8mDovd3PnccfP48OlXCfAv2K49x-pw&_rdr`,
    instagram: ``,
    year: ``,
    icon: `erasmusp.png`,
  },
  {
    title: `Clubul de radio`,
    description: `Bun venit în inima activităților culturale și educative ale liceului nostru, unde pasiunea pentru radio se transformă într-o experiență memorabilă pentru elevi! Clubul nostru de Radio, aflat sub îndrumarea dedicată a doamnei profesoare Victoria Sepciu și a membrului fondator Mario Cismaru, își propune să ofere elevilor o platformă accesibilă și plăcută pentru învățarea și perfecționarea limbilor străine, evidențiind, totodată, modalitățile proprii de exprimare.`,
    website: `https://bit.ly/cnmvplaylist`,
    facebook: ``,
    instagram: `https://www.instagram.com/radio.cnmv`,
    year: `2023`,
    icon: `clubul_de_radio-1.jpg`,
  },
];

const Card = ({
  title,
  description,
  website,
  facebook,
  instagram,
  year,
  icon,
}: {
  title: string;
  description: string;
  website: string;
  facebook: string;
  instagram: string;
  year: string;
  icon: string;
}) => {
  return (
    <div className="col-span-1 row-span-1 flex h-48 w-full flex-row gap-4 rounded-lg bg-secondary bg-opacity-25 p-4 transition-all duration-200 hover:scale-105 hover:cursor-pointer hover:bg-opacity-50 active:scale-95">
      <div className="min-w-[25%] flex-1">
        <Image
          className="aspect-square w-full rounded-lg object-cover"
          alt={`${title} LOGO`}
          src={`/${icon}`}
          width={512}
          height={512}
        />
      </div>
      <div className="flex-[4]">
        <div className="w-full overflow-hidden">
          <h1 className="break-words text-4xl font-semibold">{title}</h1>
          <p className="text-md text-wrap break-words font-light opacity-50">
            {website}
          </p>
          <div className="flex flex-col justify-between break-words">
            {facebook.length != 0 && (
              <div className="flex items-center gap-5">
                <Image
                  alt={`${title} FACEBOOK`}
                  src="/facebook.svg"
                  width={32}
                  height={32}
                />
                <a className="break-words" href={`${facebook}`}>
                  Facebook
                </a>
              </div>
            )}
            {instagram.length != 0 && (
              <div className="flex items-center gap-5">
                <Image
                  alt={`${title} INSTAGRAM`}
                  src="/instagram.svg"
                  width={32}
                  height={32}
                />
                <a className="break-words" href={`${instagram}`}>
                  Instagram
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Clubs() {
  return (
    <section className="mt-16 min-h-[calc(100vh-4rem)] w-full scroll-smooth">
      <div className="flex flex-col items-center gap-2 pt-24">
        <h1 className="text-center text-8xl font-bold">Clubs</h1>
        <p className="w-3/4 text-center text-lg font-normal">
          Our highschool offers a large variety of clubs to join, to explore and
          deepen your interestes by meeting like-minded people interested in
          learning more and collaborating!
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 pt-12 lg:grid-cols-2 2xl:grid-cols-3">
        {clubs.map((club) => (
          <Card key={club.icon} {...club} />
        ))}
      </div>
    </section>
  );
}
