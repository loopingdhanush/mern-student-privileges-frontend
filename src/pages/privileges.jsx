import {useState, useEffect} from 'react';

import axios from 'axios';


export default function Privileges(){
    const altpriv = [
  {
  
    title: 'GitHub Student Developer Pack',
    description: 'Free access to 20+ premium developer tools for students.',
    category: 'Software',
    eligibility: 'Valid college email (.edu or .ac.in)',
    steps: [
      'Sign up for GitHub',
      'Verify student email',
      'Apply for the pack'
    ],
    links: [ 'https://education.github.com/pack' ],
    logoUrl: 'https://img.icons8.com/?size=100&id=efFfwotdkiU5&format=png&color=000000',
    lastVerified: "2025-08-10"
  },
  {
   
    title: 'Notion Student Plan',
    description: 'Free Notion Plus Plan for students and educators.',
    category: 'Productivity',
    eligibility: 'Valid educational email',
    steps: [
      'Go to Notion for Students page',
      'Sign up or log in',
      'Verify with your school email'
    ],
    links: [ 'https://www.notion.so/students' ],
    logoUrl: 'https://img.icons8.com/?size=100&id=F6H2fsqXKBwH&format=png&color=000000',
    lastVerified: "2025-08-09"
},
  {
    
    title: 'Canva Pro for Education',
    description: 'Free access to Canva Pro for students and teachers.',
    category: 'Design',
    eligibility: 'Must be a verified student or educator',
    steps: [
      'Visit Canva for Education page',
      'Sign up or log in',
      'Upload proof of student status'
    ],
    links: [ 'https://www.canva.com/education/' ],
    logoUrl: 'https://img.icons8.com/?size=100&id=EZQdGLNeo7JI&format=png&color=000000',
    lastVerified: "2025-08-08"
  },
  {
  title: 'Figma Education Plan',
  description: 'Free access to Figma Professional plan for students and educators.',
  category: 'Design',
  eligibility: 'Must be a verified student or educator',
  steps: [
    'Visit Figma Education page',
    'Apply with proof of student/educator status',
    'Wait for approval email'
  ],
  links: [ 'https://www.figma.com/education/' ],
  logoUrl: 'https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000',
  lastVerified: "2025-08-08"
},{
  title: 'Microsoft Office 365 Education',
  description: 'Free access to Word, Excel, PowerPoint, OneNote, and Microsoft Teams for students.',
  category: 'Productivity',
  eligibility: 'Must have a valid school-issued email address',
  steps: [
    'Go to Microsoft Office Education page',
    'Enter your school email address',
    'Follow instructions to verify and set up your account'
  ],
  links: [ 'https://www.microsoft.com/en-in/education/products/office' ],
  logoUrl: 'https://img.icons8.com/?size=100&id=22989&format=png&color=000000',
  lastVerified: "2025-08-08"
},
{
  title: 'Autodesk Education Access',
  description: 'Free access to Autodesk software like AutoCAD, Maya, and Fusion 360 for students and educators.',
  category: 'Engineering & Design',
  eligibility: 'Must be enrolled in a qualified educational institution',
  steps: [
    'Go to Autodesk Education Community page',
    'Create an Autodesk account',
    'Verify student or educator status'
  ],
  links: [ 'https://www.autodesk.com/education/edu-software/overview' ],
  logoUrl: 'https://img.icons8.com/?size=100&id=40669&format=png&color=000000',
  lastVerified: "2025-08-08"
},
{
  title: 'JetBrains Student Pack',
  description: 'Free access to all JetBrains professional developer tools for students.',
  category: 'Development',
  eligibility: 'Must have a valid student email address or ISIC card',
  steps: [
    'Go to JetBrains Student page',
    'Sign up with your student email or upload proof',
    'Get free licenses for all JetBrains IDEs'
  ],
  links: [ 'https://www.jetbrains.com/community/education/#students' ],
  logoUrl: 'https://img.icons8.com/?size=100&id=K67L2Za9xxsG&format=png&color=000000',
  lastVerified: "2025-08-08"
},{
  title: 'Adobe Creative Cloud for Students',
  description: 'Discounted subscription for Photoshop, Illustrator, Premiere Pro, and more.',
  category: 'Design',
  eligibility: 'Must be a student with proof of enrollment',
  steps: [
    'Visit Adobe Students page',
    'Select your plan',
    'Verify student status at checkout'
  ],
  links: [ 'https://www.adobe.com/creativecloud/buy/students.html' ],
  logoUrl: 'https://img.icons8.com/?size=100&id=13677&format=png&color=000000',
  lastVerified: "2025-08-08"
},
{
  title: 'AWS Educate',
  description: 'Free AWS credits, training, and tools for students and educators.',
  category: 'Cloud',
  eligibility: 'Must be a student or educator',
  steps: [
    'Go to AWS Educate page',
    'Sign up with your school email',
    'Access free credits and courses'
  ],
  links: [ 'https://aws.amazon.com/education/awseducate/' ],
  logoUrl: 'https://img.icons8.com/?size=100&id=33039&format=png&color=000000',
  lastVerified: "2025-08-08"
},
{
  title: 'Namecheap Student Discount',
  description: 'Free domain name and SSL certificate for students.',
  category: 'Web Hosting',
  eligibility: 'Must be a student with GitHub Student Pack access',
  steps: [
    'Activate GitHub Student Developer Pack',
    'Get the Namecheap coupon code',
    'Redeem it on Namecheap website'
  ],
  links: [ 'https://nc.me/' ],
  logoUrl: 'https://play-lh.googleusercontent.com/OqNhnq-8y-CmnHn6LwfhWo5bmV0ydRg0yGRu_L1kbpClZg6oG3Lhe_3NYE-1hSYb5Zu_',
  lastVerified: "2025-08-08"
},
{
  title: 'Unity Student Plan',
  description: 'Free Unity Pro and other development tools for students.',
  category: 'Game Development',
  eligibility: 'Must be 16+ and enrolled in an accredited educational institution',
  steps: [
    'Go to Unity Student Plan page',
    'Sign in or create a Unity account',
    'Verify student status'
  ],
  links: [ 'https://unity.com/products/unity-student' ],
  logoUrl: 'https://img.icons8.com/?size=100&id=P08kExl7rixR&format=png&color=000000',
  lastVerified: "2025-08-08"
},
{
  title: 'Tableau for Students',
  description: 'Free 1-year license for Tableau Desktop and Tableau Prep.',
  category: 'Data Analytics',
  eligibility: 'Must be a verified student',
  steps: [
    'Visit Tableau for Students page',
    'Fill out the application form',
    'Upload proof of student status'
  ],
  links: [ 'https://www.tableau.com/academic/students' ],
  logoUrl: 'https://img.icons8.com/?size=100&id=9Kvi1p1F0tUo&format=png&color=000000',
  lastVerified: "2025-08-08"
},
{
  title: 'LinkedIn Premium for Students',
  description: 'Free 1-year LinkedIn Premium and LinkedIn Learning via GitHub Student Pack.',
  category: 'Career',
  eligibility: 'Must have GitHub Student Developer Pack access',
  steps: [
    'Activate GitHub Student Developer Pack',
    'Find LinkedIn Premium offer',
    'Redeem and enjoy free access'
  ],
  links: [ 'https://education.github.com/pack' ],
  logoUrl: 'https://img.icons8.com/?size=100&id=13930&format=png&color=000000',
  lastVerified: "2025-08-08"
}


]


    const[privileges, setprivileges] = useState([]); // used to store and fetch data from backend

    // useEffect is a hook that runs after the component mounts
    // this is used to fetch data from backend (mongodb) - make sure that the backend is running else it will not fetch data
    useEffect(() => {
        axios.get('http://localhost:5000/privileges') // make sure to update the URL of your backend
            .then(res => setprivileges(res.data))
            .catch(err=> 
                {
                    console.error("error fetching data : ",err)
                    setprivileges(altpriv) // if error occurs, use the altpriv data
                })
            
    },[]);

    const [selectedItem, setSelectedItem] = useState(null);

    return(
        <div className='p-4 flex flex-row justify-center flex-wrap'>
            
            {privileges.map((item) => (
                <div>
                      <div className='my-2 mx-2 overflow-hidden bg-gray-00 flex flex-row rounded-xl border border-gray-200
                      hover:outline hover:outline-2 hover:outline-gray-400 group select-none cursor-pointer'
                      onClick={() => setSelectedItem(item)}>

                      <div className="w-24 shrink-0 flex justify-center items-center bg-gray-200">
                          <img className="h-16 w-16 object-contain group-hover:scale-110 transition-transform duration-300 ease-in-out"src={item.logoUrl}/>
                      </div>

                      <div className='p-4 flex flex-col w-[250px] relative'>
                          <h1 className='font-bold text-md truncate geist'>{item.title}</h1>
                          <p className='text-sm mt-1 w-fit text-gray-1k font-semibold rounded-lg px-2 py-1 border border-gray-300 shadow-sm geist'>{item.category}</p>
                          <p className='text-sm mt-1 text-gray-1k line-clamp-2 geist'>{item.description}</p>
                          <p className='absolute p-1 px-2 bottom-0 right-0 text-gray-300 group-hover:text-gray-800 transition-colors duration-200 rounded-tl-lg'>➤</p>
                      </div>
      
                      </div>
                </div>
            ))}

            {selectedItem && (
                <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50' onClick={() => setSelectedItem(null)}>
                  <div className='bg-white rounded-lg shadow-lg max-w-md w-full relative mx-4 overflow-hidden'>

                    <div className="bg-gray-100 p-4 ">
                      <img className='h-16 w-16 object-contain' src={selectedItem.logoUrl}/>
                    </div>

                    <div className='p-4'>
                      <h2 className='text-xl font-bold mb-4'>{selectedItem.title}</h2>
                      <p className='text-gray-700 mb-2'>{selectedItem.description}</p>
                      <p className='text-sm text-gray-500 mb-2'>Category: {selectedItem.category}</p>
                      <p className='text-sm text-gray-500 mb-4'>Eligibility: {selectedItem.eligibility}</p>
                      <h3 className='font-semibold mb-2'>Steps to Claim:</h3>
                      <ul>
                        {selectedItem.steps.map((steps)=>(
                          <li className='text-sm text-gray-500 mb-1'>- {steps}</li>
                        ))}
                      </ul>
                      <h3 className='font-semibold mt-4'>Links:</h3>
                      <ul>
                        {selectedItem.links.map((link)=>(
                          <a href={link} className='text-sm text-gray-500 mb-1'>{link}</a>
                        ))}
                      </ul>
                      <p className='text-xs text-gray-400 mt-4'>Last Verified: {selectedItem.lastVerified}</p>
                      
                    </div>
              
                  </div>
                </div>
            )}

        </div>
        )}