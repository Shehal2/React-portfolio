import { useState } from 'react';

interface SocialMedia {
    name: string;
    link: string;
}

interface PersonalDetails {
    age: number;
    location: string;
    email: string;
    phone: string;
}

const Aboutme = () => {
    const [name, setName] = useState('John Doe');
    const [title, setTitle] = useState('Software Engineer');
    const [description, setDescription] = useState('Highly motivated and experienced software engineer with a passion for building scalable and efficient applications.');
    const [socialMedia, setSocialMedia] = useState<SocialMedia[]>([
        
    ]);
    const [personalDetails, setPersonalDetails] = useState<PersonalDetails>({
        age: 30,
        location: 'New York',
        email: 'johndoe@example.com',
        phone: '123-456-7890',
    });

    return (
        <div className="flex flex-col md:flex-row justify-center mb-10 gap-4">
            <div className="bg-white rounded-lg shadow-md p-8 mx-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="bg-gray-200 border-2 border-dashed rounded-full w-40 h-40 mx-auto mb-4"></div>
                <h2 className="text-2xl font-bold text-blue-900 mb-2 text-center">{name}</h2>
                <p className="text-lg text-gray-600 mb-4 text-center">{title}</p>
                <p className="text-gray-600 mb-8">{description}</p>
                <div className="flex justify-center mb-4 flex-wrap gap-2">
                    {socialMedia.map((media, index) => (
                        <a key={index} href={media.link} target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-700 transition duration-300 mx-2">
                            {media.name}
                        </a>
                    ))}
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 mx-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Personal Details</h2>
                <div className="flex flex-col mb-4">
                    <p className="text-lg text-gray-600 mb-2">Name: {name}</p>
                    <p className="text-lg text-gray-600 mb-2">Age: {personalDetails.age}</p>
                    <p className="text-lg text-gray-600 mb-2">Location: {personalDetails.location}</p>
                    <p className="text-lg text-gray-600 mb-2">Email: {personalDetails.email}</p>
                    <p className="text-lg text-gray-600 mb-2">Phone: {personalDetails.phone}</p>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;