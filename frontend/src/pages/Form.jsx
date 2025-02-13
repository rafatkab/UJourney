import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const [university, setUniversity] = useState();
  const [program, setProgram] = useState();
  const [currentYear, setCurrentYear] = useState();
  const [expected, setExpected] = useState();
  const [experience, setExperience] = useState();
  const [skills, setSkills] = useState();
  const [clubs, setClubs] = useState();
  const [company, setCompany] = useState();
  const [position, setPosition] = useState();

  const navigate = useNavigate();

  async function handleSubmit() {
    event.preventDefault();

    const data = {
      userInput: `Prompt:

Create a personalized career path for a university student based on the following information. The student aims for a specific job role at a targeted company. The output should be in JSON format. The JSON should include a timeline of actionable steps and additional recommendations.

Student Information:

Name: ${name}
Degree: ${program}
University: ${university}
Year of Education: ${currentYear}
Expected Year of Graduation: ${expected}
Recent Job Experience: ${experience}
Skills: ${skills}
Activities: ${clubs}
Desired Company: ${company}
Desired Job Role: ${position}
Company and Role Information:

Company: [Company the Student Wants to Work For]
Job Role: [Job Role the Student Wants]
Career Paths: [Career Paths of Others in this Company and Role]
Output Structure:

Timeline: Provide a list of steps to achieve the dream job, organized by semester or year. Each step should include:

Action: What the student should do (e.g., join a club, take a course, apply for an internship).
Deadline: When the action should be completed.
Details: Additional information or resources related to the action.
Include these points in the timeline

Clubs: University clubs at that student's university that align with the student's career goals.
Courses: Relevant courses to take.
Events: Conferences, workshops, or networking events to attend.
Internships/Jobs: Types of internships or job experiences to pursue.

sample json formot:
{
  "timeline": [
    {
      "semester": "Fall 2024",
      "actions": [
        {
          "action": "Join the Robotics Club",
          "deadline": "October 2024",
          "details": "Participate in team projects and gain hands-on experience"
        },
        {
          "action": "Take Advanced Machine Learning Course",
          "deadline": "December 2024",
          "details": "Enhance skills in ML algorithms and their applications"
        }
      ]
    },
    {
      "semester": "Spring 2025",
      "actions": [
        {
          "action": "Apply for Summer Internship at Desired Company",
          "deadline": "March 2025",
          "details": "Gain relevant experience and network within the company"
        },
        {
          "action": "Attend the Tech Innovation Conference",
          "deadline": "April 2025",
          "details": "Network with industry professionals and stay updated on trends"
        }
      ]
    }
  ],
  "recommendations": {
    "clubs": [
      "Robotics Club",
      "AI and Data Science Society"
    ],
    "courses": [
      "Advanced Machine Learning",
      "Data Science for Engineers"
    ],
    "events": [
      "Tech Innovation Conference",
      "Engineering Career Fair"
    ],
    "internships_jobs": [
      "Software Engineering Intern",
      "Data Analyst Intern"
    ],
    "skills": [
      "Machine Learning Algorithms",
      "Data Analysis",
      "Programming in Python"
    ]
  }
}

Give this in raw json format. nothing else. IMPORTANT: Start the answer with '{' instead of \`\`\`
Also add a url to a picture pertaining to the theme at each semester item. 
Do not make anything up, and give actual club reccomendations at the student's university
Also, go all the way up to the students graduation year.
`,
    };

    try {
      const res = await axios.post('http://localhost:3000/chat', data);
      localStorage.setItem('data', res.data.response);
      navigate('/timeline');
      console.log(res.data.response);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  }

  return (
    <div className='flex justify-center items-center w-full h-full border-2 pt-8 overflow-y-scroll'>
      <div>
        <form
          onSubmit={handleSubmit}
          className='w-[100%] bg-white shadow-md rounded px-8 pt-6 pb-8'
        >
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'
            >
              University
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='University'
              onChange={(e) => setUniversity(e.target.value)}
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Program
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='Program'
              onChange={(e) => setProgram(e.target.value)}
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Current Year
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='Current Year'
              onChange={(e) => setCurrentYear(e.target.value)}
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Expected Graduation Date
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='Expected Graduation Date'
              onChange={(e) => setExpected(e.target.value)}
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Most Recent Job Experience
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='Most Recent Job Experience'
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Skills
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='Skills'
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Extra-Curriculars
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='Extra-Curriculars'
              onChange={(e) => setClubs(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='username'
            >
              Company that you are striving for
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='Company that you are striving for'
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Position
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='Position'
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <button
            type='submit'
            className='w-[45vw] text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900'
          >
            Generate Timeline
          </button>
        </form>
      </div>
    </div>
  );
}
