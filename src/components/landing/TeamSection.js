import Title from 'components/landing/Title';
import TeamCard from 'components/landing/TeamCard';
import Image1 from 'assets/img/shaq.jpg';
import Image2 from 'assets/img/beatcrime.jpg';
import Image3 from 'assets/img/vidha.jpg';
import Image4 from 'assets/img/mike.jpg';
import Image5 from 'assets/img/yvonne.jpg';

export default function TeamSection() {
    return (
        <section className="pt-20 pb-48">
            <div className="container max-w-7xlmx-auto px-4">
                <Title heading="Meet the Team">
                    Meet some of the team member's at Kulture 808s <br />
                    We have various departments operating under the umbrella name Kulture808s but below are the major league members from various departments.
                </Title>
                <div className="flex flex-wrap justify-center">
                    <TeamCard
                        img={Image1}
                        name="Shaqmatic"
                        position="CEO"
                    />
                </div>
                <div className="p-5" />
                <div className="flex flex-wrap">
                    <TeamCard
                        img={Image5}
                        name="Yvonne"
                        position="Customer Relations/PA "
                    />
                    <TeamCard
                        img={Image2}
                        name="Beat Crime"
                        position="Producer"
                    />
                    <TeamCard
                        img={Image3}
                        name="Vidha Miseh"
                        position="Producer/Artist"
                    />
                    <TeamCard
                        img={Image4}
                        name="E-Creatives"
                        position="Photography/Videography"
                    />
                </div>
            </div>
        </section>
    );
}
