# UJourney

## Inspiration
Picture this: You're buried under a mountain of LinkedIn profiles, desperately trying to map out the golden path to your dream job. It feels like searching for a needle in a haystack! That’s where UJourney comes in. We set out to revolutionize career planning by turning the overwhelming task of profile hunting into a breeze. Instead of getting lost in endless scrolls, UJourney harnesses LinkedIn data to deliver laser-focused, actionable steps you can take right at your university. Our mission? To transform career exploration into a clear, strategic journey from ambition to achievement.

## What It Does
UJourney is like having a career GPS with a personality. Tell it your dream job, and it will instantly scan the LinkedIn career cosmos to reveal the paths others have taken. No more endless profile scrolling! Instead, you get a curated list of personalized steps—like joining that robotics club or snagging that perfect internship—so you can be the most prepared candidate out there. With UJourney, the path to your dream job isn’t just a distant vision; it’s a series of clear, actionable steps right at your fingertips.

## How We Built It

### Core Components
1. **Gathering Personal Information:**
   - **Technologies Used:** React, Node.js, Auth0
   - We start by seamlessly integrating LinkedIn authorization to collect essential details like name and email. This allows users to create and manage their profiles in our system. For secure login and sign-up, we leveraged Auth0, ensuring a smooth and safe user experience.

2. **Filtering LinkedIn Profiles:**
   - **Technologies Used:** Python, MongoDB
   - We set up a MongoDB database by scraping LinkedIn profiles, capturing a wealth of career data. Using Python, we filtered this data based on keywords related to company names and job roles. This process helps us pinpoint relevant profiles and extract meaningful insights.

3. **Curating Optimal Career Paths:**
   - **Technologies Used:** Gemini API, JavaScript, CSS, HTML
   - Our AI model takes it from here. By feeding the filtered data and user information into an advanced model via the Gemini API, we generate personalized career paths, complete with timelines and actionable recommendations. The model outputs these insights in a structured JSON format, which we then translate into an intuitive, user-friendly UI design using React, Tailwind CSS, and other web technologies.

## Challenges We Ran Into

**Problem:** LinkedIn Scraping Restrictions  
**Solution:** Manual Database Creation  
Our initial plan was to directly scrape LinkedIn profiles based on company names and job roles to feed data into our AI model. However, LinkedIn’s policies prevent direct scraping from their application. We turned to a third-party LinkedIn scraper, but this tool came with its own limitations, such as restricting us to only 10 profiles per company and lacking an API for automation. To work around these limitations, we manually built a database focused on the top five most commonly searched companies and job roles. This approach allowed us to gather essential data to effectively train our AI model and provide valuable recommendations.

## Accomplishments That We're Proud Of
1. **Rapid Development:**  
   We successfully developed and launched UJourney in a remarkably short period of time. Despite the tight timeline, we managed to pull everything together efficiently and effectively.

2. **Making the Most of Free Tools:**  
   Working with limited resources and relying on free versions of various software, we still managed to create a fully functional version of UJourney. Our resourcefulness allowed us to overcome budget constraints and still deliver a high-quality product.

3. **University-Specific Career Plans:**  
   One of our standout achievements is the app’s ability to provide personalized career plans tailored to specific universities. By focusing on actionable steps relevant to users' educational contexts, UJourney offers unique value that addresses individual career planning needs with precision.

## What We Learned
1. **Adaptability is Key:**  
   Our journey taught us that flexibility is crucial in overcoming obstacles. When faced with limitations like LinkedIn's scraping restrictions, we had to quickly pivot our approach. This experience reinforced the importance of adapting to challenges and finding creative solutions to keep moving forward.

2. **Data Quality Over Quantity:**  
   We learned that the quality of data is far more important than sheer volume. By focusing on the most commonly searched companies and job roles, we ensured that our AI model could provide relevant and actionable insights, even with a limited dataset. This underscored the value of precision and relevance in data-driven projects.

3. **Resourcefulness Drives Innovation:**  
   Working within constraints, such as using free software and limited resources, highlighted our team’s ability to innovate under pressure. We discovered that resourcefulness can turn limitations into opportunities for creative problem-solving, pushing us to explore new tools and methods.

4. **User-Centric Design Matters:**  
   Our focus on creating university-specific career plans taught us that understanding and addressing user needs is essential for success. Providing tailored, actionable steps for career planning showed us the impact of designing solutions with the user in mind, making the tool genuinely useful and relevant.

## What's Next for UJourney

**Upcoming Features:**
1. **Resume Upload Feature:**  
   Introducing a resume upload feature to allow users to gather personal information directly from their resumes, streamlining profile creation and reducing manual data entry.

2. **Real-Time University Information:**  
   Scraping university websites to provide real-time updates on campus events and activities. This feature will enable users to see upcoming events and automatically add them to their calendars.

3. **Enhanced Community Involvement:**  
   Allowing users to view their friends' dream jobs and career paths to facilitate connections with like-minded individuals and foster a community where students can share experiences related to jobs and university clubs.

4. **Automated LinkedIn Web Scraping:**  
   Automating LinkedIn data scraping to expand our database with up-to-date and relevant career information, enhancing the app’s ability to provide accurate recommendations.

5. **AI-Driven Job Recommendations:**  
   Leveraging real-time market information and AI to recommend job opportunities that are ideal for the current year. Users will also be able to apply for these jobs directly through the app, making the job application process more efficient and seamless.

## Tech Stack
- **Frontend:** React, Tailwind CSS, JavaScript, HTML, CSS
- **Backend:** Node.js, Python
- **Database:** MongoDB
- **APIs:** Gemini API
- **Tools:** Auth0, Zapier, Git, Postman

## Getting Started
To get started with UJourney, follow these steps:
1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Configure environment variables and authentication (refer to `.env.example`)
4. Start the application: `npm start`



