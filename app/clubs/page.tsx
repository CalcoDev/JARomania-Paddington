import Image from "next/image";

const clubs = [
  {
    title: "Neurobotix",
    description:
      "Echipa Neurobotix reprezintă Colegiul Național 'Mihai Viteazul' București în competiția de robotică FIRST Tech Challenge, începând cu anul 2019. Participând la evenimente prestigioase, cum ar fi competițiile BRD FIRST Tech Challenge, Neurobotix și-a construit o reputație solidă. Prin implicarea în activități STEM (Science, Technology, Engineering and Mathematics), echipa își propune să atragă elevi pasionați și să creeze o atmosferă de 'gracious professionalism' și competitivitate în spiritul FIRST. Premiile obținute, printre care Motivate Award și Connect Award, atestă angajamentul și excelența echipei.",
    website: "",
    facebook: "https://www.facebook.com/neurobotix",
    instagram: "https://www.instagram.com/ftc_neurobotix/",
    year: `2019`,
    icon: `neurobotix.png`,
  },
  {
    title: "Qube",
    description: `Echipa Qube reprezintă Colegiul Național "Mihai Viteazul" București în competiția de robotică FIRST Tech Challenge. Cu participări începând din sezonul 2016-2017, Qube a obținut victorii deosebite, ajungând să fie prima echipă românească care a jucat finala mare a competiției și să participe la Campionatul Mondial FIRST Tech Challenge din Detroit, SUA. Performanțele echipei au inclus și participări la competiții internaționale precum FIRST Russia Open și Korea Robot Championship, obținând multiple premii speciale și recunoașteri pentru abilitățile și spiritul competitiv.`,
    website: `https://www.quberobotics.ro/`,
    facebook: `https://www.facebook.com/qube14277`,
    instagram: `https://www.instagram.com/therealqube`,
    year: `2016`,
    icon: `qube.png`,
  },
  {
    title: "Ignite",
    description: `Echipa Ignite, cunoscută anterior sub numele Qube Jr., este a doua echipă de robotică a Colegiului Național "Mihai Viteazul" din București. Înființată în 2018, echipa a demonstrat perseverență și excelență în competiții, obținând premii notabile precum locul 2 la Connect Award și locul 1 la Compass Award. Cu un focus pe abilitățile tehnice și de marketing, Ignite își propune să promoveze educația STEM și valorile FIRST în rândul adolescenților, implicându-se în diverse evenimente și sprijinind echipele FIRST Lego League ale colegiului.`,
    website: `http://www.igniterobotics.ro`,
    facebook: `https://www.facebook.com/igniteRO114`,
    instagram: `https://www.instagram.com/ignite_robotics`,
    year: `2018`,
    icon: `ignite.png`,
  },
  {
    title: "MUN",
    description: `Model United Nations reprezintă denumirea oficială atribuită simulărilor academice ale conferințelor Organizației Națiunilor Unite. Această activitate își propune să aducă laolaltă tineri din diferite colțuri ale lumii, cu profiluri și aspirații diverse, în vederea dezvoltării abilităților de oratorie, public speaking și leadership prin intermediul dezbaterilor în limba engleză. Echipa MUN al Colegiului Național „Mihai Viteazul” are o istorie de peste un deceniu și excelează prin antrenarea și pregătirea elevilor pentru participarea la conferințe naționale și internaționale.`,
    website: ``,
    facebook: ``,
    instagram: ``,
    year: `< 2014`,
    icon: `munob.png`,
  },
  {
    title: "Capture It",
    description: `Capture it este un club de fotografie destinat pentru cei pasionați de arta frumosului si fotografi. Lunar, la etajul 1 al scolii, clubul organizează expoziții cu tematicile respective din acea luna/anotimp. Pe langa aceasta, clubul organizează ședințe odata la doua saptamani unde se discuta pozele realizate de participanții clubului si cum ar putea acestea sa fie îmbunătățite.`,
    website: ``,
    facebook: ``,
    instagram: `https://www.instagram.com/capture_it_club`,
    year: `2022`,
    icon: `nonexistent.png`,
  },
  {
    title: "Cafeneaua Literara",
    description: `Cafeneaua literara este un club de lectura ce presupune intalniri lunare pentru a discuta despre cartile propuse. Acestea au loc la biblioteca, in sala patrimoniu sub coordonare doamnei Bradescu Steliana.`,
    website: ``,
    facebook: ``,
    instagram: ``,
    year: `< 2014`,
    icon: `cafeneaua_literara-2.png`,
  },
  {
    title: "Pache Debate",
    description: `Pache Debate Club este clubul de dezbateri al liceului. Este comunitate în care te poți dezvolta pe plan atât academic, cât și social; un loc unde îți îmbogățești cultura generală și unde dobândești experiențe noi. Sedintele sunt organizate in fiecare weekend, de obicei sub forma unui meci de debate. De asemenea, trainerii organizeaza antrenamente pe stil, continut si strategie, in ajutorul debaterilor care cauta să își îmbunătățească capabilitatile oratorice. Impreună cu aceștia, membrii clubului de dezbateri se pregătesc pentru diverse competiții, precum "Pache Open" (organizat tot de echipa noastra) și "Tinerii Dezbat" (olimpiadă acreditată de Minister).`,
    website: ``,
    facebook: ``,
    instagram: ``,
    year: `< 2014`,
    icon: `pache_debate.png`,
  },
  {
    title: "Interact",
    description: `Clubul Interact este clubul de voluntariat al liceului, o organizație non-guvernamentală și non-profit care se ocupă cu organizarea de evenimente caritabile. Pentru membrii săi, Interact reprezintă o familie, un loc unde experiența voluntariatului se îmbină cu camaraderia.`,
    website: ``,
    facebook: `https://www.facebook.com/itcmihaiviteazul`,
    instagram: `https://www.instagram.com/itc_mihaiviteazul/`,
    year: `< 2014`,
    icon: `interact.png`,
  },
  {
    title: "Trupa de Teatru Orpheus",
    description: `Trupa Orpheus a luat ființă în anul școlar 1999-2000, ca urmare a unui proiect de evaluare la literatură (capitolul Shakespeare, clasa a IX-a) la clasele intensive și de profil uman. În primăvara lui 2000, am organizat un festival de teatru la care am invitat în juriu pe domnul George Mihăiță, directorul Teatrului de Comedie. Începând din toamna aceluiași an, am început pregătirea spectacolului "Hamlet" (4 ore și jumătate), pe care l-am jucat în primăvara anului 2002, având 3 reprezentații (Teatrul de Comedie, Teatrul Ion Creangă și la Biserica Anglicană). În 2006, am inițiat Festivalul Internațional de Teatru pentru Tineret „Shakespeare’s Heritage” care s-a desfășurat până în 2016.`,
    website: ``,
    facebook: ``,
    instagram: ``,
    year: `1999`,
    icon: `trupa_orpheus.png`,
  },
  {
    title: `Floare de Colț`,
    description: `Printre activitățile extrașcolare ale Colegiului Național „Mihai Viteazul”, s-a înființat în anul 1994 o fundație ecologică, și anume Fundația Ecologică „Floare de Colț”.`,
    website: ``,
    facebook: ``,
    instagram: ``,
    year: `1994`,
    icon: `floare_de_colt.png`,
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
