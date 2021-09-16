import Title from 'components/landing/Title';
import ContactCard from 'components/landing/ContactCard';
import Form from 'components/landing/Form';

export default function ContactSection() {
    return (
        <section className="pb-20 relative block bg-gray-100">
            <div className="container max-w-7xl mx-auto px-4 lg:pt-24">
                <Title heading="Why work with us?">
                    We believe we can offer you the best out of the current market at friendly and affordable rates. <br />
                    The studio is located in a quite and secure location with ample parking space and when in the studio, 
                    get to experience an ambient environment for a creative mind space. <br />
                    Aesthetic aside; we are well equiped with mordern tools for Audio, Photography and Videography and the best part of this
                    is the the team of professional behind the equipment. <br /> <br />
                    What more could you ask for?🤪 <br />
                    Come experience expertise at it's best at Kulture 808s studio. 
                </Title>

                <div className="flex flex-wrap -mt-12 justify-center">
                    <ContactCard icon="stars" title="Excelent Services">
                    </ContactCard>
                    <ContactCard icon="monetization_on" title="Friendly Rates">
                    </ContactCard>
                    <ContactCard icon="emoji_emotions" title="Ambient Vibe">
                    </ContactCard>
                </div>

                <Form />
            </div>
        </section>
    );
}
