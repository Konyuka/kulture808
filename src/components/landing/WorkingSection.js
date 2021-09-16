import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
// import Icon from '@material-tailwind/react/Icon';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
import StatusCard from 'components/landing/StatusCard';
import Art from 'assets/img/blog.jpg';
// import Teamwork from 'assets/img/teamwork.jpeg';

export default function WorkingSection() {
    return (
        <section className="pb-20 bg-gray-100 -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap relative z-50">
                    <StatusCard
                        color="lightBlue"
                        icon="movie" 
                        title="Video Production"
                    >
                        State of art Video production for music videos, small skits, interviews, podcasts & memers. <br />
                        Our mordern equipment and professional team will guarantee the best version of your idea.
                    </StatusCard>
                    <StatusCard
                        color="lightBlue"
                        icon="speaker"
                        title="Audio Production"
                    >
                        Buy beats and/or book for a recording sessions with passionate and experienced producers and lets continue the music revolution. <br />
                        You can also arrange for Voice Overs, Dj tags, podcast and any audio processing services. Quality is the standard!     
                    </StatusCard>
                    <StatusCard
                        color="lightBlue"
                        icon="camera"
                        title="Photography"
                    >
                        Catch a booking with our amazingly talented creatives. Photography is all about angles and this is best done by individual who really have
                        that eye for photography. Our team has mastered photograpy, color grading, editing and coordinating photo sets. <br />
                        You deserve the best...  
                    </StatusCard>
                </div>

                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        <div className="mr-10 text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <i className="fa fa-rss fa-2x"></i> 
                        </div>
                        <span className="text-4xl">Featured Blog</span>
                        <H4 color="gray">Rekless in da house</H4>
                        <LeadText color="blueGray">
                            If you are familiar with Kenyan music, then you must know the face in the middle. 
                            The one and only ”King of Gengeton” Rekles” paid us a humble visit and we were so proud to host and work with him. 
                            We not only worked with himm but we got a chance to discus the future of Gengeton music. 
                        </LeadText>
                        <LeadText color="blueGray">
                            Gengeton is a music vibe originating from the ghettos of Nairobi city.
                            The music, despite of the negative judgemental it’s getting from the high end society, it’s a crowd puller and a trend to most of Kenyans.
                            It’s critics are the same who make its youtube views boom.
                            We all came to a conclusion that Gengeton is Kenyan like the national anthem and it’s there to stay.
                            When roots reggae was on it’s uprise in the late and early 70s, nobody prophesied it a great future, years later Bob Marley, Peter Tosh or Lucky Dube are names you don’t need to mention twice to anybody.
                            Gengeton artists you are all welcome for a session in our studio. Let’s keep made in Kenya great.
                        </LeadText>
                        <a
                            href="#pablo"
                            className="font-medium text-light-blue-500 mt-2 inline-block"
                        >
                            Read More...
                        </a>
                    </div>

                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Card>
                            <CardImage alt="Card Image" src={Art} />
                            <CardBody>
                                <H6 color="gray">Studio's Blog Posts</H6>
                                <Paragraph color="blueGray">
                                    You can find more related articles on our blog posts page. 
                                    We have a variety of post inclusive of opertaions in the studio, 
                                    Music as an art, tips on photography, videography and audio production, 
                                    celebrity visit documentation and lots more..... <br /> <br />

                                    <a
                                        href="#pablo"
                                        className="font-medium text-light-blue-500 mt-2 inline-block"
                                    >
                                        More blogs...
                                    </a>
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
