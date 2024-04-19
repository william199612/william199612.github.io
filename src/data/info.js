const INFO = {
	home: {
		title: "Welcome",
		description:
			"A passionate student at QUT pursuing a Master of IT with a focus on computer science.",
	},
	about: {
		title: "About",
		welcome: {
			title: "Hello there!👋",
			description:
				"I'm William Hung, and I'm thrilled to welcome you to my corner of the internet. This About page is where you'll get to know a little bit more about the person behind the screen.",
			image:
				"https://images.unsplash.com/photo-1595947006841-0984683d036e?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		who: {
			title: "Who Am I? 🤔",
			description:
				"I'm currently a student almost graduating from QUT, Australia and also a Software Developer Intern at E2NOVA, a cloud communication platform for businesses. Love anime, videogame, music, and workout.",
			image:
				"https://images.unsplash.com/photo-1713145872395-2dbbff0f8d37?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		story: {
			title: "My Story 📔",
			description:
				"Made in Taiwan at 1996. Growing up in Shanghai and attending various schools has shaped my ability to adapt, grow quickly, and thrive in diverse environments. Along my journey, I've honed my skills in JavaScript, C#, and Python, and I'm proficient in frameworks like React.js, Vue.js (still learning!), and Node.js. And Still on my way learning something new!",
			image:
				"https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		what: {
			title: "What I Do? 🤩",
			description:
				"In my day-to-day life, you'll find me immersed in coding, collaborating with my team to develop innovative solutions, and constantly learning and adapting to new technologies. I thrive in dynamic environments where I can apply my technical skills and creativity to solve complex problems.",
			image:
				"https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		why: {
			title: "Why I Do it? 🤪",
			description:
				"It's simple: I'm driven by a passion for innovation and a desire to make a positive impact through technology. I believe that with the right tools and mindset, we can create solutions that improve lives and transform industries. Every day, I wake up excited to take on new challenges and contribute to meaningful projects.",
			image:
				"https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		getInTouch: {
			title: "Get In Touch 🙌",
			description:
				"Enough about me... I'd love to hear from you! Whether you want to chat about technology, collaborate on a project, or just say hello, feel free to reach out!",
		},
	},
	resume: {
		title: "Resume",
		name: "William Hung",
		subtitle: "Junior Software Developer",
		summary:
			"A passionate student at QUT pursuing a Master of IT with a focus on computer science. With a strong interest on machine learning and front-end development, I experienced two months of valuable internship experience as a Front End Intern. I thrive both as a collaborative team member and as an independent worker. I am characterized by my rapid learning abilities, keen attention to detail, and an unwavering eagerness to acquire new skills and tackle challenges.",
		career: [
			{
				title: "Software Development Intern",
				date: "Jan 2024 - present",
				location: "(Remote) Taipei, Taiwan",
				company: "E2NOVA",
				type: "IT",
				companyLogo: "",
				companyInfo:
					"A cloud communication platform for business",
				companyLink: "https://www.evoxglobal.com/en/home",
				description: [
					"Proficient in drafting comprehensive API documentation and conducting thorough testing procedures to ensure functionality, reliability, and security of APIs.",
					"Skilled in developing sample code snippets in Golang and PHP to demonstrate API integration and usage, facilitating seamless integration for developers and clients.",
					"Completed formal training in AWS Connect, gaining proficiency in leveraging AWS Connect services to build and manage scalable and secure contact center solutions.",
				],
			},
			{
				title: "Frontend Intern",
				date: "Dec 2024 - Jan 2023",
				location: "Taipei, Taiwan",
				company: "Askplore",
				type: "IT",
				companyLogo: "",
				companyInfo:
					'Specializes in "website design", "system development", "graphic design" and "brand planning" to help customers expand their business smoothly.',
				companyLink: "https://www.askplore.com/en",
				description: [
					"Used Vue.js to create a case page for company official website",
					"Adjusted and updated website page under the direction of the supervisor",
				],
			},
			{
				title: "Creator Operation Manager",
				date: "Mar 2021 - Apr 2022",
				location: "Taipei, Taiwan",
				company: "Encore Days",
				type: "social",
				companyLogo: "",
				companyInfo:
					"Social media platform for the pre-Millennial generations to increase their social capital, backed by Taiwan FamilyMart",
				companyLink: "https://encoredays.com/en/",
				description: [
					"Increased the number of KOC on Encore platform from 30 to 100 under a month",
					"Increased 15% on Facebook engagement (Share, Like, Comment) through social meida  operation within a month",
				],
			},
			{
				title: "Venture Capital Intern",
				date: "Aug - Sep 2018",
				location: "Taipei, Taiwan",
				company: "CSC Venture Capital",
				type: "Business",
				companyLogo: "",
				companyInfo:
					"CSC Venture Capital provide its investment targets long-term, stable financial resources and comprehensive assistance in areas ranging from IPO consultations, share distribution and allocation, financial services, etc.",
				companyLink:
					"https://www.capital.com.tw/en_V7/aboutcapital/group/CSCventure.aspx",
				description: [
					"Delivered an Online Furniture industry analysis report and provided investment recommendations based on trends",
					"Supported an Asia-based music education platform to raise their Series B fundraising round",
				],
			},
		],
		skills: {
			0: {
				name: "Programming Language",
				description: ["JavaScript", "C#", "Python"],
			},
			1: {
				name: "Web Development Framework",
				description: ["React", "NodeJs"],
			},
			2: {
				name: "Database",
				description: ["MongoDB", "MySQL"],
			},
			3: {
				name: "Version Control",
				description: ["Git", "GitHub"],
			},
			4: {
				name: "Project Management",
				description: ["JIRA", "Confluence"],
			},
			5: {
				name: "Cloud Service",
				description: ["AWS"],
			},
		},
		outputs: {},
		qualifications: {
			0: {
				name: "AWS Connect Certificate",
			},
			1: {
				name: "Udemy 2024 Full Stack Web Development",
			},
			2: {
				name: "Udemy 2022 Python Full Course",
			},
		},
	},
};

export default INFO;
