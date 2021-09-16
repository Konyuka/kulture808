import H2 from '@material-tailwind/react/Heading2';
import LeadText from '@material-tailwind/react/LeadText';
// import bgback from '../../assetindex.module.scss';

export default function Header() {

    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
            <div className="bg-back bg-cover bg-center absolute top-0 w-full h-full" />
            <div className="container max-w-8xl relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-justify">
                        <H2 color="white">Your story starts with us.</H2>
                        <div className="text-gray-200 font-bold">
                            <LeadText color="gray-200">
                                Welcome to Kulture 808's studio, based in Nairobi, Kenya. <br />
                                We are located at Donholm Greenfields Estate, a few minutes from the CBD. <br /><br />
                                This is a team of young professionals with passion for music. <br />
                                Since we have a deep understanding and experience in the Kenyan Music Industry, we try to make work simpler for our visitors. <br />
                                We offer upto an all-rounded package for artists, where we facilitate through Audio and Video production. Dont forget celebrity Photograpy and Branding. <br />
                                <span className="font-italic"> Welcome!</span>  
                            </LeadText>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

